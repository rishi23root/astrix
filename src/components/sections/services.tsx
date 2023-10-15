import React from "react";
import Line from "../Line";

export default function Services() {
  return (
    <section className="w-[100%] bg-zinc-950 rounded-bl-1/20 rounded-br-1/20 flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 p-4 md:p-20">
        <div className="w-full mb-20 leading-8 mt-48 lg:text-left text-center">
          <span className="text-purple-800 lg:text-5xl text-[40px] md:text-center font-bold font-Roboto">
            Discover the power of Astrix{"`"}s comprehensive <br />
          </span>
          <span className="text-pink-500 text-5xl font-bold font-Roboto text-font-custom">
            services
          </span>
        </div>

        <div className="w-full text-justify text-gray-100 text-xl md:text-2xl lg:text-xl font-normal font-Roboto mb-20 p-2">
          Our diverse range of offerings, from web design to digital marketing,
          are all designed to propel your brand forward. Each service is
          meticulously crafted, bringing innovation, creativity, and expertise
          to the forefront. It{"`"}s time to transform your digital presence
          with Astrix.
        </div>
        <div className="w-48 h-16 relative flex items-center justify-center rounded-3xl border-2 border-pink-500 ml-[60px] lg:ml-32">
          <div className="  flex text-center items-center justify-center ">
            <span className="text-pink-500 text-lg md:text-xl font-bold font-Roboto ">
              Know More
            </span>
          </div>
        </div>
      </div>
      <div className="w-full p-10 md:w-1/2 md:p-10 md:text-2xl md:text-center md:justify-center md:leading-1.6 md:mt-12">
        <div className="text-5xl md:text-6xl lg:text-7xl font-medium font-Roboto text-right lg:mr-20 text-transparent -webkit-text-stroke-0.5 text-white " 
         style={{
          color: "black",
          WebkitTextFillColor: "transparent",
          WebkitTextStrokeWidth: "0.5px",
          WebkitTextStrokeColor: "white",
        }}
      >
          01
        </div>
        <div className="text-gray-100 text-3xl font-semibold font-Roboto  text-left ">
          Website Design & Development
        </div>

        <div className=" lg:w-[80%] mt-10 text-gray-100 text-xl font-light font-Roboto text-justify">
          Elevate your brand with our web design and development. Seamless,
          responsive, and captivating sites for lasting online success.
        </div>
        <Line />
        <div
          className="text-5xl md:text-6xl lg:text-7xl font-medium font-Roboto text-right lg:mr-20   text-white "
          style={{
            color: "black",
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "0.5px",
            WebkitTextStrokeColor: "white",
          }}
        >
          02
        </div>
        <div className="text-gray-100 text-3xl font-semibold font-Roboto text-left ">
          Mobile App Development
        </div>

        <div className=" lg:w-[80%] mt-10 text-gray-100 text-xl font-light font-Roboto text-justify">
          Transform your app idea into reality. Expert app development for
          outstanding user experiences, performance, and market dominance
        </div>
        <Line />
        <div className="text-5xl md:text-6xl lg:text-7xl font-medium font-Roboto text-right lg:mr-20 text-transparent -webkit-text-stroke-0.5 text-white "
         style={{
          color: "black",
          WebkitTextFillColor: "transparent",
          WebkitTextStrokeWidth: "0.5px",
          WebkitTextStrokeColor: "white",
        }}
      >
          03
        </div>
        <div className="text-gray-100 text-3xl font-semibold font-Roboto text-left ">
          Product Development
        </div>

        <div className="lg:w-[80%]  mt-10 text-gray-100 text-xl font-light font-Roboto text-justify">
          Innovate with us. Product development that disrupts markets, sparks
          growth, and sets industry standards. Let's craft your success story."
        </div>
        <Line />
      </div>
    </section>
  );
}
