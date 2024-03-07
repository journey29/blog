import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log(123);

  return NextResponse.json({ message: 123 });
}
