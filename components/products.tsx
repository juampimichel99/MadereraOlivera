'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Decks',
    description: 'Decks de madera maciza para exteriores, con tratamiento especial contra la humedad y el paso del tiempo.',
    image: '/wood-deck.jpg',
  },
  {
    id: 2,
    name: 'Pérgolas',
    description: 'Pérgolas de madera a medida para transformar tu jardín o terraza en un espacio único y con estilo.',
    image: '/wood-pergola.jpg',
  },
  {
    id: 3,
    name: 'Techos',
    description: 'Estructuras de techo en madera con terminaciones premium, adaptadas a cada proyecto y diseño.',
    image: '/wood-roof.jpg',
  },
  {
    id: 4,
    name: 'Escalones',
    description: 'Escalones de madera maciza, seguros y con acabado profesional para interiores y exteriores.',
    image: '/wood-stairs.jpg',
  },
  {
    id: 5,
    name: 'Materiales para la Construcción',
    description: 'Aislantes de aluminio, clavos, herrajes y todo lo que necesitás para tu obra.',
    image: '/construction-materials.jpg',
  },
  {
    id: 6,
    name: 'Placas',
    description: 'Placas fenólicas y OSB de pino, ideales para construcción y trabajos de carpintería.',
    image: '/wood-panels.jpg',
  },
  {
    id: 7,
    name: 'Chapas',
    description: 'Chapas acanaladas galvanizadas, ideales para techos y cubiertas. Disponibles en varias medidas.',
    image: '/chapas.jpg',
  },
]

export function ProductsSection() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const total = products.length

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
      setCurrent(0)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const visible = isMobile ? 1 : 2

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const visibleProducts = isMobile
    ? [products[current % total]]
    : [products[current % total], products[(current + 1) % total]]

  return (
    <section id="productos" className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-950 mb-6 tracking-tight">
            Nuestros Productos
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-amber-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Descubrí nuestra variedad de productos de madera y construcción de la más alta calidad
          </p>
        </div>

        <div className="relative flex items-center gap-4">
          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Producto anterior"
            className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-amber-950 text-white shadow-md hover:bg-green-600 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards */}
          <div className="flex gap-6 flex-1 overflow-hidden">
            {visibleProducts.map((product, i) => (
              <div
                key={`${product.id}-${i}`}
                className="flex-1 group overflow-hidden rounded-xl bg-white border-2 border-amber-100 hover:border-green-400 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative h-64 w-full overflow-hidden bg-amber-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-amber-950 text-xl leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Producto siguiente"
            className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-amber-950 text-white shadow-md hover:bg-green-600 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir al producto ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === current || (!isMobile && i === (current + 1) % total)
                  ? 'bg-green-500 w-5'
                  : 'bg-amber-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
