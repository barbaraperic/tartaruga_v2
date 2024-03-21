'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FiBook,
  FiClipboard,
  FiActivity,
  FiHome,
  FiLogOut,
} from 'react-icons/fi'
import styles from './NavLinks.module.css'
import { useCallback } from 'react'
import { getUserFromCookie } from '@/lib/auth'
import { signout } from '@/lib/api'
import router from 'next/router'
// import { getCookies } from 'cookies-next'

const NavLinks = ({ user }: { user: any }) => {
  const pathname = usePathname()

  const links = [
    // {
    //   name: 'Get started',
    //   href: '/dashboard/home',
    //   icon: FiHome,
    // },
    {
      name: 'Home',
      href: '/home',
      icon: FiBook,
    },
    // {
    //   name: 'Mind Map',
    //   href: '/dashboard/mindmap',
    //   icon: FiClipboard,
    // },
    // { name: 'Statistics', href: '/statistics', icon: FiActivity },
  ]

  const handleLogout = useCallback(async () => {
    try {
      await signout(user)
      router.replace('/')
    } catch (e) {
      // setError(`Could not ${mode}`)
    } finally {
      router.replace('/')
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link key={link.name} href={link.href} className={styles.link}>
            <LinkIcon className={styles.icon} />
            <p>{link.name}</p>
          </Link>
        )
      })}
      <button className={styles.link} onClick={handleLogout}>
        <FiLogOut className={styles.icon} />
        <p>Logout</p>
      </button>
    </div>
  )
}

export default NavLinks
