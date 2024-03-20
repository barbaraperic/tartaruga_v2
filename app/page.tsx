import Link from 'next/link'
import styles from './page.module.css'
import TartarugaIconComponent from '@/components/illustrations/TartarugaIcon'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles['wrapper-left']}>
        <h1>
          Your daily <br />
          note taker
        </h1>
        <Link href="/home" className={`${styles.link} h5`}>
          Get started
        </Link>
      </div>
      <div className={styles['wrapper-right']}>
        <TartarugaIconComponent />
      </div>
    </div>
  )
}
