import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Work from "@/components/work";
import About from "@/components/about";
import Process from "@/components/process";
import Services from "@/components/services";
import Contact from "@/components/contact";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Stolarsky',
  description: 'Premium stolarija — nameštaj po meri, restauracija i arhitektonska stolarija izrađeni sa preciznošću i strašću od 2004. godine.',
  url: 'https://stolarsky.com',
  telephone: '+15551234567',
  email: 'hello@stolarsky.com',
  image: 'https://stolarsky.com/og-image.jpg',
  foundingDate: '2004',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Craftsman Avenue',
    addressLocality: 'Brooklyn',
    addressRegion: 'NY',
    postalCode: '11201',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: ['https://www.instagram.com/stolarsky.art'],
  priceRange: '€€€',
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Process />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
