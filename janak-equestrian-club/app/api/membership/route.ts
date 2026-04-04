import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, experience, program, message } = body ?? {};

  if (!name || !email || !experience || !program) {
    return NextResponse.json(
      { message: 'Please fill in all required fields.' },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: `Thanks ${name}, your enquiry for ${program} has been received. We will contact you at ${email}.`,
    data: { name, email, experience, program, message }
  });
}
