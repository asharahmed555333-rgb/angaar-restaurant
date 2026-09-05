export default function RestaurantSchema() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Angaar",
    description:
      "A premium Pakistani BBQ and traditional food restaurant in Lahore.",
    url: "https://angaar-restaurant.vercel.app",
    telephone: "+92-42-3587-1234",
    email: "hello@angaar.pk",
    priceRange: "PKR 1,000–4,000",
    servesCuisine: [
      "Pakistani",
      "Barbecue",
      "Traditional Pakistani",
      "Karahi",
      "Biryani",
    ],
    image: [
      "https://angaar-restaurant.vercel.app/images/hero-bbq.png",
      "https://angaar-restaurant.vercel.app/images/mutton-biryani.png",
      "https://angaar-restaurant.vercel.app/images/mutton-karahi.png",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 MM Alam Road",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54660",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.5204,
      longitude: 74.3587,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "12:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "12:00",
        closes: "01:00",
      },
    ],
    acceptsReservations: true,
    menu: "https://angaar-restaurant.vercel.app/menu",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(restaurantSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}