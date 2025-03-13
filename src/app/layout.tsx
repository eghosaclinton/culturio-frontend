import { ViewTransitions } from 'next-view-transitions'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { cookies } from 'next/headers'
import './globals.css'

// const geistSans = Geist({
//     variable: '--font-geist-sans',
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
    const cookieStore = cookies()
    return (
        <ViewTransitions>
            <html lang="en">
                <body className={`antialiased`}>
                    {children}
                    <Analytics />
                </body>
            </html>
        </ViewTransitions>
    )
}
