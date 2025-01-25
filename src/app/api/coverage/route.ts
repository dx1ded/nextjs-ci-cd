import { NextResponse } from "next/server"

export async function GET() {
  console.log((global as any).__coverage__ || null)
  return NextResponse.json({
    coverage: (global as any).__coverage__ || null,
  })
}
