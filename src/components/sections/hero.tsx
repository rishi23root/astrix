"use client";
import React, { useEffect } from "react";


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
    <section className="items-center justify-between w-[100%] mt-10 border ">
      <div className="justify-start items-end gap-[80px] flex flex-col md:flex-row">
        <div className="flex-col justify-start items-start gap-14 inline-flex ">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="w-full mx-auto text-center md:text-left md:items-center">
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
            <div className="w-full md:w-[450px] text-white text-xl font-normal font-Roboto mx-auto text-center md:text-left  flex md:items-center">
              Unleash Your Business Potential with Expert IT, Web, Mobile
              Development, Product Innovation, Social Media Branding, and
              Digital Marketing Strategies
            </div>
          </div>
          <div className="justify-center items-center gap-[38px] inline-flex flex md:items-center flex-wrap">
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
            {/* <img
              className="absolute w-full bottom-0"
              src=""
            /> */}
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
