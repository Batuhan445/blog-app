import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Batuhan Karaahmetoglu Blog'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className='flex flex-col'>

        <Navbar/>
        {children}
        <Footer/>

      </body>
    </html>
  )
}
