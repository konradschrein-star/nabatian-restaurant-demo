import Hero3D from '@/components/ui/Hero3D';
import RevealText from '@/components/animations/RevealText';
import ParallaxSection from '@/components/animations/ParallaxSection';
import HoverCard from '@/components/animations/HoverCard';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* 3D Hero Section */}
      <Hero3D>
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-7xl font-quattrocento font-bold tracking-[0.25rem] mb-6">
            NABATIAN RESTAURANT
          </h1>
          <p className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto font-maven">
            Persisches Restaurant & Catering am Sonnenbrunnen
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-burgundy hover:bg-burgundy-dark text-white font-maven font-medium text-lg px-10 py-5 transition-all duration-300 hover:scale-105"
          >
            RESERVIEREN SIE JETZT
          </Link>
        </div>
      </Hero3D>

      {/* Restaurant Preview Section */}
      <ParallaxSection speed={0.3}>
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <RevealText>
              <h2 className="text-5xl font-quattrocento font-bold text-center mb-8 text-burgundy">
                Persische Küche
              </h2>
              <p className="text-xl text-center mb-16 max-w-3xl mx-auto font-maven">
                Erleben Sie authentische persische Gastfreundschaft und kulinarische Exzellenz
              </p>
            </RevealText>

            <div className="grid md:grid-cols-3 gap-8">
              <RevealText delay={0.1}>
                <HoverCard className="bg-gradient-to-br from-burgundy to-wine text-white rounded-lg p-8">
                  <h3 className="text-2xl font-maven font-bold mb-4">Persisches Buffet</h3>
                  <p className="font-maven">
                    Authentisches All-You-Can-Eat Buffet mit einer Vielzahl traditioneller persischer Gerichte.
                  </p>
                </HoverCard>
              </RevealText>

              <RevealText delay={0.2}>
                <HoverCard className="bg-gradient-to-br from-wine to-burgundy text-white rounded-lg p-8">
                  <h3 className="text-2xl font-maven font-bold mb-4">Kebab-Variationen</h3>
                  <p className="font-maven">
                    Saftige Spieße vom Grill - Joojeh, Kubideh und Barg. Serviert mit persischem Reis.
                  </p>
                </HoverCard>
              </RevealText>

              <RevealText delay={0.3}>
                <HoverCard className="bg-gradient-to-br from-burgundy-dark to-burgundy text-white rounded-lg p-8">
                  <h3 className="text-2xl font-maven font-bold mb-4">Vegetarisch</h3>
                  <p className="font-maven">
                    Kashk-e Bademjan, Mirza Ghasemi und weitere vegetarische Köstlichkeiten.
                  </p>
                </HoverCard>
              </RevealText>
            </div>

            <div className="text-center mt-12">
              <RevealText delay={0.4}>
                <Link
                  href="/restaurant"
                  className="inline-block bg-burgundy hover:bg-burgundy-dark text-white font-maven font-medium text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
                >
                  MEHR ERFAHREN
                </Link>
              </RevealText>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Catering Preview Section */}
      <ParallaxSection speed={0.5}>
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <RevealText>
              <h2 className="text-5xl font-quattrocento font-bold text-center mb-8 text-burgundy">
                Catering & Events
              </h2>
              <p className="text-xl text-center mb-16 max-w-3xl mx-auto font-maven">
                Professionelles persisches Catering für Ihre besonderen Anlässe
              </p>
            </RevealText>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Bronze Package */}
              <RevealText delay={0.1}>
                <HoverCard className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-burgundy transition-all">
                  <h3 className="text-2xl font-maven font-bold text-center mb-2">Bronze</h3>
                  <p className="text-4xl font-maven font-bold text-burgundy text-center mb-6">
                    €20<span className="text-lg text-gray-600">/Person</span>
                  </p>
                  <ul className="space-y-2 font-maven text-sm">
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">✓</span>
                      <span>3 Hauptgerichte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">✓</span>
                      <span>2 Vorspeisen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">✓</span>
                      <span>Persischer Reis</span>
                    </li>
                  </ul>
                </HoverCard>
              </RevealText>

              {/* Silver Package (Featured) */}
              <RevealText delay={0.2}>
                <HoverCard className="bg-gradient-to-br from-burgundy to-wine text-white rounded-lg p-8 transform md:scale-105 shadow-2xl">
                  <div className="text-center bg-white/20 text-white px-4 py-1 rounded-full text-sm font-maven mb-4">
                    BELIEBT
                  </div>
                  <h3 className="text-2xl font-maven font-bold text-center mb-2">Silver</h3>
                  <p className="text-4xl font-maven font-bold text-center mb-6">
                    €35<span className="text-lg">/Person</span>
                  </p>
                  <ul className="space-y-2 font-maven text-sm">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>5 Hauptgerichte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>4 Vorspeisen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Vollservice</span>
                    </li>
                  </ul>
                </HoverCard>
              </RevealText>

              {/* Gold Package */}
              <RevealText delay={0.3}>
                <HoverCard className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-burgundy transition-all">
                  <h3 className="text-2xl font-maven font-bold text-center mb-2">Gold</h3>
                  <p className="text-4xl font-maven font-bold text-burgundy text-center mb-6">
                    €50<span className="text-lg text-gray-600">/Person</span>
                  </p>
                  <ul className="space-y-2 font-maven text-sm">
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">✓</span>
                      <span>Unbegrenzte Auswahl</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">✓</span>
                      <span>Dessert-Buffet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">✓</span>
                      <span>Premium Service</span>
                    </li>
                  </ul>
                </HoverCard>
              </RevealText>
            </div>

            <div className="text-center mt-12">
              <RevealText delay={0.4}>
                <Link
                  href="/catering"
                  className="inline-block bg-burgundy hover:bg-burgundy-dark text-white font-maven font-medium text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
                >
                  CATERING ANFRAGEN
                </Link>
              </RevealText>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-32 bg-burgundy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealText>
            <h2 className="text-4xl font-quattrocento font-bold mb-4">
              Erleben Sie persische Gastfreundschaft
            </h2>
            <p className="text-xl font-maven mb-8">
              Besuchen Sie uns oder kontaktieren Sie uns für Ihr Event
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="tel:+4917684512873"
                className="inline-block bg-white text-burgundy hover:bg-gray-100 font-maven font-medium text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
              >
                ☎ +49 176 84512873
              </Link>
              <Link
                href="/kontakt"
                className="inline-block bg-wine hover:bg-burgundy-dark text-white font-maven font-medium text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
              >
                KONTAKT
              </Link>
            </div>
          </RevealText>
        </div>
      </section>
    </>
  );
}
