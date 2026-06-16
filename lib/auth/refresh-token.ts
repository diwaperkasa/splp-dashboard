import axios from "axios"
import https from "https"

export async function refreshAccessToken(
  refreshToken: string
) {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: process.env.WSO2_IS_CLIENT_ID!,
    client_secret:
      process.env.WSO2_IS_CLIENT_SECRET!,
  })

  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  })

  const response = await axios.post(
    process.env.WSO2_IS_TOKEN_URL!,
    params,
    {
      httpsAgent,
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },
    }
  )

  return response.data
}