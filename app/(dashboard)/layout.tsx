import Image from 'next/image'
import NavLinks from '@/components/NavLinks'
import styles from './layout.module.css'

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <NavLinks />
      </aside>
      <header className={styles.header}>
        <p>Welcome </p>

        {/* {session && (
          <>
            <p>Welcome {session?.user?.name}</p>
          </>
        )} */}
        <ul role="navigation" className={styles['avatar-navigation']}>
          <li className={styles['avatar-dropdown']}>
            <Image
              width={36}
              height={36}
              alt="profile"
              src={''}
              className={styles.avatar}
            />
            <ul className={styles.dropdown}>
              <li>
                Sign out
                {/* <SignOutButton /> */}
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
