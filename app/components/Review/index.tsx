'use client'

import React from 'react'
import styles from './Review.module.css'
import { Icon } from '@iconify/react'
import { nanoid } from 'nanoid'

interface ReviewProps {
  quote: string
  author: string
  rating: number
}

export function Review({ quote, author, rating }: Readonly<ReviewProps>) {
  return (
    <div className={styles.outer}>
      <blockquote>&ldquo;{quote}&rdquo;</blockquote>
      <cite>– {author}</cite>
      <div className={styles.rating}>
        {[...Array(rating)].map(() => (
          <Icon key={nanoid()} icon="mdi:star" fontSize={20} />
        ))}
      </div>
    </div>
  )
}