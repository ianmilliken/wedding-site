import { Button } from "../Button";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.outer}>
      <div className={styles.top}>
        <h2>
          <span>Last Call...</span>
          Do you need to
        </h2>
        <Button text="RSVP, fool?" size="large" href="https://withjoy.com/clare-and-ian/rsvp" target="_blank" />
      </div>
    </footer>
  )
}
