'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    src: '/wood-texture-1.jpg',
    alt: 'Pisos de madera premium',
  },
  {
    id: 2,
    src: '/wood-texture-2.jpg',
    alt: 'Techos y vigas de madera',
  },
  {
    id: 3,
    src: '/wood-texture-3.jpg',
    alt: 'Escalones de madera',
  },
  {
    id: 4,
    src: '/wood-texture-4.jpg',
    alt: 'Materiales de construcción',
  },
  {
    id: 5,
    src: '/hero-lumber.jpg',
    alt: 'Almacén de materiales',
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 text-center">
          Galería
        </h2>
        <p className="text-center text-amber-700 text-lg mb-12 max-w-2xl mx-auto">
          Conoce nuestro trabajo y la calidad de nuestros materiales
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-64 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Ver imagen
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full h-96" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt="Expanded view"
                fill
                className="object-contain"
              />
              <button
                className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-amber-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
