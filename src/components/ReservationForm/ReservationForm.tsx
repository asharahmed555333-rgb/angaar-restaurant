"use client";

import { useState, type FormEvent } from "react";
import styles from "./ReservationForm.module.css";

const formspreeEndpoint = "https://formspree.io/f/xjyvodob";

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const date = String(formData.get("date") || "");
    const time = String(formData.get("time") || "");
    const guests = String(formData.get("guests") || "");
    const message = String(formData.get("message") || "");

    setIsSubmitting(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Reservation could not be sent.");
      }

      setIsSuccess(true);
      setStatusMessage(
        "Thank you! Your reservation request has been sent successfully.",
      );

      form.reset();

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

      const restaurantWhatsAppNumber = "923190367965"; // Replace with the restaurant's WhatsApp number

      const whatsappUrl = `https://wa.me/${restaurantWhatsAppNumber}?text=${encodeURIComponent(
        reservationMessage,
      )}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      setIsSuccess(false);
      setStatusMessage(
        "Sorry, your reservation could not be sent. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
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

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending Reservation..." : "Send Reservation Request"}
        <span aria-hidden="true">→</span>
      </button>

      {statusMessage && (
        <p
          className={styles.note}
          role="status"
          aria-live="polite"
          style={{
            color: isSuccess ? "#d4a853" : "#ff7b6b",
          }}
        >
          {statusMessage}
        </p>
      )}

      {!statusMessage && (
        <p className={styles.note}>
          Your request will be sent by email and opened in WhatsApp.
        </p>
      )}
    </form>
  );
}