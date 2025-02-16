import Header from "@/app/ui/components/Header";
import Footer from "@/app/ui/components/Footer"
import { Suspense } from "react";
import Fallback from "@/app/ui/components/Fallback";
import CulturioContent from "./ui/components/CulturioContent";
// import { Masonry } from "masonic";
// import { cookies } from "next/headers";

export default async function Home() {
  // const cookieStore = await cookies()
  // const visitorId = cookieStore.has('visitorId')

  return (
   <div>
    <Header />

    <main>      
      <Suspense fallback={<Fallback/>}>
        <CulturioContent />
      </Suspense>
    </main>

    <Footer />
   </div>
  );
}
