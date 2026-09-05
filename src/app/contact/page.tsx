import type { Metadata } from "next";
import ReservationForm from "@/components/ReservationForm/ReservationForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact & Table Reservation",
  description:
    "Contact Angaar Restaurant in Lahore, view opening hours and reserve your table through WhatsApp.",
};

const contactDetails = [
  {
    title: "Visit Us",
    content: (
      <address>
        123 MM Alam Road
        <br />
        Gulberg, Lahore
        <br />
        Pakistan
      </address>
    ),
  },
  {
    title: "Call Us",
    content: <a href="tel:+924235871234">+92 42 3587 1234</a>,
  },
  {
    title: "Email Us",
    content: <a href="mailto:hello@angaar.pk">hello@angaar.pk</a>,
  },
  {
    title: "WhatsApp",
    content: (
      <a
        href="https://wa.me/923190367965"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat with Angaar
      </a>
    ),
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Contact &amp; reservations</p>

          <h1>Gather Around Our Table</h1>

          <p>
            Plan your visit, speak with our team or reserve a table for your
            next meal at Angaar.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          {contactDetails.map((detail, index) => (
            <article key={detail.title} className={styles.contactCard}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{detail.title}</h2>
              <div>{detail.content}</div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="reservation"
        className={styles.reservationSection}
      >
        <div className={`container ${styles.reservationLayout}`}>
          <div className={styles.reservationContent}>
            <p className="eyebrow">Reserve your table</p>

            <h2>Your Angaar Experience Starts Here</h2>

            <p>
              Complete the form and your reservation details will open in
              WhatsApp. Our team will confirm availability with you directly.
            </p>

            <div className={styles.hours}>
              <h3>Opening Hours</h3>

              <dl>
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

          <ReservationForm />
        </div>
      </section>

      <section className={styles.locationSection}>
        <div className={`container ${styles.locationLayout}`}>
          <div>
            <p className="eyebrow">Find us in Lahore</p>
            <h2>Visit Angaar</h2>
            <p>
              Located in the heart of Gulberg, with convenient access and
              nearby parking.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=MM+Alam+Road+Gulberg+Lahore"
            target="_blank"
            rel="noopener noreferrer"
            className="button buttonSecondary"
          >
            Open Google Maps
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}