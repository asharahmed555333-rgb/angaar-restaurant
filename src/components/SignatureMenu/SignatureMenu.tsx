import Link from "next/link";
import styles from "./SignatureMenu.module.css";

const menuItems = [
  {
    name: "Seekh Kabab",
    description:
      "Minced beef, traditional spices and fresh coriander, grilled over charcoal.",
    price: "PKR 1,250",
  },
  {
    name: "Lamb Chops",
    description:
      "Marinated lamb chops, flame-grilled for a tender and smoky finish.",
    price: "PKR 1,650",
  },
  {
    name: "Chicken Tikka",
    description:
      "Tender chicken marinated overnight and cooked over live charcoal.",
    price: "PKR 1,180",
  },
  {
    name: "Beef Nihari",
    description:
      "A slow-cooked traditional delicacy rich in flavour and heritage.",
    price: "PKR 1,280",
  },
  {
    name: "Mutton Biryani",
    description:
      "Aromatic basmati rice layered with tender mutton and traditional spices.",
    price: "PKR 1,350",
  },
  {
    name: "Chapli Kabab",
    description:
      "Peshawari-style kabab prepared with crushed spices and fresh herbs.",
    price: "PKR 1,180",
  },
];

export default function SignatureMenu() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.introduction}>
          <p className="eyebrow">Iconic dishes. Unforgettable taste.</p>

          <h2>Signature Menu</h2>

          <p>
            A selection of our most-loved dishes, prepared with authentic
            recipes and the bold flavours of Pakistan.
          </p>

          <Link href="/menu" className={styles.menuLink}>
            View Full Menu
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.menuGrid}>
          {menuItems.map((item) => (
            <article key={item.name} className={styles.menuItem}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}