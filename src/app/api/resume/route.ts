import { NextResponse } from 'next/server';
import resume from '@/data/resume.json';

export async function GET() {
  try {
    return NextResponse.json({ data: resume });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
