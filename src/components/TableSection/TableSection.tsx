import Image from "next/image";
import Link from "next/link";
import styles from "./TableSection.module.css";

export default function TableSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageSide}>
        <Image
          src="/images/restaurant-interior.png"
          alt="Warm and elegant dining room inside Angaar Restaurant"
          fill
          sizes="(max-width: 850px) 100vw, 62vw"
          className={styles.image}
        />
      </div>

      <div className={styles.contentSide}>
        <div className={styles.sectionNumber}>
          <span>02</span>
          <i aria-hidden="true" />
        </div>

        <h2>The Table</h2>

        <p className={styles.eyebrow}>
          More than a meal. A shared experience.
        </p>

        <p className={styles.description}>
          Step into a warm and welcoming atmosphere where live-fire cooking,
          thoughtful service and Pakistani hospitality come together. Every
          table is prepared for moments worth remembering.
        </p>

        <Link
          href="/contact#reservation"
          className={styles.reservationLink}
        >
          Reserve a Table
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}