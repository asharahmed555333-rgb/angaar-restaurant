    import type { Metadata } from "next";
import Link from "next/link";
import styles from "./menu.module.css";

export const metadata: Metadata = {
  title: "Food Menu",
  description:
    "Explore Angaar's Pakistani BBQ, karahi, biryani, traditional dishes, fresh bread, desserts and drinks with prices.",
};

type MenuItem = {
  name: string;
  description: string;
  price: string;
  spicy?: boolean;
  signature?: boolean;
  vegetarian?: boolean;
};

type MenuCategory = {
  id: string;
  name: string;
  number: string;
  description: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    id: "bbq",
    name: "Charcoal BBQ",
    number: "01",
    description: "Marinated with traditional spices and cooked over live fire.",
    items: [
      {
        name: "Beef Seekh Kabab",
        description: "Minced beef, coriander, green chilli and roasted spices.",
        price: "PKR 1,250",
        spicy: true,
      },
      {
        name: "Chicken Tikka",
        description:
          "Bone-in chicken marinated overnight in yoghurt and spices.",
        price: "PKR 1,180",
        spicy: true,
      },
      {
        name: "Chicken Malai Boti",
        description:
          "Creamy boneless chicken with mild spices and charcoal aroma.",
        price: "PKR 1,320",
      },
      {
        name: "Lamb Chops",
        description:
          "Tender lamb chops flame-grilled with Angaar spice rub.",
        price: "PKR 1,650",
        spicy: true,
      },
      {
        name: "Chapli Kabab",
        description:
          "Peshawari-style beef kabab with crushed spices and herbs.",
        price: "PKR 1,180",
        spicy: true,
      },
      {
        name: "Angaar Mixed Grill",
        description:
          "Seekh kabab, chicken tikka, malai boti and lamb chops.",
        price: "PKR 3,950",
        signature: true,
      },
    ],
  },
  {
    id: "karahi",
    name: "Karahi & Handi",
    number: "02",
    description: "Prepared fresh with tomatoes, ginger and aromatic spices.",
    items: [
      {
        name: "Chicken Karahi",
        description:
          "Traditional tomato-based karahi with fresh ginger.",
        price: "PKR 2,450",
        spicy: true,
      },
      {
        name: "Mutton Karahi",
        description:
          "Tender mutton cooked with tomatoes and cracked black pepper.",
        price: "PKR 3,850",
        spicy: true,
      },
      {
        name: "Chicken White Handi",
        description:
          "Boneless chicken cooked in a creamy white sauce.",
        price: "PKR 2,650",
      },
      {
        name: "Angaar Special Handi",
        description:
          "Smoky chicken handi finished with cream and green chilli.",
        price: "PKR 2,850",
        signature: true,
      },
    ],
  },
  {
    id: "traditional",
    name: "Traditional Favourites",
    number: "03",
    description: "Comforting Pakistani classics prepared with patience.",
    items: [
      {
        name: "Beef Nihari",
        description:
          "Slow-cooked beef stew served with ginger and lemon.",
        price: "PKR 1,280",
        spicy: true,
      },
      {
        name: "Mutton Biryani",
        description:
          "Aromatic basmati rice layered with spiced tender mutton.",
        price: "PKR 1,350",
        signature: true,
      },
      {
        name: "Chicken Biryani",
        description:
          "Traditional biryani with fragrant rice and chicken.",
        price: "PKR 1,050",
        spicy: true,
      },
      {
        name: "Daal Makhni",
        description:
          "Slow-cooked black lentils finished with butter and cream.",
        price: "PKR 850",
        vegetarian: true,
      },
    ],
  },
  {
    id: "bread",
    name: "Bread & Sides",
    number: "04",
    description:
      "Fresh accompaniments for the complete Angaar experience.",
    items: [
      {
        name: "Garlic Naan",
        description:
          "Tandoor-baked naan finished with garlic butter.",
        price: "PKR 250",
        vegetarian: true,
      },
      {
        name: "Roghni Naan",
        description:
          "Soft sesame naan baked fresh in the tandoor.",
        price: "PKR 220",
        vegetarian: true,
      },
      {
        name: "Mint Raita",
        description:
          "Cooling yoghurt with fresh mint and roasted cumin.",
        price: "PKR 280",
        vegetarian: true,
      },
      {
        name: "Kachumber Salad",
        description:
          "Fresh cucumber, tomato, onion, lemon and coriander.",
        price: "PKR 320",
        vegetarian: true,
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts & Drinks",
    number: "05",
    description: "Traditional sweet endings and refreshing drinks.",
    items: [
      {
        name: "Gulab Jamun",
        description:
          "Warm milk dumplings served in aromatic sugar syrup.",
        price: "PKR 450",
        vegetarian: true,
      },
      {
        name: "Matka Kheer",
        description:
          "Creamy rice pudding with cardamom and almonds.",
        price: "PKR 520",
        vegetarian: true,
      },
      {
        name: "Mango Lassi",
        description:
          "Chilled yoghurt drink blended with sweet mango.",
        price: "PKR 480",
        vegetarian: true,
      },
      {
        name: "Kashmiri Chai",
        description:
          "Traditional pink tea with crushed almonds.",
        price: "PKR 390",
        vegetarian: true,
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Fire. Flavour. Tradition.</p>

          <h1>Our Menu</h1>

          <p>
            Authentic Pakistani dishes prepared with time-honoured recipes,
            premium ingredients and the unmistakable flavour of live fire.
          </p>
        </div>
      </section>

      <nav
        className={styles.categoryNavigation}
        aria-label="Menu categories"
      >
        <div className={`container ${styles.categoryLinks}`}>
          {menuCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      <div className={styles.menu}>
        {menuCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className={styles.category}
          >
            <div className={`container ${styles.categoryLayout}`}>
              <div className={styles.categoryHeading}>
                <span>{category.number}</span>

                <h2>{category.name}</h2>

                <p>{category.description}</p>
              </div>

              <div className={styles.items}>
                {category.items.map((item) => (
                  <article key={item.name} className={styles.item}>
                    <div>
                      <div className={styles.itemHeading}>
                        <h3>{item.name}</h3>

                        <div className={styles.badges}>
                          {item.signature && (
                            <span className={styles.signature}>
                              Signature
                            </span>
                          )}

                          {item.spicy && (
                            <span className={styles.spicy}>
                              Spicy
                            </span>
                          )}

                          {item.vegetarian && (
                            <span className={styles.vegetarian}>
                              Vegetarian
                            </span>
                          )}
                        </div>
                      </div>

                      <p>{item.description}</p>
                    </div>

                    <strong>{item.price}</strong>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className={styles.reservation}>
        <div className={`container ${styles.reservationContent}`}>
          <div>
            <p className="eyebrow">
              A table worth gathering around
            </p>

            <h2>Ready to Dine With Us?</h2>
          </div>

          <Link
            href="/contact#reservation"
            className="button buttonPrimary"
          >
            Reserve a Table
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}