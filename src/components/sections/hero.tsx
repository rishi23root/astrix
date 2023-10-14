"use client";
import React, { useEffect } from "react";
import "../../app/page.css";

function HeroSection() {
  useEffect(() => {
    function counter(id: string, start: number, end: number, duration: number) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          if (obj) {
            obj.textContent = current.toString();
          }
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
    }

    counter("count1", 0, 99, 3000);
    counter("count2", 100, 30, 2500);
    counter("count3", 0, 2, 3000);
  }, []);

  return (
    <section className="items-center justify-between max-w-[100%] mt-10">
      <div className="justify-start items-end gap-[80px] flex flex-col md:flex-row">
        <div className="flex-col justify-start items-start gap-14 inline-flex ">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="w-full mx-auto text-center md:text-left custom-service-1">
              <span className="text-white text-5xl font-bold font-Roboto tracking-wider">
                Your Complete <br />
              </span>
              <span className="text-pink-500 text-5xl font-bold font-Roboto tracking-wider">
                Digital Solutions
                <br />
              </span>
              <span className="text-white text-5xl font-bold font-Roboto tracking-wider">
                Partner
              </span>
            </div>
            <div className="w-full md:w-[450px] text-white text-xl font-normal font-Roboto mx-auto text-center md:text-left text-justify custom-service-1">
              Unleash Your Business Potential with Expert IT, Web, Mobile
              Development, Product Innovation, Social Media Branding, and
              Digital Marketing Strategies
            </div>
          </div>
          <div className="justify-center items-center gap-[38px] inline-flex custom-service-1 flex-wrap">
            <div className="w-[180px] h-[60px] relative">
              <div className="w-[180px] h-[60px] left-0 top-0 absolute rounded-[14px] border-2 border-white">
                <div className="p-5 absolute inset-0 flex items-center justify-center text-center text-white text-xl font-bold font-Roboto ">
                  Consult Now
                </div>
              </div>
            </div>
            <div className="text-center text-pink-500 text-xl font-bold font-Roboto">
              Download Brochure
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-2.5 md:flex">
          <div className="w-full md:w-[500px] h-[70vh] relative">
            <div className="w-full md:w-[500px] h-[70vh] left-0 top-0 absolute bg-stone-500" />
            <img
              className="absolute w-full bottom-0"
              src="https://via.placeholder.com/1280x877"
            />
          </div>

          <div className="w-[104px] h-[379px] flex-col justify-start items-start gap-[50px] inline-flex">
            <div>
              <span className="text-white text-[40px] font-semibold font-Poppins leading-[40px]" id="count1">
                {"+"}
              </span>
                <br />
              <span className="text-white text-xs font-semibold font-Plus Jakarta Sans leading-relaxed">
                Project Complete
              </span>
            </div>
            <div>
              <span className="text-white text-[40px] font-semibold font-Poppins leading-[40px]"  id="count2">
                +
              </span>
                <br />
              <span className="text-white text-xs font-semibold font-Plus Jakarta Sans leading-relaxed">
                Happy Client
              </span>
            </div>
            <div>
              <span className="text-white text-[40px] font-semibold font-Poppins leading-[40px]" id="count3">
              +
              </span>
                <br />
              <span className="text-white text-xs font-semibold font-Plus Jakarta Sans leading-relaxed">
                Years Experience
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;

{
  /* <div className="w-[1191px] h-[793px] left-[-440px] top-[-21px] absolute" />
          <div className="w-[946px] left-[1030px] top-[772px] absolute text-center">
            <span className="text-pink-500 text-[47px] font-medium font-Roboto leading-[74.67px]">
              Trusted
            </span>
            <span className="text-gray-100 text-[47px] font-medium font-Roboto leading-[74.67px]">
              {" "}
              by Top Brands: Astrix - Your Trusted Partner for Innovation and
              Excellence
            </span>
          </div> */
}
{
  /* </div> */
}
{
  /* <div className="justify-start items-center gap-[19px] flex">
          <div className="w-[203.56px] h-[84px] relative">
            <div className="w-[69.56px] h-20 left-[134px] top-0 absolute">
              <img
                className="w-[69.56px] h-20 left-0 top-0 absolute"
                src="https://via.placeholder.com/70x80"
              />
              <img
                className="w-[86px] h-[82px] left-[-16px] top-0 absolute"
                src="https://via.placeholder.com/86x82"
              />
            </div>
            <div className="w-[69.56px] h-20 left-[72.44px] top-[2px] absolute">
              <img
                className="w-[69.56px] h-20 left-0 top-0 absolute"
                src="https://via.placeholder.com/70x80"
              />
              <img
                className="w-[102px] h-[153px] left-[-25.44px] top-[-10px] absolute"
                src="https://via.placeholder.com/102x153"
              />
            </div>
            <div className="w-20 h-20 left-0 top-[4px] absolute">
              <div className="w-20 h-20 left-0 top-0 absolute bg-stone-500 rounded-full" />
              <img
                className="w-[84px] h-[126px] left-[-2px] top-[-7px] absolute"
                src="https://via.placeholder.com/84x126"
              />
            </div>
          </div>
          <div className="relative">
            <div className="left-0 top-0 absolute text-white text-xl font-bold font-['Plus Jakarta Sans'] leading-7">
              49+ Businesses
            </div>
            <div className="left-[1px] top-[30px] absolute text-stone-300 text-base font-medium font-['Plus Jakarta Sans'] leading-snug">
              Boosted their business with us
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-[50px] inline-flex">
          <div>
            <span className="text-white text-[40px] font-semibold font-['Poppins'] leading-[88px]">
              99+
              <br />
            </span>
            <span className="text-white text-xs font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
              Project Complete
            </span>
          </div>
          <div>
            <span className="text-white text-[40px] font-semibold font-['Poppins'] leading-[88px]">
              30+
              <br />
            </span>
            <span className="text-white text-xs font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
              Happy Client
            </span>
          </div>
          <div>
            <span className="text-white text-[40px] font-semibold font-['Poppins'] leading-[88px]">
              2+
              <br />
            </span>
            <span className="text-white text-xs font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
              Years Experience
            </span>
          </div>
        </div> */
}
