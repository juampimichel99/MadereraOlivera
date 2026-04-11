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
        {/* Logo - transparent PNG with 3D elevated shadow */}
        <div className="flex justify-center mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-11%20at%208.58.49%20AM-6FSzHvVWtEHLurHlhK9MBo5sJGBdVd.png"
            alt="Maderera Olivera Logo"
            className="w-52 h-52 sm:w-64 sm:h-64 object-contain"
            style={{
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.5)) drop-shadow(0 4px 8px rgba(0,0,0,0.4))'
            }}
          />
        </div>
        <h1 className="sr-only">Maderera Olivera - Madera de calidad para cada proyecto</h1>
        {/* Main title */}
        <p className="font-sans text-2xl sm:text-4xl text-white mb-4 leading-relaxed max-w-2xl mx-auto font-semibold tracking-wide">
          Madera de <span className="text-[#2ecc71]">calidad</span>
        </p>
        {/* Subtitle */}
        <p className="font-sans text-lg sm:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
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
