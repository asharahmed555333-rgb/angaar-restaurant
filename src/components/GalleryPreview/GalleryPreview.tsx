import Image from "next/image";
import Link from "next/link";
import styles from "./GalleryPreview.module.css";

const galleryImages = [
  {
    src: "/images/grill-seekh-kabab.webp",
    alt: "Seekh kababs cooking over glowing charcoal",
    className: styles.largeImage,
  },
  {
    src: "/images/restaurant-interior.webp",
    alt: "Warm interior of Angaar Restaurant",
    className: styles.topImage,
  },
  {
    src: "/images/chef-grill.webp",
    alt: "Angaar chef preparing Pakistani barbecue",
    className: styles.bottomImage,
  },
];

export default function GalleryPreview() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.heading}`}>
        <div>
          <p className="eyebrow">A glimpse inside Angaar</p>
          <h2>A Taste of Angaar</h2>
        </div>

        <Link href="/gallery" className={styles.galleryLink}>
          View Gallery
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className={`container ${styles.galleryGrid}`}>
        {galleryImages.map((image) => (
          <Link
            key={image.src}
            href="/gallery"
            className={`${styles.imageLink} ${image.className}`}
            aria-label="Open Angaar food gallery"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              className={styles.image}
            />

            <span className={styles.imageOverlay} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}