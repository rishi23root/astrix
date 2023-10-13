import Nav from "@/components/Nav";
import Line from "@/components/Line";
import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav/>
      <Line/>
      <HeroSection/>

    </main>
  )
}
