'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

interface ProductCategory {
  id: string
  name: string
  description: string
}

const categories: ProductCategory[] = [
  {
    id: 'tableros-fenolicos',
    name: 'Tableros y Fenólicos',
    description: 'Tableros fenólicos y OSB de pino para construcción y carpintería de la más alta calidad.',
  },
  {
    id: 'tiranteria-vigas',
    name: 'Tirantería y Vigas',
    description: 'Vigas y tirantería de madera maciza para estructuras, techos y construcciones.',
  },
  {
    id: 'machimbre',
    name: 'Machimbre',
    description: 'Machimbre de madera de primera calidad con acabados profesionales para interiores.',
  },
  {
    id: 'deck-madera',
    name: 'Deck de Madera',
    description: 'Decks de eucalyptus, guayubira y lapacho con tratamiento contra humedad y clima.',
  },
  {
    id: 'chapas',
    name: 'Chapas',
    description: 'Chapas de zinc, galvanizadas, acanaladas y trapezoidales para techos, galpones y construcciones.',
  },
  {
    id: 'fibrofacil-mdf',
    name: 'Fibrofácil y MDF',
    description: 'Placas de fibrofácil y MDF en distintos espesores para muebles, revestimientos y construcciones.',
  },
  {
    id: 'madera-saligna',
    name: 'Madera Saligna',
    description: 'Tablas de saligna cepillada y bruta para encofrado, construcción y estructuras.',
  },
  {
    id: 'pergolas-quinchos',
    name: 'Pérgolas y Quinchos',
    description: 'Pérgolas de madera a medida para transformar jardines y terrazas en espacios únicos.',
  },
  {
    id: 'maderas-especiales',
    name: 'Maderas Especiales',
    description: 'Maderas especiales y nobles para proyectos de lujo y acabados premium.',
  },
  {
    id: 'escaleras-madera',
    name: 'Escaleras de Madera',
    description: 'Escaleras de madera maciza con acabado profesional para interiores y exteriores.',
  },
  {
    id: 'membranas-techos',
    name: 'Membranas para Techos',
    description: 'Membranas impermeables y de protección para cubiertas y estructuras de techo.',
  },
  {
    id: 'aislantes-termicos',
    name: 'Aislantes Térmicos',
    description: 'Aislantes térmicos de calidad para mejorar eficiencia energética en construcciones.',
  },
  {
    id: 'postes-columnas',
    name: 'Postes y Columnas',
    description: 'Postes y columnas de madera maciza para estructuras y construcciones durables.',
  },
  {
    id: 'barnices-lacas',
    name: 'Barnices y Lacas',
    description: 'Barnices y lacas de primera calidad para protección y acabado de maderas.',
  },
  {
    id: 'balustres-pasamanos',
    name: 'Balustres y Pasamanos',
    description: 'Balustres y pasamanos de diseño para escaleras, terrazas y balcones.',
  },
  {
    id: 'cortes-medida',
    name: 'Cortes a Medida',
    description: 'Servicio de corte a medida personalizado según los requerimientos de tu proyecto.',
  },
]

export function ProductCategoriesSection() {
  const whatsappPhone = '5491153073523'

  const handleCategoryClick = (categoryName: string) => {
    const message = `Hola, quiero consultar sobre ${categoryName}.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_product_category', {
        'event_category': 'productos',
        'event_label': categoryName,
      })
    }

    return whatsappUrl
  }

  return (
    <section id="categorias-productos" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-950 mb-4 tracking-tight">
            Todas Nuestras Categorías
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-amber-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Contamos con una amplia variedad de productos de madera y materiales de construcción.
            Descubrí todas nuestras categorías y contactanos para más información.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col h-full bg-white rounded-lg border-2 border-amber-100 hover:border-green-400 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="flex-1 flex flex-col p-5 sm:p-6 space-y-3">
                <h3 className="font-bold text-amber-950 text-lg sm:text-xl leading-snug group-hover:text-green-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed flex-1">
                  {category.description}
                </p>
              </div>

              <Link
                href={handleCategoryClick(category.name)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-16521942603/LI7oCKuL-YscEMusc8Y9'
                    })
                  }
                }}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-none transition-all duration-200 group-hover:shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Consultar por WhatsApp</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 bg-white rounded-lg p-6 sm:p-8 border-2 border-amber-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-amber-950 mb-4">
            Todo lo que Necesitas para tu Proyecto
          </h3>
          <div className="space-y-4 text-amber-700 leading-relaxed">
            <p>
              En Maderera Olivera contamos con una amplia selección de productos de madera y materiales
              de construcción de la más alta calidad. Ya sea que necesites tableros y fenólicos para
              proyectos de construcción, decks de madera para renovar tu terraza, pérgolas a medida,
              escaleras de madera, o cualquier otro producto especializado, tenemos lo que buscas.
            </p>
            <p>
              Nuestro catálogo incluye tirantería y vigas para estructuras, maderas especiales y nobles
              para proyectos de lujo, sistemas de aislamiento térmico, membranas para techos, barnices
              y lacas de primer nivel, balustres y pasamanos decorativos, además de nuestro servicio
              de cortes a medida personalizado para cada proyecto.
            </p>
            <p>
              Todas nuestras categorías de productos están disponibles para consulta inmediata a través
              de WhatsApp. Contactanos con las categorías que te interesan y recibí información detallada
              de precios, disponibilidad y especificaciones técnicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
