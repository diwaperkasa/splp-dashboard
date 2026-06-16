import { NextResponse } from "next/server"

export async function GET() {
  const params = new URLSearchParams({
    client_id: process.env.WSO2_IS_CLIENT_ID!,
    response_type: "code",
    scope: "openid profile email",
    redirect_uri:
      `${process.env.APP_URL}/auth/callback`,
  })

  const loginUrl = `${process.env.WSO2_IS_AUTH_URL}?${params}`

  return NextResponse.redirect(loginUrl)
}