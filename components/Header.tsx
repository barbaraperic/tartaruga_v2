'use client'

import useAnimatedRouter from '@/hooks/useAnimatedRouter'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  function handleSignout() {}

  const { viewTransitionsStatus } = useAnimatedRouter()

  return (
    <header className={styles.header}>
      <h1 className="h3">Tartaruga </h1>
      <span>{viewTransitionsStatus()}</span>

      {/* {session && (
          <>
            <p>Welcome {session?.user?.name}</p>
          </>
        )} */}
      {/* <ul role="navigation" className={styles['avatar-navigation']}>
        <li className={styles['avatar-dropdown']}>
          <Image
            width={36}
            height={36}
            alt="profile"
            src={''}
            className={styles.avatar}
          />
          <ul className={styles.dropdown}>
            <li onClick={handleSignout}>Sign out</li>
          </ul>
        </li>
      </ul> */}
    </header>
  )
}
