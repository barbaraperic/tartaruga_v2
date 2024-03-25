// import DeleteEntryButton from '@/components/DeleteEntryButton'
import Editor from '@/components/Editor'
import { FiTrash2 } from 'react-icons/fi'
import styles from './page.module.css'
import { db } from '@/lib/db'
import { getUserFromCookie } from '@/lib/auth'
import { cookies } from 'next/headers'
import DeleteEntryButton from '@/components/DeleteEntryButton'
import EditorHeader from '@/components/EditorHeader'
import EntryCard from '@/components/EntryCard'

export const getEntry = async (id: string) => {
  const user = await getUserFromCookie(cookies())

  const entry = await db.entry.findUnique({
    where: {
      userId: user?.id,
      id,
    },
  })

  const allEntries = await db.entry.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return { entry, allEntries }
}

export default async function EntryPage({ params }) {
  const { entry, allEntries } = await getEntry(params.id)

  const date = new Date(entry?.createdAt).toDateString()

  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.main}>
        <EditorHeader id={params.id} date={date} />
        <Editor data={entry} />
      </div>
      <div className={styles.sidebar}>
        {allEntries?.map((entry) => (
          <EntryCard key={entry.id} data={entry} />
        ))}
      </div>
    </div>
  )
}
