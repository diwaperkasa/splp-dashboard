import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const user = {}
    return NextResponse.json(
        { message: "success", data: user },
        { status: 200 }
    );
}