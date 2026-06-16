import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(req: NextRequest) {
    const cookieStore = await cookies()

    cookieStore.delete("access_token")
    cookieStore.delete("token_expires_at")
    cookieStore.delete("refresh_token")

    const logoutUrl = new URL(process.env.WSO2_IS_LOGOUT_URL!, req.url)

    logoutUrl.searchParams.set(
        "post_logout_redirect_uri",
        `${process.env.APP_URL}/login`
    )

    const idToken = cookieStore.get("id_token")?.value

    if (idToken) {
        logoutUrl.searchParams.set(
            "id_token_hint",
            idToken
        )

        cookieStore.delete("id_token")
    }

    return NextResponse.redirect(
        logoutUrl
    )
}