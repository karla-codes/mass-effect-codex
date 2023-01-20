const fetch = require("node-fetch")
const API_URL = `https://mass-effect-api.fly.dev/api/entries/all`

exports.handler = async () => {
  let response
  try {
    response = await fetch(API_URL)
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response,
    }),
  }
}
