// import { delay } from "@/lib/async";

import { getUserFromCookie } from '@/lib/auth'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Suspense } from 'react'
import styles from './page.home.module.css'
import NewEntryCard from '@/components/NewEntryCard'
import EntryCard from '@/components/EntryCard'

const getData = async () => {
  const user = await getUserFromCookie(cookies())
  const allEntries = await db.entry.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return allEntries
}

export default async function Page() {
  const allEntries = await getData()

  return (
    <div className={styles['page-wrapper']}>
      <NewEntryCard />
      <div className={styles['cards-wrapper']}>
        {allEntries?.map((entry) => (
          <EntryCard key={entry.id} data={entry} />
        ))}
      </div>
    </div>
  )
}
