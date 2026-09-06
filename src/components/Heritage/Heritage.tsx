import Image from "next/image";
import Link from "next/link";
import styles from "./Heritage.module.css";

export default function Heritage() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <p className="eyebrow">Same flames. New stories.</p>

          <h2>Our Heritage</h2>

          <p className={styles.description}>
            Angaar was born from a simple belief: great food brings people
            together. We honour Pakistan&apos;s rich culinary traditions with
            authentic recipes, open-flame cooking and hospitality that feels
            like home.
          </p>

          <Link href="/about" className={styles.storyLink}>
            Discover Our Story
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/chef-grill.webp"
            alt="Chef preparing charcoal-grilled Pakistani barbecue at Angaar"
            width={1536}
            height={1024}
            sizes="(max-width: 850px) 100vw, 42vw"
            className={styles.image}
          />
        </div>

        <blockquote className={styles.quote}>
          <span aria-hidden="true">“</span>

          <p>
            Food is our connection to home, our way of keeping traditions
            alive.
          </p>

          <footer>
            <strong>Chef Usman Khan</strong>
            <small>Founder, Angaar</small>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}