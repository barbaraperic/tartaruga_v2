import { redirect } from 'next/navigation'
import AuthForm from '@/components/AuthForm'
import styles from './page.module.css'

const SignInPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>tartaruga</h2>
        <div className={styles['wrapper-left']}>
          <h1>
            Start writing <br />
            beautiful notes
          </h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <AuthForm mode="signin" />
      </div>
    </div>
  )
}

export default SignInPage
