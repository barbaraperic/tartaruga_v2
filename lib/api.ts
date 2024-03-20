export const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  console.log('res', res)
  if (!res.ok) {
    // handle your errors
    throw new Error('API error')
  }

  if (json) {
    const data = await res.json()
    console.log('data', data)
    return data.data
  }
}

export const register = (user) => {
  return fetcher({ url: '/api/register', method: 'post', body: user })
}

export const signin = (user) => {
  return fetcher({ url: '/api/signin', method: 'post', body: user })
}

export const createNewProject = async (name: string) => {
  return fetcher({
    url: '/api/entry',
    method: 'POST',
    body: { name },
    json: true,
  })
}
