import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { amount = 1 } = body;

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({ data: amount });
}
