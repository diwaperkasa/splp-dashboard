"use server"

import { cookies } from "next/headers"
import { refreshAccessToken } from "./refresh-token"

export async function getToken() {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("apim_access_token")?.value

    if (!accessToken) {
        return generateToken();
    }

    const expiresAt = Number(cookieStore.get("apim_token_expires_at")?.value)
    const now = Math.floor(Date.now() / 1000)
    const remaining = expiresAt - now
    // refresh jika sisa <= 300 detik
    if (remaining <= 300) {
        return generateToken();
    }

    return accessToken
}

const generateToken = async () => {
    const newTokens = await refreshAccessToken()
    const cookieStore = await cookies()
    const newExpiresAt = Math.floor(Date.now() / 1000) + newTokens.expires_in

    cookieStore.set(
        "apim_access_token",
        newTokens.access_token,
        {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/",
        }
    )

    cookieStore.set(
        "apim_token_expires_at",
        newExpiresAt.toString(),
        {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/",
        }
    )

    return newTokens.access_token
}