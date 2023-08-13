export function handler(event) {
  const userId = getUserId(event)
  // TODO: Get all TODO items for a current user
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      items
    })
  }
}
