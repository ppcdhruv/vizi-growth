import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  // TODO – hook up to DB or email service
  console.table({ name, email, message });
  return NextResponse.json({ ok: true });
}
