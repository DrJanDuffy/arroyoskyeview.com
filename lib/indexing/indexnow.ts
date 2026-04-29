type IndexingErrorCode =
  | 'INDEXING_DISABLED'
  | 'MISSING_API_KEY'
  | 'INVALID_URL'
  | 'INVALID_HOST'
  | 'TOO_MANY_URLS'

export type SubmitUrlsInput = {
  urls: string[]
  keyLocation?: string
}

export type SubmitUrlsResult = {
  ok: boolean
  submitted: string[]
  rejected: Array<{
    url: string
    code: Exclude<IndexingErrorCode, 'INDEXING_DISABLED' | 'MISSING_API_KEY'>
    message: string
  }>
  provider: 'indexnow'
  statusCode?: number
  message?: string
}

const DEFAULT_INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const DEFAULT_MAX_URLS_PER_SUBMISSION = 1000

function isEnabled(): boolean {
  return process.env.INDEXING_ENABLED?.toLowerCase() === 'true'
}

function getMaxUrlsPerSubmission(): number {
  const raw = process.env.INDEXING_MAX_URLS_PER_SUBMISSION
  if (!raw) return DEFAULT_MAX_URLS_PER_SUBMISSION
  const parsed = Number(raw)
  if (!Number.isFinite(parsed) || parsed < 1) return DEFAULT_MAX_URLS_PER_SUBMISSION
  return Math.floor(parsed)
}

function getAllowedHosts(): Set<string> {
  const hostCsv = process.env.INDEXING_ALLOWED_HOSTS?.trim()
  if (!hostCsv) return new Set(['www.arroyoskyeview.com'])
  return new Set(
    hostCsv
      .split(',')
      .map((host) => host.trim().toLowerCase())
      .filter(Boolean),
  )
}

function normalizeAndValidateUrls(
  rawUrls: string[],
  allowedHosts: Set<string>,
  maxUrls: number,
): SubmitUrlsResult {
  const deduped = [...new Set(rawUrls.map((url) => url.trim()).filter(Boolean))]
  const rejected: SubmitUrlsResult['rejected'] = []
  const accepted: string[] = []

  if (deduped.length > maxUrls) {
    return {
      ok: false,
      submitted: [],
      rejected: deduped.map((url) => ({
        url,
        code: 'TOO_MANY_URLS',
        message: `Maximum ${maxUrls} URLs per submission`,
      })),
      provider: 'indexnow',
      message: `Too many URLs: ${deduped.length}. Max allowed is ${maxUrls}.`,
    }
  }

  for (const rawUrl of deduped) {
    let parsed: URL
    try {
      parsed = new URL(rawUrl)
    } catch {
      rejected.push({
        url: rawUrl,
        code: 'INVALID_URL',
        message: 'URL is not a valid absolute URL',
      })
      continue
    }

    if (parsed.protocol !== 'https:') {
      rejected.push({
        url: rawUrl,
        code: 'INVALID_URL',
        message: 'Only HTTPS URLs are allowed',
      })
      continue
    }

    if (!allowedHosts.has(parsed.hostname.toLowerCase())) {
      rejected.push({
        url: rawUrl,
        code: 'INVALID_HOST',
        message: `Host must be one of: ${[...allowedHosts].join(', ')}`,
      })
      continue
    }

    accepted.push(parsed.toString())
  }

  return {
    ok: accepted.length > 0 && rejected.length === 0,
    submitted: accepted,
    rejected,
    provider: 'indexnow',
  }
}

export async function submitUrlsToIndexNow(
  input: SubmitUrlsInput,
): Promise<SubmitUrlsResult> {
  if (!isEnabled()) {
    return {
      ok: false,
      submitted: [],
      rejected: [],
      provider: 'indexnow',
      message: 'Indexing is disabled. Set INDEXING_ENABLED=true to enable submissions.',
    }
  }

  const indexNowKey = process.env.INDEXNOW_KEY?.trim()
  if (!indexNowKey) {
    return {
      ok: false,
      submitted: [],
      rejected: [],
      provider: 'indexnow',
      message: 'INDEXNOW_KEY is not configured.',
    }
  }

  const endpoint =
    process.env.INDEXING_API_BASE_URL?.trim() || DEFAULT_INDEXNOW_ENDPOINT
  const maxUrls = getMaxUrlsPerSubmission()
  const allowedHosts = getAllowedHosts()

  const normalized = normalizeAndValidateUrls(input.urls, allowedHosts, maxUrls)
  if (normalized.submitted.length === 0) {
    return {
      ...normalized,
      ok: false,
      message: normalized.message || 'No valid URLs remained after validation.',
    }
  }

  const host = new URL(normalized.submitted[0]).hostname
  const mixedHostUrls = normalized.submitted.filter(
    (url) => new URL(url).hostname.toLowerCase() !== host.toLowerCase(),
  )
  if (mixedHostUrls.length > 0) {
    return {
      ...normalized,
      ok: false,
      submitted: normalized.submitted.filter(
        (url) => !mixedHostUrls.includes(url),
      ),
      rejected: [
        ...normalized.rejected,
        ...mixedHostUrls.map((url) => ({
          url,
          code: 'INVALID_HOST' as const,
          message:
            'All URLs in a single IndexNow submission must belong to the same host.',
        })),
      ],
      message:
        'IndexNow rejected mixed hosts. Submit URLs grouped by host.',
    }
  }

  const keyLocation =
    input.keyLocation?.trim() ||
    process.env.INDEXNOW_KEY_LOCATION?.trim() ||
    `https://${host}/${indexNowKey}.txt`

  const payload = {
    host,
    key: indexNowKey,
    keyLocation,
    urlList: normalized.submitted,
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  })

  const responseText = await response.text()
  if (response.status === 200) {
    return {
      ...normalized,
      ok: true,
      statusCode: response.status,
      message: responseText.slice(0, 500) || 'IndexNow accepted URL submission.',
    }
  }

  if (response.status === 202) {
    return {
      ...normalized,
      ok: true,
      statusCode: response.status,
      message:
        responseText.slice(0, 500) ||
        'IndexNow accepted submission; key validation is pending.',
    }
  }

  const statusMessage: Record<number, string> = {
    400: 'Bad request. Verify payload format and URL list.',
    403: 'Forbidden. Verify INDEXNOW_KEY and key file ownership content.',
    422: 'Unprocessable entity. Confirm all URLs belong to the submitted host and key schema is valid.',
    429: 'Too many requests. Slow down submissions and retry later.',
  }

  if (!response.ok) {
    return {
      ...normalized,
      ok: false,
      statusCode: response.status,
      message: `${statusMessage[response.status] || 'IndexNow request failed.'} (${response.status}) ${responseText.slice(0, 500)}`,
    }
  }

  return {
    ...normalized,
    ok: true,
    statusCode: response.status,
    message: responseText.slice(0, 500) || 'IndexNow accepted URL submission.',
  }
}
