import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the story, cooking philosophy and Pakistani hospitality behind Angaar Restaurant.",
};

const values = [
  {
    number: "01",
    title: "Authentic Recipes",
    description:
      "Our dishes are inspired by time-honoured recipes from kitchens across Pakistan.",
  },
  {
    number: "02",
    title: "Live-Fire Cooking",
    description:
      "We cook over real charcoal to create the smoky flavour that defines Angaar.",
  },
  {
    number: "03",
    title: "Warm Hospitality",
    description:
      "Every guest is welcomed with the generosity and warmth of a Pakistani home.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className="eyebrow">Our story</p>

          <h1>
            Built Around Fire.
            <br />
            Inspired by Home.
          </h1>

          <p>
            Angaar brings together Pakistan&apos;s rich food traditions,
            open-flame cooking and the simple joy of sharing a meal.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyContent}>
            <p className="eyebrow">Where it began</p>

            <h2>A Celebration of Pakistani Food</h2>

            <p>
              Angaar began with a simple idea: to create a restaurant where the
              food feels familiar, the atmosphere feels special and every guest
              feels at home.
            </p>

            <p>
              Our menu honours traditional Pakistani flavours—from smoky seekh
              kababs and tender chicken tikka to slow-cooked nihari, fragrant
              biryani and fresh naan straight from the tandoor.
            </p>

            <p>
              We combine these traditions with thoughtful presentation,
              carefully sourced ingredients and service built around genuine
              hospitality.
            </p>
          </div>

          <div className={styles.storyImage}>
            <Image
              src="/images/restaurant-interior.webp"
              alt="Warm dining room inside Angaar Restaurant"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesHeading}>
            <p className="eyebrow">What guides us</p>
            <h2>Tradition in Every Detail</h2>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article key={value.number} className={styles.valueCard}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.chefSection}>
        <div className={`container ${styles.chefGrid}`}>
          <div className={styles.chefImage}>
            <Image
              src="/images/chef-grill.webp"
              alt="Angaar chef preparing food over a charcoal grill"
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
              className={styles.image}
            />
          </div>

          <div className={styles.chefContent}>
            <p className="eyebrow">Meet our chef</p>

            <h2>Chef Usman Khan</h2>

            <p>
              Chef Usman grew up surrounded by family recipes, festive tables
              and the aroma of food cooking over fire. His cooking respects
              those memories while presenting them with a modern eye.
            </p>

            <blockquote>
              “The best food does more than satisfy hunger—it reminds us where
              we come from.”
            </blockquote>

            <Link href="/menu" className={styles.textLink}>
              Explore the Menu
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaContent}`}>
          <div>
            <p className="eyebrow">Come gather with us</p>
            <h2>Experience Angaar</h2>
          </div>

          <Link
            href="/contact#reservation"
            className="button buttonPrimary"
          >
            Reserve a Table
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}