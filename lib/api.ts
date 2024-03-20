export const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    // handle your errors
    throw new Error('API error')
  }

  if (json) {
    const data = await res.json()
    return data.data
  }
}

export const register = (user) => {
  return fetcher({ url: '/api/register', method: 'POST', body: user })
}

export const signin = (user) => {
  return fetcher({ url: '/api/signin', method: 'POST', body: user })
}

export const createNewEntry = async () => {
  return fetcher({
    url: '/api/entry',
    method: 'POST',
    body: {},
    json: true,
  })
}
