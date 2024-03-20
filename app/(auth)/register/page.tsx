import { redirect } from 'next/navigation'
import AuthForm from '@/components/AuthForm'
import styles from './page.module.css'

const RegisterPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className="text-7xl">tartaruga</h2>
        <p>register</p>
      </div>
      <div className={styles.wrapper}>
        <AuthForm mode="register" />
      </div>
    </div>
  )
}

export default RegisterPage
