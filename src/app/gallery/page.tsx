import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: "Food Gallery",
  description:
    "Explore Angaar Restaurant's Pakistani BBQ, traditional dishes, chefs and premium dining atmosphere.",
};

const galleryImages = [
  {
    src: "/images/hero-bbq.webp",
    alt: "Pakistani barbecue cooking over glowing charcoal",
    label: "Live-Fire BBQ",
    className: styles.wide,
  },
  {
    src: "/images/mutton-biryani.webp",
    alt: "Traditional Pakistani mutton biryani in a copper handi",
    label: "Mutton Biryani",
    className: styles.standard,
  },
  {
    src: "/images/restaurant-interior.webp",
    alt: "Warm premium dining room inside Angaar Restaurant",
    label: "The Dining Room",
    className: styles.tall,
  },
  {
    src: "/images/grill-seekh-kabab.webp",
    alt: "Seekh kababs grilling over hot charcoal",
    label: "Seekh Kabab",
    className: styles.standard,
  },
  {
    src: "/images/mutton-karahi.webp",
    alt: "Traditional mutton karahi served with fresh naan",
    label: "Mutton Karahi",
    className: styles.wide,
  },
  {
    src: "/images/chef-grill.webp",
    alt: "Angaar chef preparing Pakistani barbecue",
    label: "Crafted with Care",
    className: styles.tall,
  },
];

export default function GalleryPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Food. Fire. People.</p>

          <h1>Our Gallery</h1>

          <p>
            A glimpse of the flavours, craft and atmosphere that define the
            Angaar experience.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={`container ${styles.galleryGrid}`}>
          {galleryImages.map((image, index) => (
            <article
              key={`${image.src}-${index}`}
              className={`${styles.galleryItem} ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 40vw"
                className={styles.image}
              />

              <div className={styles.overlay}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{image.label}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaContent}`}>
          <div>
            <p className="eyebrow">Taste it for yourself</p>
            <h2>Your Table Awaits</h2>
          </div>

          <div className={styles.ctaActions}>
            <Link href="/menu" className="button buttonSecondary">
              Explore Menu
            </Link>

            <Link
              href="/contact#reservation"
              className="button buttonPrimary"
            >
              Reserve a Table
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}