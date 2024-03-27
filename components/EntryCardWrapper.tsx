'use client'
import { getUserFromCookie } from '@/lib/auth'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Suspense, useState } from 'react'
import styles from './EntryCardWrapper.module.css'
import NewEntryCard from '@/components/NewEntryCard'
import EntryCard from '@/components/EntryCard'

export default function EntryCardWrapper({ cards }: { cards: any }) {
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (id) => {
    setSelectedCard(id)
  }

  console.log('selected', selectedCard)

  const filterCards = cards.filter((card) => card.id !== selectedCard)

  const selectedEntryCard = cards.find((card) => card.id === selectedCard)

  return (
    <div className={selectedCard ? styles['full-screen'] : styles['card-grid']}>
      {selectedCard && (
        <div>
          <EntryCard id={selectedEntryCard.id} onClick={handleCardClick}>
            {selectedEntryCard.content}
          </EntryCard>
        </div>
      )}
      <div>
        {filterCards.map((card: any) => (
          <EntryCard key={card.id} id={card.id} onClick={handleCardClick}>
            {card.content}
          </EntryCard>
        ))}
      </div>
    </div>
    // <div id="wrapper">
    //   <div>
    //     {selectedCard !== null && (
    //       <EntryCard id={cards.id} onClick={handleCardClick}>
    //         {cards.content}
    //       </EntryCard>
    //     )}
    //   </div>
    //   <div>
    //     {selectedCard === null && (
    //       <EntryCard id={cards.id} onClick={handleCardClick}>
    //         {cards.content}
    //       </EntryCard>
    //     )}
    //   </div>
    // </div>
  )
}
