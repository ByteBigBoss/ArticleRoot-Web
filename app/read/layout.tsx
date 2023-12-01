import type { Metadata } from 'next';
import '../globals.css';


export const metadata: Metadata = {
  title: 'Articles',
  description: 'Explore articles pool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}