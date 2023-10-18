import Nav from "@/components/Nav";
import HeroSection from "@/components/sections/hero";
import Footer from "@/components/Footer";
import Brand from "@/components/sections/brand";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Unlock from "@/components/sections/unlock";
import Testimonial from "@/components/sections/testimonial";
import Info from "@/components/sections/info";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="pt-8 snap-proximity snap-y ">
      <Nav />
      <HeroSection />
      <Brand />
      <About />
      <div className="w-full border border-green h-[20vh] uppercase">
        <div className="w-full h-[40vh] bg-white -z-20 -translate-y-1/4 fcc ">
          <Marquee speed={150} pauseOnHover>
            <div className="text-5xl m-4 text-black ">creative</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">design</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">ui/ux</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">marketing</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">motion</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">animation</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">branding</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
          </Marquee>
        </div>
      </div>
      <Services />
      <Unlock />

      {/* compteted all the required animations till here */}
      <Testimonial />
      <Info />
      <Footer />
    </main>
  );
}
