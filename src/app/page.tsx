import Nav from "@/components/Nav";
import Line from "@/components/Line";
import HeroSection from "@/components/sections/hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Nav/>
      <Line/>
      <HeroSection/>
      {/* <Footer/> */}

    </main>
  )
}
