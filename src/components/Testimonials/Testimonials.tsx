import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Ahmed R.",
    review:
      "The best Pakistani BBQ in Lahore. The seekh kabab was smoky, tender and full of flavour.",
  },
  {
    name: "Sara K.",
    review:
      "A beautiful combination of traditional taste, modern dining and genuinely warm service.",
  },
  {
    name: "Usman M.",
    review:
      "From the chicken tikka to the nihari, everything was exceptional. We will definitely return.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">Good food creates great memories.</p>
            <h2>What Our Guests Say</h2>
          </div>

          <p className={styles.headingText}>
            Real experiences shared by people who gathered around our table.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className={styles.card}>
              <div
                className={styles.stars}
                aria-label="Five out of five stars"
              >
                <span aria-hidden="true">★★★★★</span>
              </div>

              <p>“{testimonial.review}”</p>

              <footer>
                <span className={styles.avatar} aria-hidden="true">
                  {testimonial.name.charAt(0)}
                </span>

                <div>
                  <strong>{testimonial.name}</strong>
                  <small>Verified Guest</small>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}