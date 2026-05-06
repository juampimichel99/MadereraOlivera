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
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
