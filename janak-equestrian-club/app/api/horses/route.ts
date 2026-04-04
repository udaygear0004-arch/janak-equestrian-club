import { NextResponse } from 'next/server';
import { horses } from '@/lib/data';

export async function GET() {
  return NextResponse.json(horses);
}
