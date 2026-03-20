'use client'

import Link from 'next/link'

export function LocationMap() {
  const address = 'Antonio Cervetti 8, El Jagüel, Buenos Aires, Argentina'
  const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`
  
  return (
    <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-950 mb-6 tracking-tight">
            Nuestra Ubicación
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-amber-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Visítanos en nuestro local en El Jagüel, Buenos Aires
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Iframe */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96 lg:h-full min-h-96 border-2 border-amber-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.9829889234!2d-58.4234!3d-34.8890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7f3f3f3f3f%3A0x0!2sAntonio%20Cervetti%208%2C%20El%20Jag%C3%BCel%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Maderera Olivera"
            ></iframe>
          </div>

          {/* Info and CTA */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white rounded-xl p-8 border-2 border-amber-100 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
                <span className="text-green-600">📍</span>
                Dirección
              </h3>
              <p className="text-lg text-amber-800 leading-relaxed">
                Antonio Cervetti 8, El Jagüel
                <br />
                Buenos Aires, Argentina
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-amber-100 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
                <span className="text-green-600">🕐</span>
                Horario de Atención
              </h3>
              <p className="text-lg text-amber-800 leading-relaxed">
                Lunes a viernes: 8 a 18 hs
                <br />
                Sábado: 8 a 13 hs
              </p>
            </div>

            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cómo llegar
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
