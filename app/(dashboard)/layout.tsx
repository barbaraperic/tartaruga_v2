import NavLinks from '@/components/NavLinks'
import styles from './layout.module.css'
import Header from '@/components/Header'
import { getUserFromCookie } from '@/lib/auth'
import { cookies } from 'next/headers'

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = getUserFromCookie(cookies())
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside className={styles.sidebar}>
          <NavLinks user={user} />
        </aside>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
