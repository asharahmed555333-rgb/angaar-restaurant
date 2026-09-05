"use client";

import type { FormEvent } from "react";
import styles from "./ReservationForm.module.css";

export default function ReservationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const date = formData.get("date");
    const time = formData.get("time");
    const guests = formData.get("guests");
    const message = formData.get("message");

    const reservationMessage = `
Assalam-o-Alaikum, I would like to reserve a table at Angaar Restaurant.

Name: ${name}
Phone: ${phone}
Email: ${email}
Date: ${date}
Time: ${time}
Guests: ${guests}
Special Request: ${message || "None"}
    `.trim();

    const restaurantWhatsAppNumber = "923001234567";

    const whatsappUrl = `https://wa.me/${restaurantWhatsAppNumber}?text=${encodeURIComponent(
      reservationMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="reservation-name">Full Name</label>
          <input
            id="reservation-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="reservation-phone">Phone Number</label>
          <input
            id="reservation-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+92 300 1234567"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="reservation-email">Email Address</label>
          <input
            id="reservation-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="reservation-guests">Number of Guests</label>
          <select
            id="reservation-guests"
            name="guests"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select guests
            </option>
            <option value="1 Guest">1 Guest</option>
            <option value="2 Guests">2 Guests</option>
            <option value="3 Guests">3 Guests</option>
            <option value="4 Guests">4 Guests</option>
            <option value="5 Guests">5 Guests</option>
            <option value="6 Guests">6 Guests</option>
            <option value="7+ Guests">7+ Guests</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="reservation-date">Reservation Date</label>
          <input
            id="reservation-date"
            name="date"
            type="date"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="reservation-time">Reservation Time</label>
          <select
            id="reservation-time"
            name="time"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select time
            </option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
            <option value="8:00 PM">8:00 PM</option>
            <option value="9:00 PM">9:00 PM</option>
            <option value="10:00 PM">10:00 PM</option>
            <option value="11:00 PM">11:00 PM</option>
          </select>
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label htmlFor="reservation-message">
            Special Request <span>(optional)</span>
          </label>

          <textarea
            id="reservation-message"
            name="message"
            rows={5}
            placeholder="Birthday, preferred seating or dietary requirements"
          />
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        Send Reservation on WhatsApp
        <span aria-hidden="true">→</span>
      </button>

      <p className={styles.note}>
        Your booking will be confirmed by the restaurant through WhatsApp.
      </p>
    </form>
  );
}