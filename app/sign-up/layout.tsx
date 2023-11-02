import type { Metadata } from 'next';
import '../globals.css';


export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create account to use writing tools',
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
