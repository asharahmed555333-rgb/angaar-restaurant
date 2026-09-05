import Link from "next/link";
import styles from "./ReservationCTA.module.css";

export default function ReservationCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Good food brings people together</p>

          <h2>Your Table Awaits</h2>

          <p>
            Reserve your table and become part of the Angaar experience.
          </p>
        </div>

        <div className={styles.options}>
          <div className={styles.option}>
            <span>Date</span>
            <strong>Select Date</strong>
          </div>

          <div className={styles.option}>
            <span>Time</span>
            <strong>Select Time</strong>
          </div>

          <div className={styles.option}>
            <span>Guests</span>
            <strong>2 Guests</strong>
          </div>

          <Link
            href="/contact#reservation"
            className={`button ${styles.button}`}
          >
            Reserve a Table
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}