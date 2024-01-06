import { ReactNode } from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    priority?: 'primary' | 'secondary';
    text: ReactNode
    size?: 'medium' | 'large'
    onClick?: () => void
    href?: string
    target?: string
}

export function Button({ priority = "primary", size="medium", text, href, target, onClick}: Readonly<ButtonProps>) {
    const style = `${styles.button} ${styles[priority]} ${styles[size]}`

    if (href) {
        return (
            <a className={style} href={href} target={target ?? '_self'}>{text}</a>
        )
    }

    return (
        <button className={style} type="button" onClick={onClick}>{text}</button>
    )
}