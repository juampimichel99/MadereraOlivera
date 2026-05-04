'use client'

const benefits = [
  {
    id: 1,
    title: 'Calidad Asegurada',
    description: 'Todos nuestros productos cumplen con los más altos estándares de calidad',
    icon: '✓',
  },
  {
    id: 2,
    title: 'Atención Personalizada',
    description: 'Nuestro equipo está dedicado a entender tus necesidades específicas',
    icon: '👥',
  },
  {
    id: 3,
    title: 'Entrega Inmediata',
    description: 'Envíos a Monte Grande, Canning, todo Zona Sur y alrededores',
    icon: '🚚',
  },
  {
    id: 4,
    title: 'Amplio Stock',
    description: 'Contamos con una amplia variedad de productos en existencia',
    icon: '📦',
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-950 mb-6 tracking-tight">
            Por qué elegir Maderera Olivera
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-amber-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Somos el socio confiable para todos tus proyectos de construcción
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-7 rounded-xl bg-white border-2 border-amber-100 hover:border-green-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 group"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
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
