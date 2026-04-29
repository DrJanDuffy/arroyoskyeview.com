import { NextRequest, NextResponse } from 'next/server'
import { checkIndexingRateLimit, getUserIdentifier } from '@/lib/rate-limiter'
import { submitUrlsToIndexNow } from '@/lib/indexing/indexnow'

type SubmitRequestBody = {
  urls?: unknown
  keyLocation?: unknown
}

function isAuthorized(request: NextRequest): boolean {
  const webhookSecret = process.env.INDEXING_WEBHOOK_SECRET?.trim()
  if (!webhookSecret) {
    return false
  }

  const authHeader = request.headers.get('authorization')
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice('Bearer '.length).trim()
    if (token === webhookSecret) {
      return true
    }
  }

  const secretHeader = request.headers.get('x-indexing-secret')?.trim()
  return secretHeader === webhookSecret
}

function parseBody(body: SubmitRequestBody): {
  urls: string[]
  keyLocation?: string
} | null {
  if (!Array.isArray(body.urls)) {
    return null
  }

  const urls = body.urls.filter((item): item is string => typeof item === 'string')
  if (urls.length === 0) {
    return null
  }

  const keyLocation =
    typeof body.keyLocation === 'string' && body.keyLocation.trim().length > 0
      ? body.keyLocation.trim()
      : undefined

  return { urls, keyLocation }
}

export async function POST(request: NextRequest) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json(
        { ok: false, error: 'UNAUTHORIZED', message: 'Invalid or missing indexing secret.' },
        { status: 401 },
      )
    }

    const identifier = getUserIdentifier(request)
    const rateLimit = await checkIndexingRateLimit(identifier)
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          ok: false,
          error: 'RATE_LIMIT_EXCEEDED',
          message: `Rate limit exceeded. Try again after ${rateLimit.resetTime.toISOString()}.`,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimit.limit.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.reset.toString(),
          },
        },
      )
    }

    const rawBody = (await request.json()) as SubmitRequestBody
    const parsedBody = parseBody(rawBody)
    if (!parsedBody) {
      return NextResponse.json(
        {
          ok: false,
          error: 'INVALID_PAYLOAD',
          message:
            'Request body must include a non-empty urls array of strings. Optional: keyLocation.',
        },
        { status: 400 },
      )
    }

    const result = await submitUrlsToIndexNow(parsedBody)
    const status = result.ok ? 200 : 400
    return NextResponse.json(result, { status })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { ok: false, error: 'INTERNAL_ERROR', message: `Indexing submission failed: ${message}` },
      { status: 500 },
    )
  }
}
