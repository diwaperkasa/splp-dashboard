import axios from "axios"
import https from "https"

export async function refreshAccessToken() {
  const params = new URLSearchParams({
    grant_type: "client_credentials",
    scope: "apim:api_view apim:api_publish apim:api_create apim:api_delete apim:api_update",
  })

  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  })

  const response = await axios.post(
    process.env.WSO2_APIM_TOKEN_URL!,
    params,
    {
      httpsAgent,
      headers: {
        "Authorization": `Basic ${Buffer.from(`${process.env.WSO2_APIM_CLIENT_ID}:${process.env.WSO2_APIM_CLIENT_SECRET}`).toString('base64')}`,
      },
    }
  )

  return response.data
}