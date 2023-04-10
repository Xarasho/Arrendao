import Navbar from './components/navbar/Navbar'

import {Nunito} from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Departamentos y alojamientos en Arrendao - Arrendao',
  description: 'Arrendao Real Estate',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
