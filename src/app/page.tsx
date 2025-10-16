import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const phoneNumberDisplay = "06 30 17 45 63";
const phoneNumberE164 = "+33630174563";
const phoneNumberHref = "tel:+33630174563";

const highlights = [
  {
    title: "Centralisation VTC Premium",
    description:
      "Une centrale unique qui coordonne nos chauffeurs privés à Nice, Cannes, Menton et Monaco.",
  },
  {
    title: "Disponibilité 24h/24",
    description:
      "Prise en charge immédiate jour et nuit pour les arrivées, départs, congrès et soirées événementielles.",
  },
  {
    title: "Tarifs fixes et transparents",
    description:
      "Chaque trajet est confirmé à l'avance, sans surprise ni majoration selon l'affluence ou la météo.",
  },
  {
    title: "Véhicules haut de gamme",
    description:
      "Mercedes Classe E et V, Tesla, berlines business – confort premium adapté aux particuliers et entreprises.",
  },
];

const cities = [
  {
    id: "cannes",
    image: "/taxiinlines.jpeg",
    imageAlt: "Vue nocturne de Cannes avec véhicules premium en service VTC.",
    vtcTitle: "VTC Cannes",
    vtcText:
      "Besoin d’un chauffeur privé à Cannes ? Nos VTC vous accompagnent avec élégance sur la célèbre Croisette, entre les palais de luxe, le Palais des Festivals et les plages mythiques de la ville. Que vous arriviez à la gare de Cannes, à votre hôtel ou à votre résidence, profitez d’un transfert confortable vers Nice, Antibes, ou Mougins. Nos chauffeurs professionnels, disponibles 24h/24, vous assurent des trajets ponctuels et haut de gamme, que ce soit pour vos soirées sur le port, vos déplacements professionnels ou vos événements sur la Côte d’Azur.",
    taxiTitle: "Taxi Cannes",
    taxiText:
      "Besoin d’un taxi à Cannes ? Nos chauffeurs vous accompagnent avec élégance sur la célèbre Croisette, entre les palais de luxe, le Palais des Festivals et les plages privées les plus réputées de la Côte d’Azur. Que vous arriviez à la gare SNCF de Cannes, à votre hôtel ou à votre villa, nous assurons des trajets rapides et confortables vers l’aéroport de Nice, Antibes, ou Mougins. Profitez d’un service de taxi fiable, disponible 24h/24, pour vos soirées sur le port, vos rendez-vous professionnels ou vos transferts vers les événements internationaux du cinéma.",
  },
  {
    id: "nice",
    image: "/herobigtaxi.jpeg",
    imageAlt: "Promenade des Anglais à Nice au coucher du soleil.",
    vtcTitle: "VTC Nice",
    vtcText:
      "À la recherche d’un chauffeur à Nice ? Découvrez la ville en toute sérénité à bord de nos véhicules haut de gamme. Parcourez la Promenade des Anglais, le Vieux-Nice, le Cours Saleya, ou les hauteurs du Mont Boron avec un chauffeur expérimenté. Nous assurons également vos transferts depuis ou vers l’aéroport de Nice Côte d’Azur, les hôtels du centre, Monaco, Cannes, ou Menton. Nos VTC à Nice allient confort, discrétion et efficacité, avec des tarifs fixes sans surprise pour vos trajets professionnels ou touristiques.",
    taxiTitle: "Taxi Nice",
    taxiText:
      "À la recherche d’un taxi à Nice ? Profitez d’un service de transport local pour découvrir la Promenade des Anglais, la vieille ville, le Cours Saleya et les panoramas du Mont Boron. Nos chauffeurs vous conduisent également vers l’aéroport de Nice Côte d’Azur, les quartiers de Cimiez, Fabron ou Magnan, ou encore vers Cannes, Monaco et Menton. Que ce soit pour un transfert hôtel, une visite touristique ou un déplacement professionnel, nos taxis à Nice garantissent confort, ponctualité et tarif fixe sans surprise.",
  },
  {
    id: "menton",
    image: "/herotaxi.jpeg",
    imageAlt: "Vue sur Menton et ses façades colorées en bord de mer.",
    vtcTitle: "VTC Menton",
    vtcText:
      "Profitez d’un service de VTC à Menton pour découvrir la “Perle de la France” en toute tranquillité. Nos chauffeurs privés vous conduisent vers les jardins Biovès, le musée Jean Cocteau, les plages du Fossan, ou les petites ruelles du vieux Menton. Que vous ayez besoin d’un transfert vers Monaco, Roquebrune-Cap-Martin, Nice, ou même l’Italie, nos VTC s’adaptent à vos besoins avec ponctualité et élégance. C’est le moyen idéal pour voyager confortablement sur la Côte d’Azur, que ce soit pour affaires ou pour le plaisir.",
    taxiTitle: "Taxi Menton",
    taxiText:
      "Envie de découvrir Menton, la “Perle de la France” ? Réservez votre taxi pour explorer les jardins Biovès, le musée Jean Cocteau, les plages du Fossan ou les ruelles colorées du vieux Menton. Nos chauffeurs locaux assurent vos transferts vers Monaco, Roquebrune-Cap-Martin, ou l’aéroport de Nice. Profitez d’un service sur mesure, idéal pour vos séjours touristiques, déplacements professionnels ou liaisons transfrontalières avec l’Italie toute proche. Avec nos taxis à Menton, confort et sérénité sont toujours au rendez-vous.",
  },
  {
    id: "monaco",
    image: "/niceairpot.jpeg",
    imageAlt: "Vue aérienne du port de Monaco avec yachts de luxe.",
    vtcTitle: "VTC Monaco",
    vtcText:
      "Nos chauffeurs privés à Monaco vous offrent une expérience de transport d’exception au cœur de la Principauté. Déplacez-vous facilement entre le Casino de Monte-Carlo, le Port Hercule, le Palais Princier et les hôtels de prestige comme le Fairmont ou l’Hôtel de Paris. Nos VTC assurent également vos transferts vers l’aéroport de Nice, Cannes, Eze ou Menton. Service haut de gamme, discrétion et confort absolu : avec nos VTC à Monaco, voyagez avec style et sérénité sur l’ensemble de la Côte d’Azur.",
    taxiTitle: "Taxi Monaco",
    taxiText:
      "Réservez un taxi à Monaco pour circuler facilement dans la Principauté et ses environs. Nos chauffeurs professionnels vous transportent vers le Casino de Monte-Carlo, le Port Hercule, le Palais Princier, ou les hôtels prestigieux comme le Fairmont ou l’Hôtel de Paris. Nous assurons également vos transferts vers l’aéroport de Nice, Cannes, Eze ou Menton. En choisissant notre service de taxi à Monaco, vous bénéficiez d’une expérience haut de gamme, d’une conduite fluide et d’une parfaite connaissance du trafic local pour arriver toujours à l’heure, en toute élégance.",
  },
];

const transferRoutes = [
  "Aéroport Nice Côte d’Azur ➜ Monaco / Menton / Cannes / Saint-Tropez",
  "Monaco ➜ Nice / Cannes / Aéroport / Italie (Sanremo, Ventimiglia)",
  "Menton ➜ Nice / Cannes / Aéroport / Marseille / Milan",
  "Cannes ➜ Monaco / Nice / Saint-Tropez / Gênes",
];

const galleryImages = [
  {
    src: "/herobigtaxi.jpeg",
    alt: "VTC de luxe sur la Promenade des Anglais à Nice.",
  },
  {
    src: "/taxiinlines.jpeg",
    alt: "File de véhicules disponibles devant un palace cannois.",
  },
  {
    src: "/niceairpot.jpeg",
    alt: "Transfert VTC à l'aéroport de Nice Côte d'Azur.",
  },
];

export default function Home() {
  return (
    <>
      <Script
        id="structured-data-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "CENTRALE VTC 06",
            image: "https://www.centrale-vtc-06.fr/herobigtaxi.jpeg",
            "@id": "https://www.centrale-vtc-06.fr",
            url: "https://www.centrale-vtc-06.fr",
            telephone: phoneNumberE164,
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Provence-Alpes-Côte d'Azur",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 43.7102,
              longitude: 7.2620,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [],
          }),
        }}
      />
      <Script
        id="structured-data-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Chauffeur Privé VTC",
            provider: {
              "@type": "LocalBusiness",
              name: "CENTRALE VTC 06",
              telephone: phoneNumberE164,
            },
            areaServed: [
              {
                "@type": "City",
                name: "Nice",
              },
              {
                "@type": "City",
                name: "Monaco",
              },
              {
                "@type": "City",
                name: "Cannes",
              },
              {
                "@type": "City",
                name: "Menton",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services VTC",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Transfert Aéroport Nice",
                    description:
                      "Service de transfert depuis et vers l'aéroport de Nice Côte d'Azur",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "VTC Nice Monaco Cannes",
                    description:
                      "Transport privé entre Nice, Monaco, Cannes et Menton",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Chauffeur Privé 24h/24",
                    description:
                      "Service de chauffeur privé disponible jour et nuit",
                  },
                },
              ],
            },
          }),
        }}
      />
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quel est le numéro pour réserver un VTC sur la Côte d'Azur ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vous pouvez réserver votre chauffeur privé VTC en appelant le 06 30 17 45 63 (format international : +33630174563). Notre centrale est disponible 24h/24 et 7j/7.",
                },
              },
              {
                "@type": "Question",
                name: "Quelles villes desservez-vous ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CENTRALE VTC 06 dessert Nice, Monaco, Cannes, Menton, Antibes, Èze, Cap-d'Ail, Roquebrune-Cap-Martin et toute la Côte d'Azur. Nous assurons également les transferts vers l'aéroport de Nice et les trajets longue distance.",
                },
              },
              {
                "@type": "Question",
                name: "Quel est le délai d'arrivée d'un chauffeur ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nos chauffeurs arrivent en 10 à 15 minutes après votre réservation pour les demandes immédiates. Pour les réservations à l'avance, nous garantissons la ponctualité à l'heure convenue.",
                },
              },
              {
                "@type": "Question",
                name: "Les tarifs sont-ils fixes ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, tous nos tarifs sont fixes et confirmés à l'avance. Aucune majoration selon l'affluence ou la météo. Vous connaissez le prix exact avant chaque trajet.",
                },
              },
              {
                "@type": "Question",
                name: "Quels moyens de paiement acceptez-vous ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nous acceptons les paiements par carte bancaire, espèces, lien sécurisé et American Express. Des factures détaillées sont disponibles pour les entreprises et agences.",
                },
              },
            ],
          }),
        }}
      />

      <div className="flex min-h-screen flex-col bg-white text-black">
        {/* Sticky Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
            <h2 className={`${montserrat.className} text-xl font-bold text-slate-900 md:text-2xl`}>
              CENTRALE VTC 06
            </h2>
            <a
              href={phoneNumberHref}
              className="flex items-center gap-2 rounded-full bg-indigo-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600 md:px-6 md:py-2.5 md:text-base"
              data-phone={phoneNumberE164}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {phoneNumberDisplay}
            </a>
          </div>
        </nav>

        {/* Spacer for fixed header */}
        <div className="h-16"></div>

        <header className="relative isolate overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="/herobigtaxi.jpeg"
              alt="Chauffeur VTC accueillant des clients sur la Côte d'Azur."
              fill
              priority
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-900/70" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/90 to-blue-900/70" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 text-center md:px-6 md:py-28 lg:py-32">
            <div className="mx-auto max-w-4xl">
              <p
                className={`${inter.className} mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-widest`}
              >
                Centrale VTC 06 – Transport Premium sur la Côte d&apos;Azur
              </p>
              <h1
                className={`${montserrat.className} text-4xl font-bold sm:text-5xl lg:text-6xl`}
              >
                Chauffeurs privés VTC à votre service en temps réel à
                <span className="text-amber-400"> Nice, Cannes, Monaco et Menton</span>
              </h1>
              <p
                className={`${inter.className} mt-6 text-lg leading-relaxed text-white/90 md:text-xl`}
              >
                Une centrale unique pour vos réservations immédiates, transferts
                aéroport, événements haut de gamme et trajets longue distance.
                Nos équipes répondent en moins de cinq minutes et confirment
                chaque mission avec un tarif fixe.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={phoneNumberHref}
                className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-amber-300"
                data-phone={phoneNumberE164}
              >
                Réserver maintenant · {phoneNumberDisplay}
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Découvrir nos services
              </a>
            </div>
          </div>
        </header>

        <section
          id="services"
          className="bg-white px-4 py-16 md:px-6 md:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p
                className={`${inter.className} text-sm font-semibold uppercase tracking-widest text-indigo-600`}
              >
                Centrale VTC 06
              </p>
              <h2
                className={`${montserrat.className} mt-3 text-3xl font-bold text-slate-900 md:text-4xl`}
              >
                Une organisation premium pour vos trajets professionnels et
                touristiques
              </h2>
              <p className={`${inter.className} mt-4 text-lg text-slate-600`}>
                Notre centrale pilote en continu un réseau de chauffeurs privés
                VTC pour garantir ponctualité, sécurité et présence sur toute la Côte d&apos;Azur.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3
                    className={`${montserrat.className} text-xl font-semibold text-slate-900`}
                  >
                    {item.title}
                  </h3>
                  <p className={`${inter.className} text-slate-600`}>
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="territoire"
          className="bg-slate-50 px-4 py-16 md:px-6 md:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center">
              <p
                className={`${inter.className} text-sm font-semibold uppercase tracking-widest text-indigo-600`}
              >
                Côte d&apos;Azur & Riviera
              </p>
              <h2
                className={`${montserrat.className} mt-3 text-3xl font-bold text-slate-900 md:text-4xl`}
              >
                Service VTC premium dans les plus belles villes de la Côte d&apos;Azur
              </h2>
              <p className={`${inter.className} mt-4 text-lg text-slate-600`}>
                Des chauffeurs professionnels à votre disposition pour tous vos déplacements d&apos;affaires ou de loisirs, dans un confort absolu.
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-2">
              {cities.map((city) => (
                <article
                  key={city.id}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={city.image}
                      alt={city.imageAlt}
                      fill
                      loading="lazy"
                      quality={85}
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                    {/* Hidden taxi text for SEO - positioned behind image */}
                    <div className="absolute inset-0 -z-10 opacity-0 pointer-events-none" aria-hidden="true">
                      <h4
                        className={`${montserrat.className} text-xl font-semibold text-slate-900`}
                      >
                        {city.taxiTitle}
                      </h4>
                      <p
                        className={`${inter.className} mt-3 text-base leading-relaxed text-slate-700`}
                      >
                        {city.taxiText}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-8 px-6 py-8 md:px-8">
                    <div className="space-y-4">
                      <h3
                        className={`${montserrat.className} text-2xl font-semibold text-slate-900`}
                      >
                        {city.vtcTitle}
                      </h3>
                      <p className={`${inter.className} text-lg text-slate-700`}>
                        {city.vtcText}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-6 md:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div>
              <p
                className={`${inter.className} text-sm font-semibold uppercase tracking-widest text-indigo-600`}
              >
                Transferts longue distance
              </p>
              <h2
                className={`${montserrat.className} mt-3 text-3xl font-bold text-slate-900 md:text-4xl`}
              >
                Aéroport de Nice, Croisette, Port Hercule : une équipe qui suit
                vos trajets de bout en bout
              </h2>
              <p className={`${inter.className} mt-4 text-lg text-slate-600`}>
                Notre centrale surveille chaque vol et chaque train. Les
                chauffeurs reçoivent vos instructions en direct et ajustent les
                horaires selon vos aléas de déplacement.
              </p>
              <ul
                className={`${inter.className} mt-6 space-y-3 text-lg text-slate-700`}
              >
                {transferRoutes.map((route) => (
                  <li key={route} className="flex items-start gap-3">
                    <span className="mt-1 text-indigo-600">➜</span>
                    <span>{route}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 rounded-3xl bg-slate-900/90 p-8 text-white shadow-xl">
              <h3
                className={`${montserrat.className} text-2xl font-semibold text-amber-300`}
              >
                Réservation immédiate
              </h3>
              <p className={`${inter.className} text-base leading-relaxed`}>
                Une équipe bilingue répond 7j/7 pour vos demandes :
                transferts aéroport, roadshows, mariages, séminaires ou
                circuits touristiques sur mesure. Confirmation instantanée par
                SMS et e-mail.
              </p>
              <div className="rounded-2xl border border-white/30 bg-white/10 p-6 text-center">
                <p className={`${inter.className} text-sm uppercase tracking-widest`}>
                  Pour réserver
                </p>
                <a
                  href={phoneNumberHref}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-lg font-semibold text-slate-900 transition hover:bg-amber-300"
                  data-phone={phoneNumberE164}
                >
                  {phoneNumberDisplay}
                </a>
                <p className={`${inter.className} mt-2 text-xs text-white/70`}>
                  Format international : {phoneNumberE164}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-16 text-white md:px-6 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <h2
                className={`${montserrat.className} text-3xl font-bold md:text-4xl`}
              >
                La Côte d’Azur en images
              </h2>
              <p className={`${inter.className} mt-4 text-base leading-relaxed`}>
                Découvrez les plus beaux panoramas de la Côte d&apos;Azur à bord de nos véhicules premium : Croisette, Promenade des Anglais, Port Hercule, vieille ville de Menton. Nos chauffeurs vous font vivre une expérience unique dans un cadre d&apos;exception.
              </p>
            </div>
            <div className="grid w-full gap-6 sm:grid-cols-2 lg:w-1/2">
              {galleryImages.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      quality={80}
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                  <figcaption
                    className={`${inter.className} px-4 py-3 text-sm text-white/80`}
                  >
                    {image.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-white px-4 py-16 md:px-6 md:py-20 lg:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div>
              <p
                className={`${inter.className} text-sm font-semibold uppercase tracking-widest text-indigo-600`}
              >
                Centrale VTC 06
              </p>
              <h2
                className={`${montserrat.className} mt-3 text-3xl font-bold text-slate-900 md:text-4xl`}
              >
                Joignez immédiatement un coordinateur dédié
              </h2>
              <p className={`${inter.className} mt-4 text-lg text-slate-600`}>
                Vous avez un vol à suivre, un planning d’événement à gérer ou
                un déplacement surprise à organiser ? Nous mobilisons le réseau
                le plus proche de votre demande pour garantir l’arrivée du
                chauffeur en 10 à 15 minutes.
              </p>
              <ul
                className={`${inter.className} mt-6 space-y-2 text-base text-slate-700`}
              >
                <li>• Assistance francophone et anglophone</li>
                <li>• Factures détaillées pour entreprises et agences</li>
                <li>• Paiement CB, espèces, lien sécurisé, American Express</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3
                className={`${montserrat.className} text-2xl font-semibold text-slate-900`}
              >
                Numéro unique de réservation
              </h3>
              <p className={`${inter.className} mt-3 text-base text-slate-600`}>
                Ce numéro est actif 7j/7, 24h/24 pour la Côte d&apos;Azur et les
                liaisons internationales.
              </p>
              <a
                href={phoneNumberHref}
                className="mt-6 flex w-full items-center justify-center rounded-full bg-indigo-700 px-6 py-3 text-lg font-semibold text-white transition hover:bg-indigo-600"
                data-phone={phoneNumberE164}
              >
                {phoneNumberDisplay}
              </a>
              <p className={`${inter.className} mt-2 text-center text-xs text-slate-500`}>
                Format international : {phoneNumberE164}
              </p>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 px-4 py-12 text-white md:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3
                className={`${montserrat.className} text-xl font-semibold text-amber-300`}
              >
                Centrale VTC 06
              </h3>
              <p className={`${inter.className} mt-2 text-sm text-white/70`}>
                Nice · Monaco · Menton · Cannes · Antibes · Èze · Cap-d’Ail ·
                Roquebrune-Cap-Martin.
              </p>
              <p className={`${inter.className} mt-1 text-sm text-white/70`}>
                Chauffeurs privés VTC, conciergerie et événements.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className={`${inter.className} text-xs uppercase tracking-widest text-white/60`}>
                Réservation 24h/24
              </p>
              <a
                href={phoneNumberHref}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-300"
                data-phone={phoneNumberE164}
              >
                {phoneNumberDisplay}
              </a>
              <p className={`${inter.className} mt-1 text-xs text-white/60`}>
                {phoneNumberE164}
              </p>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Centrale VTC 06 – Tous droits réservés.
          </div>
        </footer>
      </div>
    </>
  );
}
