'use client'

import { Button } from '../Button'
import styles from './RsvpBanner.module.css'

export function RsvpBanner() {
    return (
        <div className={styles.container}>
            <span>I pity the fool who has not RSVP’d yet</span>
            <Button text="RSVP, fool" href="https://withjoy.com/clare-and-ian/rsvp" target="_blank" />
        </div>
    )
}