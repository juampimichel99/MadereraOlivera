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
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Logo - transparent PNG with subtle shadow */}
        <div className="flex justify-center mb-12">
          <img
            src="/logo-transparent.png"
            alt="Maderera Olivera Logo"
            className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
            }}
          />
        </div>
        <h1 className="sr-only">Maderera Olivera - Madera de calidad para cada proyecto</h1>
        {/* Main title */}
        <h2 className="font-sans text-3xl sm:text-5xl text-white mb-4 leading-tight max-w-2xl mx-auto font-bold">
          Madera de <span className="text-[#2ecc71]">calidad</span>
        </h2>
        {/* Subtitle */}
        <p className="font-sans text-xl sm:text-2xl text-white/70 mb-16 leading-relaxed max-w-2xl mx-auto font-light italic">
          para cada proyecto que tengas en mente
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg"
              className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Contactanos por WhatsApp
            </Button>
          </Link>
          <Link href="#productos">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/50 font-semibold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
            >
              Ver productos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
