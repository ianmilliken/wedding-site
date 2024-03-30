"use client"

import Image from 'next/image'
import styles from './Navbar.module.css'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'

export function Navbar() {
    const [show, setShow] = useState(false)

    const transition = useTransition(show, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
      }) 

    const weddingDate = new Date('2024-05-11')
    const today = new Date()
    const daysToGo = Math.floor((weddingDate.getTime() - today.getTime()) / (1000 * 3600 * 24))

    return (
        <>
            <div className={`${styles.outer} ${!show ? styles.outerFade : ''}`}>
                <div className={styles.inner}>
                    <a href="/">
                        <Image className={styles.logo} src="/logo.svg" alt="Clare and Ian" width={100} height={100} />
                    </a>
                    <div className={styles.date}>
                        <Icon icon="mdi:ring" fontSize={20} />
                        <span>Saturday 11th May 2024</span>
                        <span>/ {daysToGo} days to go</span>
                    </div>
                    <button className={styles.menu} onClick={() => setShow(!show)}>
                        <Icon icon={show ? 'ph:x' : 'mdi:menu'} fontSize={24} />
                    </button>
                </div>
            </div>
            {transition((style, item) => item && (
                <animated.div className={styles.drawer} style={style}>
                    <a href="/">Home</a>
                    <a href="/venue">Venue</a>
                    <a href="/dinner">Dinner</a>
                    <div className={styles.info}>
                        <Icon icon="solar:help-bold-duotone" fontSize={56} color="#B5CBD7" />
                        <p>If you have any questions, or would like to know any more details then please contact us and we will be happy to fill in any blanks!</p>
                    </div>
                </animated.div>
            ))}
        </>
    )
}