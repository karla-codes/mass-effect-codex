exports.handler = async () => {
  const data = fetch(`${process.env.REACT_APP_API_URL}/api/entries/all`).then(res => res.json())

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
