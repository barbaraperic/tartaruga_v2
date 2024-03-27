import { validateJWT } from '@/lib/auth'
import { db } from '@/lib/db'

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME])

  const data = await db.entry.create({
    data: {
      title: 'Title',
      content: 'Start typing...',
      userId: user.id,
    },
  })

  res.json({ data })
}
