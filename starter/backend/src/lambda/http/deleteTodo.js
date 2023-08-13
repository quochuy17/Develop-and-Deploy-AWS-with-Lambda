
export function handler(event) {
  const userId = getUserId(event)
  const todoId = event.pathParameters.todoId

  // TODO: Remove a TODO item by id
  return {
    statusCode: 204,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: ''
  }
}

