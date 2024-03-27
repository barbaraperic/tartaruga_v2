'use client'

import { useLayoutEffect, useRef, useReducer } from 'react'
import styles from './EntryCard.module.css'
import { animate } from 'popmotion'
import Link from 'next/link'

export default function EntryCard({
  children,
  id,
  onClick,
}: {
  children: React.ReactNode
  id: any
  onClick: any
}) {
  return (
    <Link
      href={{
        query: { id },
      }}
    >
      <div onClick={() => onClick(id)} className={styles.card}>
        <div>{children}</div>
      </div>
    </Link>
  )
}
