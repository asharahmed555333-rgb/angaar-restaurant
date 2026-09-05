import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const phoneNumber = "923190367965";

  const message = encodeURIComponent(
    "Assalam-o-Alaikum, I would like to ask about Angaar Restaurant.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.button}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Angaar Restaurant on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={styles.icon}
      >
        <path
          fill="currentColor"
          d="M16.04 3C8.84 3 3 8.73 3 15.8c0 2.49.73 4.91 2.11 6.98L3.73 27.8l5.19-1.34a13.2 13.2 0 0 0 7.11 2.06h.01C23.24 28.52 29 22.79 29 15.8S23.24 3 16.04 3Zm0 23.36h-.01a11 11 0 0 1-5.61-1.51l-.4-.24-3.08.8.82-2.99-.26-.42a10.47 10.47 0 0 1-1.66-5.66c0-5.74 4.58-10.4 10.21-10.4 5.62 0 10.18 4.66 10.18 10.4 0 5.73-4.56 10.02-10.19 10.02Zm5.59-7.78c-.31-.15-1.81-.88-2.09-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.22-.67.07-1.81-.89-3-1.59-4.2-3.61-.32-.54.32-.5.91-1.67.1-.2.05-.37-.02-.52-.08-.15-.69-1.63-.94-2.23-.25-.6-.5-.51-.69-.52h-.58c-.2 0-.53.07-.81.37-.28.3-1.07 1.03-1.07 2.51s1.1 2.91 1.25 3.11c.15.2 2.16 3.25 5.23 4.56.73.31 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.81-.73 2.07-1.43.25-.71.25-1.32.18-1.44-.08-.13-.28-.2-.58-.35Z"
        />
      </svg>

      <span>WhatsApp</span>
    </a>
  );
}