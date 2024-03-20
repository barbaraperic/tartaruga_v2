// import DeleteEntryButton from '@/components/DeleteEntryButton'
import Editor from '@/components/Editor'
import { FiTrash2 } from 'react-icons/fi'
import styles from './page.module.css'
import { db } from '@/lib/db'
import { getUserFromCookie } from '@/lib/auth'
import { cookies } from 'next/headers'
import DeleteEntryButton from '@/components/DeleteEntryButton'

export const getEntry = async (id: string) => {
  const user = await getUserFromCookie(cookies())

  const entry = db.entry.findUnique({
    where: {
      userId: user?.id,
      id,
    },
  })

  return entry
}

export default async function EntryPage({ params }) {
  const entry = await getEntry(params.id)

  const date = new Date(entry?.createdAt).toDateString()

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <p>{date}</p>
        <DeleteEntryButton id={params.id} />
      </div>
      <Editor data={entry} />
    </div>
  )
}
