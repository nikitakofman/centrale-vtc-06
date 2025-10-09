import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

// Fonts
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  // Format E.164 requis par Google selon la documentation:
  // Numéro au format texte standard pour affichage
  const phoneNumberDisplay = "06 30 17 45 63";
  // Numéro au format E.164 pour le code source (format recommandé par Google)
  const phoneNumberE164 = "+33630174563";
  // URL pour les liens cliquables
  const phoneNumberHref = "tel:+33630174563";

  return (
    <>
      <Head>
        <title>CENTRALE VTC 06 | Réservation au {phoneNumberDisplay}</title>
        <meta
          name="description"
          content={`CENTRALE VTC 06 - Service de VTC sur la Côte d'Azur. Réservation 24h/24 au ${phoneNumberDisplay}`}
        />
        <meta
          name="keywords"
          content={`vtc, taxi, côte d&apos;azur, nice, ${phoneNumberDisplay}, chauffeur privé`}
        />
        <link rel="canonical" href="https://www.centrale-vtc-06.fr" />

        {/* Structured data pour le numéro de téléphone au format E.164 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CENTRALE VTC 06",
              telephone: phoneNumberE164,
              url: "https://www.centrale-vtc-06.fr",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Provence-Alpes-Côte d'Azur",
                addressCountry: "FR",
              },
            }),
          }}
        />

        {/* Insertion technique du numéro au format E.164 pour les crawlers Google AdsBot */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="telephone" content={phoneNumberE164} />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Numéro de téléphone en texte pur pour les robots de Google */}
        <div className="text-xs p-1 bg-gray-100 text-center text-black">
          Pour réserver un VTC, appelez CENTRALE VTC 06 au {phoneNumberDisplay}{" "}
          ({phoneNumberE164})
        </div>

        {/* Bannière supérieure avec numéro cliquable */}
        <div className="bg-indigo-800 text-white py-3 px-4 text-center">
          <p className="text-base md:text-lg">
            <span className="mr-2">Réservez votre VTC au</span>
            <a
              href={phoneNumberHref}
              className="font-bold hover:underline inline-flex items-center"
              data-phone={phoneNumberE164}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              {phoneNumberDisplay}
            </a>
          </p>
        </div>

        {/* Hero Section */}
        <section className="relative bg-indigo-900 text-white">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 opacity-90"></div>

          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
            <div className="text-center mb-8">
              <h1
                className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight`}
              >
                CENTRALE VTC <span className="text-amber-400">06</span> – L&apos;Alternative Premium aux Taxis sur la Côte d&apos;Azur
              </h1>

              <div className="flex items-center justify-center gap-2 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-amber-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <p className={`${inter.className} text-2xl md:text-3xl font-bold text-amber-400`}>
                  Votre chauffeur privé disponible en 10 à 15 minutes
                </p>
              </div>

              {/* Numéro de téléphone affiché en texte pur avant tout élément graphique */}
              <div className="mt-4 mb-6">
                <p className="text-lg text-white/90">
                  Notre numéro de téléphone :
                </p>
                <p className="text-2xl font-bold">{phoneNumberDisplay}</p>
                <p className="text-sm text-white/80">
                  Format international : {phoneNumberE164}
                </p>
              </div>
            </div>

            <div className={`${inter.className} max-w-4xl mx-auto text-lg md:text-xl space-y-4 mb-8`}>
              <p>
                Bienvenue chez <strong>Centrale VTC 06</strong>, la <strong>1ʳᵉ centrale de réservation de chauffeurs privés du 06</strong>.
                Basée entre Nice, Monaco, Menton et Cannes, nous regroupons les meilleurs chauffeurs professionnels de la Côte d&apos;Azur pour vos trajets personnels, professionnels et événements.
              </p>
              <p>
                Nos chauffeurs sont disponibles <strong>24h/24 et 7j/7</strong>, pour tous vos déplacements au départ ou à destination de l&apos;aéroport de Nice, des gares, hôtels, ports, ou villas privées.
              </p>
              <p>
                <strong>Plus besoin de chercher un taxi</strong> : avec Centrale VTC 06, vous obtenez un chauffeur en quelques minutes, à un tarif fixe et transparent, sans surprise ni majoration.
              </p>
            </div>

            {/* Bouton d&apos;appel principal */}
            <div className="text-center">
              <a
                href={phoneNumberHref}
                className="group bg-white text-indigo-900 rounded-full px-8 py-4 w-auto font-bold text-xl md:text-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-3"
                data-phone={phoneNumberE164}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-amber-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                {phoneNumberDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Section contact explicite */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold mb-1 text-black">Besoin d&apos;un VTC ?</h2>
              <p className="text-black">Service disponible 24h/24, 7j/7</p>
            </div>
            <div>
              <a
                href={phoneNumberHref}
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
                data-phone={phoneNumberE164}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                Appeler le {phoneNumberDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`${montserrat.className} text-3xl md:text-4xl font-bold text-center mb-12 text-black`}
            >
              Pourquoi choisir <span className="text-indigo-700">CENTRALE VTC 06</span> ?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`${montserrat.className} text-lg font-bold mb-2 text-black`}>
                    Tarifs fixes
                  </h3>
                  <p className="text-black">
                    Vous connaissez le prix avant de monter à bord
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`${montserrat.className} text-lg font-bold mb-2 text-black`}>
                    Service rapide
                  </h3>
                  <p className="text-black">
                    Chauffeur en 10 à 15 minutes selon votre zone
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`${montserrat.className} text-lg font-bold mb-2 text-black`}>
                    Disponibilité 24h/24 et 7j/7
                  </h3>
                  <p className="text-black">
                    Service disponible à toute heure
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`${montserrat.className} text-lg font-bold mb-2 text-black`}>
                    Véhicules haut de gamme
                  </h3>
                  <p className="text-black">
                    Mercedes Classe E, EQE, V-Class, Tesla…
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`${montserrat.className} text-lg font-bold mb-2 text-black`}>
                    Chauffeurs expérimentés
                  </h3>
                  <p className="text-black">
                    Discrets et bilingues
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`${montserrat.className} text-lg font-bold mb-2 text-black`}>
                    Paiement sécurisé
                  </h3>
                  <p className="text-black">
                    CB, espèces, facture pro sur demande
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`${montserrat.className} text-lg font-bold mb-2 text-black`}>
                    Service professionnel
                  </h3>
                  <p className="text-black">
                    Pour particuliers, hôtels et entreprises
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Airport Transfers Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
              <h2
                className={`${montserrat.className} text-3xl md:text-4xl font-bold text-black`}
              >
                Spécialiste des transferts aéroport & longue distance
              </h2>
            </div>

            <div className={`${inter.className} max-w-4xl mx-auto mb-8`}>
              <h3 className="text-xl font-bold mb-4 text-black">
                Nos transferts les plus demandés :
              </h3>
              <ul className="space-y-3 text-lg text-black">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">➜</span>
                  <span><strong>Aéroport Nice</strong> ➜ Monaco / Menton / Cannes / Saint-Tropez</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">➜</span>
                  <span><strong>Monaco</strong> ➜ Nice / Cannes / Aéroport / Italie (Sanremo, Ventimiglia)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">➜</span>
                  <span><strong>Menton</strong> ➜ Nice / Cannes / Aéroport / Marseille / Milan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">➜</span>
                  <span><strong>Cannes</strong> ➜ Monaco / Nice / Saint-Tropez / Gênes</span>
                </li>
              </ul>
              <p className="mt-6 text-black">
                Nous assurons également les <strong>retours tardifs, soirées, mariages, séminaires, événements privés et transferts VIP</strong> avec la plus grande ponctualité.
              </p>
            </div>
          </div>
        </section>

        {/* Service Zones Section */}
        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <h2
                className={`${montserrat.className} text-3xl md:text-4xl font-bold text-gray-800`}
              >
                Nos zones de service
              </h2>
            </div>

            <div className={`${inter.className} grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg`}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100">
                <h3 className="font-bold text-indigo-800 mb-3">Alpes-Maritimes Est</h3>
                <ul className="space-y-2 text-black">
                  <li>• Nice, Cagnes-sur-Mer, Saint-Laurent-du-Var</li>
                  <li>• Monaco, Beausoleil, Cap-d&apos;Ail</li>
                  <li>• Menton, Roquebrune-Cap-Martin</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100">
                <h3 className="font-bold text-indigo-800 mb-3">Alpes-Maritimes Ouest</h3>
                <ul className="space-y-2 text-black">
                  <li>• Cannes, Antibes, Juan-les-Pins</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100">
                <h3 className="font-bold text-indigo-800 mb-3">Var & Longue Distance</h3>
                <ul className="space-y-2 text-black">
                  <li>• Saint-Tropez, Fréjus, Toulon</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100">
                <h3 className="font-bold text-indigo-800 mb-3">Italie frontalière</h3>
                <ul className="space-y-2 text-black">
                  <li>• Vintimille, Sanremo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Numéro de téléphone en texte clair pour Google Ads */}
        <section className="bg-gray-100 py-8 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-gray-600 mb-2">
              Réservez votre chauffeur privé CENTRALE VTC 06 au :
            </p>
            <p className="text-indigo-800 text-3xl font-bold mb-2">
              {phoneNumberDisplay}
            </p>
            <p className="text-gray-500">
              Format international : {phoneNumberE164}
            </p>
          </div>
        </section>

        {/* CTA Section avec numéro bien visible */}
        <section className="bg-indigo-900 py-14 text-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2
                className={`${montserrat.className} text-3xl md:text-4xl font-bold mb-6`}
              >
                Réservez votre chauffeur maintenant
              </h2>

              <div className="w-full max-w-lg mx-auto p-6 bg-white/10 rounded-lg mb-4">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-amber-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  <p className="text-white text-lg">Réservation instantanée au</p>
                </div>
                <p className="text-4xl font-bold text-amber-400 mb-2">
                  {phoneNumberDisplay}
                </p>
                <p className="text-sm text-white/80 mb-4">
                  Format international : {phoneNumberE164}
                </p>
                <p className="text-white/90">Ou via WhatsApp, SMS, ou notre formulaire de réservation en ligne.</p>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-xl flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-amber-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Disponible 24h/24 – Chauffeur privé en moins de 15 minutes
                </p>
                <p className="text-xl flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-amber-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  Service premium sur toute la Côte d&apos;Azur
                </p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-amber-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-bold`}>
                  CENTRALE VTC 06 – La référence locale
                </h3>
              </div>

              <div className={`${inter.className} max-w-3xl mx-auto space-y-4 text-lg text-center`}>
                <p>
                  <strong>Fini les longues attentes et les tarifs variables :</strong><br />
                  Avec Centrale VTC 06, vous bénéficiez de la rapidité d&apos;un taxi et du confort d&apos;un chauffeur privé.
                </p>
                <p>
                  Notre équipe surveille en temps réel les disponibilités des chauffeurs pour garantir une réponse immédiate à chaque demande.
                </p>
                <p className="text-xl font-semibold text-amber-400">
                  Notre objectif : offrir le meilleur service de transport privé sur la Côte d&apos;Azur à un prix juste, pour que chaque trajet soit un moment agréable.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <a
                  href={phoneNumberHref}
                  className="w-full sm:w-auto bg-white text-indigo-900 rounded-lg px-8 py-4 font-bold text-xl inline-flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors duration-300 shadow-lg"
                  data-phone={phoneNumberE164}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  Appeler {phoneNumberDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* Footer avec numéro de téléphone bien visible */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3
                  className={`${montserrat.className} text-2xl font-bold mb-4`}
                >
                  CENTRALE VTC <span className="text-amber-400">06</span>
                </h3>
                <p className="mb-4 text-gray-300">
                  Service de transport privé de qualité sur toute la Côte
                  d&apos;Azur. Nous desservons Nice, Cannes, Monaco,
                  Saint-Tropez et toutes les destinations de la région.
                </p>
                <div className="mb-4">
                  <p className="text-white mb-2">
                    Pour réserver votre VTC, appelez-nous :
                  </p>
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    <a
                      href={phoneNumberHref}
                      className="hover:underline"
                      data-phone={phoneNumberE164}
                    >
                      {phoneNumberDisplay}
                    </a>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Format international : {phoneNumberE164}
                  </p>
                </div>
              </div>
              <div className="md:text-right">
                <h4
                  className={`${montserrat.className} text-lg font-bold mb-4`}
                >
                  Liens Rapides
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      Nos Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reservation"
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      Réservation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tarifs"
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      Tarifs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bande avec numéro de téléphone explicite */}
            <div className="border-t border-gray-700 mt-8 pt-8 pb-4 text-center">
              <p className="text-gray-400 mb-2">
                Pour toute réservation de VTC, appelez-nous au :
              </p>
              <a
                href={phoneNumberHref}
                className="text-xl md:text-2xl font-bold text-amber-400 hover:underline inline-flex items-center justify-center gap-2"
                data-phone={phoneNumberE164}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                {phoneNumberDisplay}
              </a>
            </div>

            <div className="border-t border-gray-800 mt-4 pt-4 text-sm text-gray-500 text-center">
              <p>
                &copy; {new Date().getFullYear()} CENTRALE VTC 06. Tous droits
                réservés.
                <span className="block md:inline md:ml-2">
                  Pour nous joindre : {phoneNumberDisplay}
                </span>
              </p>
            </div>
          </div>
        </footer>

        {/* Barre de contact fixe mobile avec numéro de téléphone (visible uniquement sur mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-indigo-800 text-white py-3 px-4 text-center md:hidden z-50">
          <a
            href={phoneNumberHref}
            className="font-bold text-lg flex items-center justify-center gap-2"
            data-phone={phoneNumberE164}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Appelez maintenant : {phoneNumberDisplay}
          </a>
        </div>

        {/* Commentaire HTML caché pour les crawlers avec numéro au format E.164 */}
        {/* Le commentaire est visible dans le code source HTML mais pas pour l&apos;utilisateur */}
        <div
          dangerouslySetInnerHTML={{
            __html: `<!-- 
            CENTRALE VTC 06
            Numéro de téléphone : ${phoneNumberDisplay}
            Numéro international : ${phoneNumberE164}
            -->`,
          }}
        />
      </div>
    </>
  );
}
