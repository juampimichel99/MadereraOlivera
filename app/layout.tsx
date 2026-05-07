import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] })

export const metadata: Metadata = {
  title: 'Maderera Olivera | Monte Grande, Zona Sur',
  description: 'Tirantes, fenólicos, chapas, deck, saligna, fibrofácil y más. Cortes a medida y entrega rápida en zona sur. Consultá precio por WhatsApp.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Maderera Olivera",
  "url": "https://www.madereraolivera.com",
  "telephone": ["+54-9-11-5307-3523", "+54-11-4290-0585"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Antonio Cervetti 8",
    "addressLocality": "El Jagüel",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.8890,
    "longitude": -58.4234
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "description": "Maderera familiar en El Jagüel, Monte Grande. Más de 40 años abasteciendo a particulares, constructoras y carpinteros del GBA sur. Tirantes, fenólicos, chapas, deck, fibrofácil, saligna y más. Cortes a medida y entrega en obra.",
  "areaServed": [
    "Monte Grande", "El Jagüel", "Ezeiza", "Canning",
    "Lomas de Zamora", "Almirante Brown", "Lanús", "Gran Buenos Aires"
  ],
  "sameAs": [
    "https://www.instagram.com/maderera.olivera"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={dmSans.className}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16521942603"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16521942603');
          `}
        </Script>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
