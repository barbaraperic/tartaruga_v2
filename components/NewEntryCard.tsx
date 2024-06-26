'use client'
import { useRouter } from 'next/navigation'
import { FiFileText } from 'react-icons/fi'
import styles from './NewCard.module.css'
import { createNewEntry } from '@/lib/api'

const NewEntryCard = () => {
  const router = useRouter()

  async function handleOnClick() {
    const entry = await createNewEntry()
    router.push(`/entry/${entry.id}`)
  }

  return (
    <div className={styles.card} onClick={handleOnClick}>
      <p>Start typing...</p>
      <FiFileText />
    </div>
  )
}

export default NewEntryCard
