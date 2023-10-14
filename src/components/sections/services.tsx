import React from "react";
import Line from "../Line";

export default function Services() {
  return (
    <section className="w-[100%] bg-zinc-950 rounded-bl-1/20 rounded-br-1/20 flex flex-col md:flex-row border">
      <div className="w-full md:w-1/2 p-4 md:p-20">
        <div className="w-full mb-20 leading-5 mt-48  md:items-center">
          <span className="text-purple-800 text-5xl font-medium font-Roboto  ">
            Discover the  power of Astrix{"`"}s comprehensive {" "}
          </span>
          <span className="text-pink-500 text-5xl font-medium font-Roboto text-font-custom">
            services
          </span>
        </div>
        <div className="w-full text-justify text-gray-100 text-xl md:text-2xl lg:text-xl font-normal font-Roboto mb-20">
          Our diverse range of offerings, from web design to digital marketing,
          are all designed to propel your brand forward. Each service is
          meticulously crafted, bringing innovation, creativity, and expertise
          to the forefront. It{"`"}s time to transform your digital presence with
          Astrix.
        </div>
        <div className="w-64 h-16 relative ">
          <div className="w-64 h-16  absolute rounded-3xl border-2 border-pink-500" />
          <div className="absolute inset-0 flex text-center items-center justify-center">
            <span className="text-pink-500 text-lg md:text-xl font-bold font-Roboto">
              Know More
            </span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:p-10 md:text-2xl md:text-center md:justify-center md:leading-1.6 md:mt-12">
        <div className="text-5xl md:text-6xl lg:text-7xl font-medium font-Roboto text-right mr-20 text-transparent -webkit-text-stroke-0.5 text-white ">
          01
        </div>
        <div className="text-gray-100 text-3xl font-semibold font-Roboto text-left ">
          Website Design & Development
        </div>

        <div className="w-[70%] mt-10 text-gray-100 text-xl font-light font-Roboto text-justify">
          Elevate your brand with our web design and development. Seamless,
          responsive, and captivating sites for lasting online success.
        </div>
        <Line/>
        <div className="text-5xl md:text-6xl lg:text-7xl font-medium font-Roboto text-right mr-20 text-transparent -webkit-text-stroke-0.5 text-white ">
          01
        </div>
        <div className="text-gray-100 text-3xl font-semibold font-Roboto text-left ">
          Website Design & Development
        </div>

        <div className="w-[70%] mt-10 text-gray-100 text-xl font-light font-Roboto text-justify">
          Elevate your brand with our web design and development. Seamless,
          responsive, and captivating sites for lasting online success.
        </div>
        <Line/>
        <div className="text-5xl md:text-6xl lg:text-7xl font-medium font-Roboto text-right mr-20 text-transparent -webkit-text-stroke-0.5 text-white ">
          01
        </div>
        <div className="text-gray-100 text-3xl font-semibold font-Roboto text-left ">
          Website Design & Development
        </div>

        <div className="w-[70%] mt-10 text-gray-100 text-xl font-light font-Roboto text-justify">
          Elevate your brand with our web design and development. Seamless,
          responsive, and captivating sites for lasting online success.
        </div>
        <Line/>
       
       
       
      </div>
    </section>
  );
}
