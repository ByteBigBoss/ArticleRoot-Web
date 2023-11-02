import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Home',
  description: 'Read and Write Your Favorite Articles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>{children}</body>
    </html>
  )
}
