'use client'
import dynamic from 'next/dynamic'
import Header from '@/app/ui/components/Header'
import Footer from '@/app/ui/components/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const CulturioContent = dynamic(
    () => import('./ui/components/CulturioContent'),
    {
        ssr: false,
    }
)

export default function Home() {
    const queryClient = new QueryClient()

    return (
        <div>
            <Header />

            <main>
                <QueryClientProvider client={queryClient}>
                    <CulturioContent />
                </QueryClientProvider>
            </main>

            <Footer />
        </div>
    )
}
