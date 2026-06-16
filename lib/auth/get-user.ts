import { verifyToken } from "./verify-token"
import { getToken } from "./session"

export async function getUser() {
  const token = await getToken()

  if (!token) {
    return null
  }

  const payload = await verifyToken(token)

  if (!payload) {
    return null
  }

  return payload
}