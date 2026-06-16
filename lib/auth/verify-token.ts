import { jwtVerify, createRemoteJWKSet } from "jose"

const JWKS = createRemoteJWKSet(
    new URL(`${process.env.WSO2_IS_BASE_URL}/oauth2/jwks`)
)

export async function verifyToken(
    token: string
) {
    const { payload } =
        await jwtVerify(token, JWKS, {
            issuer: process.env.WSO2_IS_TOKEN_URL,
        })

    return payload
}