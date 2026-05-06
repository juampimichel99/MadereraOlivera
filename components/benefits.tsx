'use client'
import { CheckCircle, Users, Truck, Package } from 'lucide-react'

const benefits = [
  {
    id: 1,
    title: 'Calidad garantizada',
    description: 'Productos seleccionados de proveedores de confianza.',
    icon: CheckCircle,
  },
  {
    id: 2,
    title: 'Asesoramiento personalizado',
    description: 'Te ayudamos a elegir el material correcto para tu proyecto.',
    icon: Users,
  },
  {
    id: 3,
    title: 'Entrega en Buenos Aires',
    description: 'Enviamos a domicilio u obra en todo el Gran Buenos Aires.',
    icon: Truck,
  },
  {
    id: 4,
    title: 'Stock permanente',
    description: 'Tirantes, fenólicos, chapas, deck y más, siempre disponibles.',
    icon: Package,
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-950 mb-6 tracking-tight">
            Por qué elegirnos
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-amber-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Más de 40 años trabajando con particulares, constructoras y carpinteros del Gran Buenos Aires.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-7 rounded-xl bg-white border-2 border-amber-100 hover:border-green-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 group"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                <benefit.icon className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-amber-950 text-lg">
                {benefit.title}
              </h3>
              <p className="text-amber-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
