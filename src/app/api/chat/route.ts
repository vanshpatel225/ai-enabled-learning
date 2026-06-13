import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { query } = await req.json();

  console.log("Received:", query);

  return NextResponse.json({
    response: `You asked: ${query}`,
  });
}