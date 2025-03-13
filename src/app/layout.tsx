import { ViewTransitions } from 'next-view-transitions'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'] })

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
        <ViewTransitions>
            <html lang="en">
                <body className={`${workSans.className} antialiased`}>
                    {children}
                    <Analytics />
                </body>
            </html>
        </ViewTransitions>
    )
}
