'use client'
import dynamic from 'next/dynamic'
import Header from '@/app/ui/components/Header'
import Footer from '@/app/ui/components/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useUserStore } from './store/userStore'
import { v4 as uuid } from 'uuid'
import { useEffect } from 'react'

const CulturioContent = dynamic(
    () => import('./ui/components/CulturioContent'),
    {
        ssr: false,
    }
)

export default function Home() {
    const queryClient = new QueryClient()
    const setId = useUserStore((state) => state.setId)

    useEffect(() => {
        function setStore() {
            const id = localStorage.getItem('viewerId')
            if (!id) {
                const genId = uuid()
                localStorage.setItem('viewerId', genId)
                setId(genId)
                return
            }
            setId(id)
            return
        }

        setStore()
    }, [setId])

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
