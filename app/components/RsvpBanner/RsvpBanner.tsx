'use client'

import { Button } from '../Button'
import styles from './RsvpBanner.module.css'

export function RsvpBanner() {
    return (
        <div className={styles.container}>
            <span>I pity the fool who has not RSVP’d yet</span>
            <Button text="RSVP, fool" href="https://clareandian.rsvpify.com" target="_blank" />
        </div>
    )
}