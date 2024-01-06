import { nanoid } from "nanoid";
import { HTMLAttributes } from "react";
import styles from "./Schedule.module.css";

interface SceduleEventProps {
  title: string
  time: string
}

interface ScheduleProps extends HTMLAttributes<HTMLDivElement>{
  events: SceduleEventProps[]
}

export function Schedule({ events, ...props }: Readonly<ScheduleProps>) {
  const classes = [styles.outer, props.className].join(' ')

  return (
    <div {...props} className={classes}>
      {events.map((event) => (
        <div key={nanoid()} className={styles.card}>
          <div>{event.time}</div>
          <div className={styles.title}>{event.title}</div>
        </div>
      ))}
    </div>
  )

}