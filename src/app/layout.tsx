import { ReactNode } from 'react'
import { Inter } from '@App/localFonts'

import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={Inter.variable}>
      <body className="m-0 bg-gradient-to-br from-stone-50 via-gray-100 to-gray-200">
        {children}
      </body>
    </html>
  )
}
