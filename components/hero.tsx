'use client'
import Image from 'next/image'
import Link from 'next/link'

const whatsappUrl = 'https://wa.me/5491153073523?text=Hola%2C%20los%20contacto%20desde%20la%20web.%20Necesito%20asesoramiento%20sobre%20materiales%20y%20precios.'

export function HeroSection() {
  return (
    <section id="inicio" className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
      {/* Desktop image */}
      <Image
        src="/hero-lumber.jpg"
        alt="Maderera Olivera - Madera de calidad"
        fill
        className="object-cover object-center hidden md:block"
        priority
        quality={85}
      />
      {/* Mobile image */}
      <Image
        src="/hero-lumber-mobile.jpg"
        alt="Maderera Olivera - Madera de calidad"
        fill
        className="object-cover object-center block md:hidden"
        priority
        quality={85}
      />
      {/* Overlay oscuro izquierda */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Texto sobre la imagen */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
          <div className="max-w-xl space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight drop-shadow-md">
              Madera de <span className="text-green-400">calidad</span><br />
              para tu proyecto
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Más de 40 años abasteciendo a particulares, constructoras y carpinteros del Gran Buenos Aires.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-700 text-white font-semibold text-base px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.856L.057 23.215a.75.75 0 0 0 .916.938l5.54-1.453A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 0 1-4.961-1.363l-.355-.212-3.686.967.984-3.595-.232-.371A9.699 9.699 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                Pedir presupuesto
              </Link>
              <Link
                href="#productos"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/50 font-semibold text-base px-6 py-3 rounded-lg shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                Ver productos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
