'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  {
    id: 'principales',
    label: 'Maderas Principales',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-evOwu4Owc4WD4AyTmJQ3eMTsqCzR3P.png',
    woods: ['Pino', 'Eucalipto', 'Zoita', 'Roble Claro', 'Cedro', 'Roble Oscuro'],
  },
  {
    id: 'especiales',
    label: 'Maderas Especiales',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YpnFF09LaEYFiLrwY3afPEhe81orZ9.png',
    woods: ['Paraíso', 'Anchico', 'Guatambú', 'Petiribi', 'Guayubira', 'Angelín'],
  },
]

export function WoodsSection() {
  const [current, setCurrent] = useState(0)
  const total = categories.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const category = categories[current]

  return (
    <section id="maderas" className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-950 mb-6 tracking-tight">
            Algunas de nuestras maderas
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8 rounded-full" />
          <p className="text-amber-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Trabajamos con las principales especies del mercado para uso estructural y decorativo. Consultanos por disponibilidad y precios.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Categoría anterior"
            className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-amber-950 text-white shadow-md hover:bg-green-600 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Card */}
          <div className="flex-1 overflow-hidden rounded-xl border-2 border-amber-100 bg-white shadow-md">
            {/* Category label */}
            <div className="px-6 pt-6 pb-3 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-green-600 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                {category.label}
              </span>
            </div>

            {/* Image */}
            <div className="px-6 pb-2">
              <img
                src={category.image}
                alt={category.label}
                className="w-full rounded-lg object-contain"
              />
            </div>

            {/* Wood tags */}
            <div className="px-6 pb-6 pt-3 flex flex-wrap gap-2">
              {category.woods.map((wood) => (
                <span
                  key={wood}
                  className="text-sm font-medium text-amber-800 bg-amber-100 rounded-full px-3 py-1"
                >
                  {wood}
                </span>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Categoría siguiente"
            className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-amber-950 text-white shadow-md hover:bg-green-600 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ver ${categories[i].label}`}
              className={`h-2.5 rounded-full transition-all duration-200 ${
                i === current ? 'bg-green-500 w-8' : 'bg-amber-200 w-2.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
