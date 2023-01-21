import fetch from "node-fetch"

export async function handler() {
  const API_URL = `https://mass-effect-api.fly.dev/api/entries/all`
  const response = await fetch(API_URL)
  const data = await response.json()

  console.log(data)

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
