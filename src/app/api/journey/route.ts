import { NextResponse } from 'next/server';
import journey from '@/data/journey.json';

export async function GET() {
  try {
    return NextResponse.json({ data: journey });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
