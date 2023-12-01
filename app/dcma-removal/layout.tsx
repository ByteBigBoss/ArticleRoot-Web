import type { Metadata } from 'next';
import '../globals.css';


export const metadata: Metadata = {
  title: 'DCMA Removal',
  description: 'View the DCMA removal',
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
