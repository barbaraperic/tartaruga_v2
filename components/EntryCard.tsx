'use client'
import { useRouter } from 'next/navigation'
import styles from './EntryCard.module.css'
import AnimatedLink from './AnimatedLink'

const EntryCard = ({ data }: { data: any }) => {
  const date = new Date(data.createdAt).toDateString()
  const router = useRouter()

  function truncateString(string: string) {
    if (string.length > 40) {
      return string.slice(0, 40) + '...'
    } else {
      return string
    }
  }

  return (
    <AnimatedLink href={`/entry/${data.id}`}>
      <div className={styles.card}>
        <div className={styles['card-content']}>
          <p className={styles.title}>{date}</p>
          <p className={styles.text}>{truncateString(data.content)}</p>
        </div>
      </div>
    </AnimatedLink>
  )
}

export default EntryCard
