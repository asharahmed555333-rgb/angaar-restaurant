import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import SignatureMenu from "@/components/SignatureMenu/SignatureMenu";
import TableSection from "@/components/TableSection/TableSection";
import Heritage from "@/components/Heritage/Heritage";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";
import Testimonials from "@/components/Testimonials/Testimonials";
import ReservationCTA from "@/components/ReservationCTA/ReservationCTA";


export const metadata: Metadata = {
  title: "Premium Pakistani BBQ Restaurant",
  description:
    "Discover charcoal-grilled Pakistani BBQ, traditional recipes and warm hospitality at Angaar Restaurant in Lahore.",
};

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <Image
          src="/images/hero-bbq.png"
          alt="Seekh kabab and chicken tikka cooking over glowing charcoal"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.heroShade} />

        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>
            Premium Pakistani BBQ &amp; Traditional Kitchen
          </p>

          <h1>
            Born of Fire.
            <br />
            Rooted in Tradition.
          </h1>

          <p className={styles.description}>
            Authentic Pakistani recipes cooked over open flames and served with
            the warmth of true Pakistani hospitality.
          </p>

          <div className={styles.actions}>
            <Link
              href="/contact#reservation"
              className="button buttonPrimary"
            >
              Reserve a Table
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/menu" className="button buttonSecondary">
              View Menu
            </Link>
          </div>
        </div>

        <div className={`container ${styles.bookingBar}`}>
          <div className={styles.bookingIntro}>
            <span className={styles.bookingIcon} aria-hidden="true">
              ◇
            </span>

            <div>
              <strong>Secure Your Table Tonight</strong>
              <small>Good food brings people together.</small>
            </div>
          </div>

          <div className={styles.bookingDetails}>
            <div>
              <span>Date</span>
              <strong>Select Date</strong>
            </div>

            <div>
              <span>Time</span>
              <strong>Select Time</strong>
            </div>

            <div>
              <span>Guests</span>
              <strong>2 Guests</strong>
            </div>
          </div>

          <Link
            href="/contact#reservation"
            className="button buttonPrimary"
          >
            Check Availability
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className={styles.grillSection}>
        <div className={`container ${styles.grillGrid}`}>
          <div className={styles.grillContent}>
            <div className={styles.sectionNumber}>
              <span>01</span>
              <i aria-hidden="true" />
            </div>

            <h2>The Grill</h2>

            <p className={styles.grillEyebrow}>
              Live fire. Timeless flavours.
            </p>

            <p className={styles.grillDescription}>
              At Angaar, the grill is more than a cooking method—it is a
              tradition. Every seekh kabab and tikka is prepared with authentic
              spices, then cooked slowly over glowing charcoal for a deep smoky
              flavour.
            </p>

            <Link href="/menu" className={styles.textLink}>
              Explore the Menu
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.grillImageWrapper}>
            <Image
              src="/images/grill-seekh-kabab.png"
              alt="Beef seekh kababs grilling over glowing charcoal"
              width={1600}
              height={900}
              sizes="(max-width: 850px) 100vw, 65vw"
              className={styles.grillImage}
            />

            <p className={styles.imageCaption}>
              Tradition lives in every flame
            </p>
          </div>
        </div>
      </section>
      <SignatureMenu />
      <TableSection />
      <Heritage />
      <GalleryPreview />
      <Testimonials />
      <ReservationCTA />
    </main>
  );
}