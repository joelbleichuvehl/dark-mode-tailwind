import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import ThemeProvider from './providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dark Mode Exemple',
  description: 'Example dark mode app with Next Js and Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <ThemeProvider>
        <body className={`${inter.className} `}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
