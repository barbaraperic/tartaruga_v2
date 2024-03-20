'use client'
import { useRouter } from 'next/navigation'
import { FiFileText } from 'react-icons/fi'
import styles from './NewCard.module.css'

const NewEntryCard = () => {
  const router = useRouter()

  async function handleOnClick() {
    // const entry = await newEntry()
    // router.push(`/dashboard/home/${entry.data.id}`)
  }

  return (
    <div className={styles.card} onClick={handleOnClick}>
      <p>New entry</p>
      <FiFileText />
    </div>
  )
}

export default NewEntryCard
