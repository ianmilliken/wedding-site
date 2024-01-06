import { HTMLAttributes } from 'react'
import styles from './Divider.module.css'

interface DividerProps extends HTMLAttributes<HTMLElement> {
  title?: string
}

export function Divider({ title, ...props }: Readonly<DividerProps>) {
  const classes = [styles.outer, props.className].join(' ')
  return (
    <div {...props} className={classes}>
      <span className={styles.hr} />
      {title && <h2 className={styles.title}>{title}</h2>}
      <span className={styles.hr} />
    </div>
  )
}
