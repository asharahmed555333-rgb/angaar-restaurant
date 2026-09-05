"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <Link
          href="/"
          className={styles.logo}
          onClick={closeMenu}
          aria-label="Angaar homepage"
        >
          <span>ANGAAR</span>
          <small>Premium Pakistani BBQ</small>
        </Link>

        <nav
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact#reservation"
            className="button buttonPrimary"
            onClick={closeMenu}
          >
            Reserve a Table
          </Link>
        </nav>

        <button
          type="button"
          className={`${styles.menuButton} ${
            isMenuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}