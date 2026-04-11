'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  const whatsappUrl = 'https://wa.me/5491153073523?text=Hola%2C%20quiero%20consultar%20por%20productos%20de%20Maderera%20Olivera.'

  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero-lumber.jpg"
        alt="Maderera Olivera - Madera de calidad"
        fill
        className="absolute inset-0 object-cover"
        priority
        quality={75}
      />
      {/* Improved overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Logo as main heading */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-xl p-4 shadow-2xl">
            <img
              src="/logo.png"
              alt="Maderera Olivera Logo"
              className="w-56 h-auto"
            />
          </div>
        </div>
        <h1 className="sr-only">Maderera Olivera - Madera de calidad para cada proyecto</h1>
        <p className="font-serif text-2xl sm:text-4xl text-white mb-10 leading-relaxed drop-shadow-md max-w-2xl mx-auto font-medium tracking-wide">
          Madera de <span className="text-green-400">calidad</span>
          <br />
          para cada proyecto que tengas en mente
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
    </section>
  )
}
