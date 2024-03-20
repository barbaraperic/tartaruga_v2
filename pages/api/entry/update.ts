import { validateJWT } from '@/lib/auth'
import { db } from '@/lib/db'

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME])

  const data = await db.entry.update({
    where: {
      id: req.body.id,
      userId: user.id,
    },
    data: {
      content: req.body.content,
      title: req.body.title,
    },
  })

  res.json({ data })
}
