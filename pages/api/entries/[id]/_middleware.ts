import { NextRequest, NextFetchEvent, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const id = req.page.params?.id || ''
  const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$')

  if (!checkMongoIDRegExp.test(id)) {
    return new Response(JSON.stringify({ message: `Given id ${id} is not valid a valid id` }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return NextResponse.next()
}
