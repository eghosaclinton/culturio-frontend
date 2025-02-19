'use client'
import Header from '@/app/ui/components/Header'
import ResizeObserver from "resize-observer-polyfill"
import Footer from '@/app/ui/components/Footer'
import CulturioContent from './ui/components/CulturioContent'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

if (typeof window !== 'undefined'){
  window.ResizeObserver = ResizeObserver;
}

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
