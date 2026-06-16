import { NextRequest, NextResponse } from "next/server";
import { isLoggedIn } from "@/lib/auth/session"
import { getUser } from "@/lib/auth/get-user"


const PUBLIC_API = [
    "/api/auth/login",
    "/api/auth/callback",
];

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // skip public API
    if (PUBLIC_API.includes(pathname)) {
        return NextResponse.next();
    }

    // hanya protect /api
    if (pathname.startsWith("/api")) {
        const auth = await isLoggedIn()

        if (!auth) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        try {
            const payload = await getUser()

            if (!payload) {
                return NextResponse.json(
                    { message: "Unauthorized" },
                    { status: 401 }
                );
            }

            // inject user data ke header
            const requestHeaders = new Headers(req.headers);

            requestHeaders.set(
                "x-user-id",
                String(payload.sub)
            );

            requestHeaders.set(
                "x-user-name",
                String(payload.username)
            );

            return NextResponse.next({
                request: {
                    headers: requestHeaders,
                },
            });
        } catch (err) {
            return NextResponse.json(
                { message: "Invalid token" },
                { status: 401 }
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/api/:path*"],
};