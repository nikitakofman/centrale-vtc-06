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
        <div className="text-xs p-1 bg-gray-100 text-center">
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

          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20 flex flex-col items-center text-center">
            <h1
              className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight`}
            >
              CENTRALE VTC <span className="text-amber-400">06</span>
            </h1>

            {/* Numéro de téléphone affiché en texte pur avant tout élément graphique */}
            <div className="mt-2 mb-4">
              <p className="text-lg text-white/90">
                Notre numéro de téléphone :
              </p>
              <p className="text-2xl font-bold">{phoneNumberDisplay}</p>
              <p className="text-sm text-white/80">
                Format international : {phoneNumberE164}
              </p>
            </div>

            <p
              className={`${inter.className} text-xl md:text-2xl mb-5 max-w-2xl`}
            >
              Service de transport privé de luxe sur toute la Côte d&apos;Azur
            </p>

            {/* Bouton d&apos;appel principal */}
            <a
              href={phoneNumberHref}
              className="group bg-white text-indigo-900 rounded-full px-8 py-4 w-auto font-bold text-xl md:text-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-8"
              data-phone={phoneNumberE164}
            >
              <span className="flex items-center justify-center gap-3">
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
              </span>
            </a>
          </div>
        </section>

        {/* Section contact explicite */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold mb-1">Besoin d&apos;un VTC ?</h2>
              <p className="text-gray-600">Service disponible 24h/24, 7j/7</p>
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

        {/* Services Section */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`${montserrat.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800`}
            >
              Nos <span className="text-indigo-700">Services</span> Premium
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="h-14 w-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </div>
                <h3
                  className={`${montserrat.className} text-xl font-bold mb-3 text-gray-800`}
                >
                  Transport Privé
                </h3>
                <p className="text-gray-600">
                  Des véhicules haut de gamme et des chauffeurs professionnels
                  pour vos déplacements personnels sur toute la Côte
                  d&apos;Azur.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="h-14 w-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-amber-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </div>
                <h3
                  className={`${montserrat.className} text-xl font-bold mb-3 text-gray-800`}
                >
                  Transferts Aéroport
                </h3>
                <p className="text-gray-600">
                  Service ponctuel et fiable pour vos arrivées et départs depuis
                  l&apos;aéroport de Nice Côte d&apos;Azur et tous les aéroports
                  de la région.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <h3
                  className={`${montserrat.className} text-xl font-bold mb-3 text-gray-800`}
                >
                  Business & Événements
                </h3>
                <p className="text-gray-600">
                  Transport d&apos;affaires pour vos réunions, conférences,
                  événements professionnels et soirées sur la Côte d&apos;Azur.
                </p>
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
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2
              className={`${montserrat.className} text-3xl md:text-4xl font-bold mb-6`}
            >
              Réservez votre course dès maintenant
            </h2>

            <div className="w-full max-w-lg mx-auto p-6 bg-white/10 rounded-lg mb-8">
              <p className="text-white mb-2">Notre numéro de téléphone :</p>
              <p className="text-3xl font-bold text-amber-400 mb-2">
                {phoneNumberDisplay}
              </p>
              <p className="text-sm text-white/80">
                Format international : {phoneNumberE164}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={phoneNumberHref}
                className="w-full sm:w-auto bg-white text-indigo-900 rounded-lg px-6 py-3 font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors duration-300"
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
                Appeler {phoneNumberDisplay}
              </a>

              <button className="w-full sm:w-auto bg-amber-500 text-white rounded-lg px-6 py-3 font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors duration-300">
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                Réserver en ligne
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`${montserrat.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800`}
            >
              Pourquoi Choisir{" "}
              <span className="text-indigo-700">CENTRALE VTC 06</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h3
                  className={`${montserrat.className} text-lg font-bold mb-2 text-gray-800`}
                >
                  Ponctualité
                </h3>
                <p className="text-gray-600">
                  Nous respectons scrupuleusement les horaires convenus pour
                  votre tranquillité.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                </div>
                <h3
                  className={`${montserrat.className} text-lg font-bold mb-2 text-gray-800`}
                >
                  Confort Premium
                </h3>
                <p className="text-gray-600">
                  Des véhicules haut de gamme parfaitement entretenus pour votre
                  confort.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>
                </div>
                <h3
                  className={`${montserrat.className} text-lg font-bold mb-2 text-gray-800`}
                >
                  Chauffeurs Expérimentés
                </h3>
                <p className="text-gray-600">
                  Des professionnels courtois, discrets et parfaitement formés.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h3
                  className={`${montserrat.className} text-lg font-bold mb-2 text-gray-800`}
                >
                  Disponibilité 24/7
                </h3>
                <p className="text-gray-600">
                  Service disponible à toute heure, tous les jours de
                  l&apos;année.
                </p>
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
