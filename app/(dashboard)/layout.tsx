import NavLinks from '@/components/NavLinks'
import styles from './layout.module.css'
import Header from '@/components/Header'

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside className={styles.sidebar}>
          <NavLinks />
        </aside>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
