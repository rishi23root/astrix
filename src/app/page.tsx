import Nav from "@/components/Nav";
import Line from "@/components/Line";
import HeroSection from "@/components/sections/hero";
import Footer from "@/components/Footer";
import Brand from "@/components/sections/brand";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Unlock from "@/components/sections/unlock";
import Testimonial from "@/components/sections/testimonial";
import Info from "@/components/sections/info";
import '../app/page.css'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Nav/>
      <HeroSection/>
      <Brand/>
      <About/>
      <Services/>
      <Unlock/>
      {/* <Testimonial/> */}
      <Info/>
      <Footer/>
      
      
      

    </main>
  )
}
