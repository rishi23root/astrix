import Nav from "@/components/Nav";
import Line from "@/components/Line";
import HeroSection from "@/components/sections/hero";
import Footer from "@/components/Footer";
import Brand from "@/components/sections/brand";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Nav/>
      <HeroSection/>
      <Brand/>
      <Services/>
      <Footer/>
      
      

    </main>
  )
}
