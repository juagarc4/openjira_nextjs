import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware llamado')
  return NextResponse.next()
}
