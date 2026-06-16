"use server"

import { cookies } from "next/headers"
import { refreshAccessToken } from "./refresh-token"

export async function isLoggedIn() {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("access_token")?.value
    const refreshToken = cookieStore.get("refresh_token")?.value

    if (!accessToken || !refreshToken) {
        return false
    }

    return true
}

export async function getToken() {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("access_token")?.value
    const refreshToken = cookieStore.get("refresh_token")?.value

    if (!accessToken || !refreshToken) {
        return null
    }

    const expiresAt = Number(cookieStore.get("token_expires_at")?.value)
    const now = Math.floor(Date.now() / 1000)
    const remaining = expiresAt - now
    // refresh jika sisa <= 300 detik
    if (remaining <= 300) {
        const newTokens = await refreshAccessToken(refreshToken)
        const newExpiresAt = Math.floor(Date.now() / 1000) + newTokens.expires_in

        cookieStore.set(
            "access_token",
            newTokens.access_token,
            {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                path: "/",
            }
        )

        cookieStore.set(
            "token_expires_at",
            newExpiresAt.toString(),
            {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                path: "/",
            }
        )

        // jika WSO2 rotate refresh token
        if (newTokens.refresh_token) {
            cookieStore.set(
                "refresh_token",
                newTokens.refresh_token,
                {
                    httpOnly: true,
                    secure: false,
                    sameSite: "lax",
                    path: "/",
                }
            )
        }

        return newTokens.access_token
    }

    return accessToken
}