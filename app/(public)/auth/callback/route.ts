import axios from "axios"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get("code")

    if (!code) {
        return NextResponse.redirect(
            new URL("/login", req.url)
        )
    }

    const body = new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: process.env.WSO2_IS_CLIENT_ID!,
        client_secret: process.env.WSO2_IS_CLIENT_SECRET!,
        redirect_uri: `${process.env.APP_URL}/auth/callback`,
    })

    const tokenRes = await axios.post(
        process.env.WSO2_IS_TOKEN_URL!,
        body,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    )

    const tokens = tokenRes.data
    const cookieStore = await cookies()
    const expiresAt = Math.floor(Date.now() / 1000) + tokens.expires_in

    cookieStore.set(
        "id_token",
        tokens.id_token,
        {
            httpOnly: true,
            path: "/",
        }
    )

    cookieStore.set(
        "access_token",
        tokens.access_token,
        {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/",
        }
    )

    cookieStore.set(
        "token_expires_at",
        expiresAt.toString(),
        {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/",
        }
    )

    cookieStore.set(
        "refresh_token",
        tokens.refresh_token,
        {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/",
        }
    )

    return NextResponse.redirect(
        new URL("/", req.url)
    )
}