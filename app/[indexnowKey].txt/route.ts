import { NextRequest, NextResponse } from 'next/server'

type RouteContext = {
  params: Promise<Record<string, string | string[] | undefined>>
}

export async function GET(_request: NextRequest, context: RouteContext) {
  const configuredKey = process.env.INDEXNOW_KEY?.trim()
  if (!configuredKey) {
    return new NextResponse('Not found', { status: 404 })
  }

  const routeParams = await context.params
  const indexnowKey =
    typeof routeParams.indexnowKey === 'string'
      ? routeParams.indexnowKey
      : undefined

  if (!indexnowKey) {
    return new NextResponse('Not found', { status: 404 })
  }
  if (indexnowKey !== configuredKey) {
    return new NextResponse('Not found', { status: 404 })
  }

  return new NextResponse(configuredKey, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
      'X-Robots-Tag': 'noindex',
    },
  })
}
