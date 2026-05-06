'use client'
export function AboutSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-950 mb-6 tracking-tight">
            Sobre Nosotros
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-8 text-lg text-amber-800 leading-relaxed mb-16">
          <p className="text-center text-amber-700 max-w-3xl mx-auto">
            Somos una maderera familiar fundada en 1982 por José Olivera. Más de 40 años abasteciendo a particulares, constructoras y carpinteros del Gran Buenos Aires.
          </p>
          <p className="text-center text-amber-700 max-w-3xl mx-auto">
            Trabajamos con cada cliente de forma directa: escuchamos el proyecto, asesoramos sobre materiales y medidas, y entregamos en obra o en el local. Sin intermediarios, sin vueltas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white rounded-xl p-8 text-center border-2 border-amber-100 shadow-md hover:shadow-lg hover:border-green-400 transition-all duration-300 hover:-translate-y-1">
            <p className="text-4xl font-bold text-green-600 mb-3">+40</p>
            <p className="font-semibold text-amber-950 text-lg">Años en el rubro</p>
            <p className="text-sm text-amber-600 mt-2">Sin interrupciones desde 1982</p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center border-2 border-amber-100 shadow-md hover:shadow-lg hover:border-green-400 transition-all duration-300 hover:-translate-y-1">
            <p className="text-4xl font-bold text-green-600 mb-3">↩</p>
            <p className="font-semibold text-amber-950 text-lg">Clientes que vuelven</p>
            <p className="text-sm text-amber-600 mt-2">La mayoría nos elige proyecto tras proyecto</p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center border-2 border-amber-100 shadow-md hover:shadow-lg hover:border-green-400 transition-all duration-300 hover:-translate-y-1">
            <p className="text-4xl font-bold text-green-600 mb-3">✓</p>
            <p className="font-semibold text-amber-950 text-lg">Asesoramiento incluido</p>
            <p className="text-sm text-amber-600 mt-2">En cada compra, grande o chica</p>
          </div>
        </div>
      </div>
    </section>
  )
}
