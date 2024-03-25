import { FiArrowLeft } from 'react-icons/fi'
import AnimatedLink from './AnimatedLink'
import DeleteEntryButton from './DeleteEntryButton'
import styles from './EditorHeader.module.css'

export default function EditorHeader({ id, date }) {
  return (
    <div className={styles['editor-header']}>
      <AnimatedLink href="/home">
        <FiArrowLeft className={styles.icon} />
      </AnimatedLink>
      <div>
        <p>{date}</p>
        <DeleteEntryButton id={id} />
      </div>
    </div>
  )
}
