'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
export function HeroSection() {
  const whatsappUrl = 'https://wa.me/5491153073523?text=Hola%2C%20los%20contacto%20desde%20la%20web.%20Necesito%20asesoramiento%20sobre%20materiales%20y%20precios.'
  return (
    <section 
      className="relative min-h-screen w-full flex items-end overflow-hidden"
    >
      <Image
        src="/hero-lumber.jpg"
        alt="Maderera Olivera - Madera de calidad"
        fill
        className="absolute inset-0 object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full pb-24 sm:pb-32">
        <div className="max-w-xl space-y-6">
          <h1 className="sr-only">Maderera Olivera - Madera de calidad para tu proyecto</h1>
          <p className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight drop-shadow-md">
            Madera de <span className="text-green-400">calidad</span><br />
            para tu proyecto
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            Más de 40 años abasteciendo a particulares, constructoras y carpinteros del Gran Buenos Aires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Contactanos por WhatsApp
              </Button>
            </Link>
            <Link href="#productos">
              <Button 
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                Ver Productos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
