import { HTMLAttributes, ReactNode } from "react"
import styles from './Section.module.css'

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode
}

export function Section({ children, ...props }: Readonly<SectionProps>) {
  const classes = [styles.outer, props.className].join(' ')

  return (
    <section {...props} className={classes}>
      {children}
    </section>
  )
}
