import Header from '@/components/header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mater Dei College Ashaka',
  description: 'Deo Semper Placere',
  keywords:["school", "mater dei", "ashaka", "secondary school", "catholic school", "mater dei ashaka"],
  creator: process.env.CREATOR
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className=' pt-24 px-4'>
          {children}
        </div>
      </body>
    </html>
  )
}
