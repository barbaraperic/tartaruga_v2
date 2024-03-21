'use client'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'
import { useRouter } from 'next/navigation'
import styles from './Editor.module.css'
import Loader from './Loader'
import { updateEntry } from '@/lib/api'

const Editor = ({ data }: { data: any }) => {
  const [value, setValue] = useState(data.content)
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useAutosave({
    data: value,
    onSave: async (_value) => {
      if (value) {
        setLoading(true)
        const updated = await updateEntry(data.id, value, title)
        router.refresh()
        setLoading(false)
      }
    },
  })

  return (
    <div>
      <div className={styles.loader}>{loading && <Loader />}</div>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Editor
