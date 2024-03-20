import { redirect } from 'next/navigation'
import AuthForm from '@/components/AuthForm'
import styles from './page.module.css'

const SignInPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className="text-7xl">tartaruga</h2>
        <p>signin</p>
      </div>
      <div className={styles.wrapper}>
        <AuthForm mode="signin" />
      </div>
    </div>
  )
}

export default SignInPage
