import { serialize } from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function signout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Clear the authentication token by setting its expiration time to a past date
    res.setHeader(
      'Set-Cookie',
      serialize(process.env.COOKIE_NAME, '', {
        httpOnly: true,
        path: '/',
        expires: new Date(0), // Set the expiration time to a past date
      })
    )

    res.status(200).json({ message: 'Successfully signed out' })
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
