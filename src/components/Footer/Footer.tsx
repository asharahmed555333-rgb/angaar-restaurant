import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            ANGAAR
          </Link>

          <p>Premium Pakistani BBQ &amp; Traditional Kitchen</p>

          <p className={styles.description}>
            Live fire, authentic recipes and warm Pakistani hospitality,
            brought together around one table.
          </p>
        </div>

        <div>
          <h2 className={styles.heading}>Visit Us</h2>

          <address className={styles.address}>
            123 MM Alam Road
            <br />
            Gulberg, Lahore
            <br />
            Pakistan
          </address>
        </div>

        <div>
          <h2 className={styles.heading}>Contact</h2>

          <ul className={styles.contactList}>
            <li>
              <a href="tel:+924235871234">+92 42 3587 1234</a>
            </li>

            <li>
              <a href="mailto:hello@angaar.pk">hello@angaar.pk</a>
            </li>

            <li>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Opening Hours</h2>

          <dl className={styles.hours}>
            <div>
              <dt>Monday – Thursday</dt>
              <dd>12:00 PM – 12:00 AM</dd>
            </div>

            <div>
              <dt>Friday – Sunday</dt>
              <dd>12:00 PM – 1:00 AM</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className={`container ${styles.footerBottom}`}>
        <p>© {currentYear} Angaar. All rights reserved.</p>

        <nav className={styles.footerNavigation} aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}