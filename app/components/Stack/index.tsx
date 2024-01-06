import { Children, HTMLAttributes, ReactNode } from "react"
import styles from "./Stack.module.css"
import { nanoid } from "nanoid"

interface StackProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function Stack({ children, ...props }: Readonly<StackProps>) {
  const classes = [styles.list, props.className].join(' ')
  const cols = Children.toArray(children).length

  return (
    <ul {...props} className={classes} data-cols={cols}>
      {Children.map(children, (child) => (
        <li key={nanoid()} className={styles.item}>{child}</li>
      ))}
    </ul>
  )
}
