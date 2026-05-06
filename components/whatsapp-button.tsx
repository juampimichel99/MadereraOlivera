'use client'

import Link from 'next/link'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/5491153073523?text=Hola%2C%20los%20contacto%20desde%20la%20web.%20Necesito%20asesoramiento%20sobre%20materiales%20y%20precios.'

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_whatsapp', {
        'event_category': 'contacto',
        'event_label': 'whatsapp_click'
      })
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16521942603/LI7oCKuL-YscEMusc8Y9'
      })
    }
  }

  return (
    <Link 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 md:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110"
      title="Contactanos por WhatsApp"
    >
      <svg
        className="w-6 h-6 md:w-7 md:h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 2.003a9.945 9.945 0 00-8.456 15.195L2 22l4.948-1.558A9.943 9.943 0 0012.05 22c5.514 0 9.998-4.486 9.998-9.999S17.564 2.003 12.05 2.003zm0 18.306a8.255 8.255 0 01-4.211-1.153l-.302-.18-3.133.985.888-3.07-.197-.315A8.296 8.296 0 013.75 12c0-4.553 3.747-8.297 8.3-8.297 4.552 0 8.298 3.744 8.298 8.297 0 4.554-3.746 8.309-8.298 8.309z" />
      </svg>
    </Link>
  )
}
