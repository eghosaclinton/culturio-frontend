import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

// const geistSans = Geist({
//     variable: '--font-geist-sans',
//     subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//     variable: '--font-geist-mono',
//     subsets: ['latin'],
// })

export const metadata: Metadata = {
    title: 'culturio',
    description: 'Exlore african history and culture.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    )
}
