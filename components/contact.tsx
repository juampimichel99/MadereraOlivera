'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ContactSection() {
  const whatsappUrl = 'https://wa.me/5491153073523?text=Hola%2C%20quiero%20consultar%20por%20productos%20de%20Maderera%20Olivera.'

  return (
    <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-950 via-amber-900 to-amber-950 text-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Pedí tu Presupuesto
          </h2>
          <div className="w-16 h-1 bg-green-400 mx-auto rounded-full"></div>
          <p className="text-xl text-amber-100 leading-relaxed">
            Contactanos hoy para discutir tus necesidades y recibir una propuesta personalizada
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Contactar por WhatsApp
            </Button>
          </Link>
          <Link href="tel:+541153073523">
            <Button 
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Llamar
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-amber-100 pt-12 mt-12 border-t-2 border-amber-700 space-y-0">
          <div className="space-y-2">
            <p className="font-semibold text-white text-lg">Teléfono</p>
            <p className="text-amber-100">+54 9 11 5307-3523</p>
            <p className="text-sm text-amber-200">011-4290-0585</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-white text-lg">Ubicación</p>
            <p className="text-amber-100">Antonio Cervetti 8</p>
            <p className="text-sm text-amber-200">El Jagüel, Buenos Aires</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-white text-lg">Horario</p>
            <p className="text-amber-100">Lun a Vie: 8 a 18 hs</p>
            <p className="text-sm text-amber-200">Sábado: 8 a 13 hs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
