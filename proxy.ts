// proxy.ts
import { NextRequest, NextResponse } from 'next/server'

const DEMO_SECRET = process.env.DEMO_SECRET ?? 'byfiord-demo'
const MAIN_SITE = 'https://byfiord.dev'

export function proxy(request: NextRequest) {  // ← proxy, nie middleware
  const cookie = request.cookies.get('demo_access')?.value

  if (cookie !== DEMO_SECRET) {
    const url = new URL(MAIN_SITE)
    url.searchParams.set('demo_blocked', '1')
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/demo-access).*)'],
}