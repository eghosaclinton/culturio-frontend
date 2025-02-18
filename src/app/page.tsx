'use client'
import Header from "@/app/ui/components/Header";
import Footer from "@/app/ui/components/Footer"
import CulturioContent from "./ui/components/CulturioContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { Masonry } from "masonic";
// import { cookies } from "next/headers";

export default function Home() {
  const queryClient = new QueryClient()
  // const cookieStore = await cookies()
  // const visitorId = cookieStore.has('visitorId')

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
  );
}
