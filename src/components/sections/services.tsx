"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "../ui/button";

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const radiusInREM = useTransform(
    scrollYProgress,
    [0, 1], // Map x from these values:
    [5, 0] // desied range to use here // Into these values:
  );
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest, radiusInREM.get());
  // });
  return (
    <motion.section
      ref={ref}
      className="w-full bg-zinc-950 fc md:fr z-10 min-h-screen snap-center "
      style={{
        borderTopLeftRadius: useMotionTemplate`${radiusInREM}rem`,
        borderTopRightRadius: useMotionTemplate`${radiusInREM}rem`,
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="w-full md:w-1/2 p-4 md:p-24 fss fc"
      >
        <div className="w-full lg:w-[80%] mb-10 leading-10 mt-48 lg:text-left text-center">
          <span className="text-pe md:text-5xl text-4xl   md:text-center font-bold font-Roboto">
            Discover the power of Astrix{"`"}s comprehensive <br />
          </span>
          <span className="text-pk text-4xl md:text-5xl sm:text-7xl font-bold font-Roboto text-font-custom">
            services
          </span>
        </div>

        <div className="w-full lg:w-[70%] text-justify text-gray-300 text-xl md:text-2xl lg:text-xl font-normal font-Roboto mb-20 ">
          Our diverse range of offerings, from web design to digital marketing,
          are all designed to propel your brand forward. Each service is
          meticulously crafted, bringing innovation, creativity, and expertise
          to the forefront. It{"`"}s time to transform your digital presence
          with Astrix.
        </div>

        <div className="w-full lg:w-[80%] fcc md:fss ">
          <Button className="fcc bg-background p-8 px-12 border border-white rounded-2xl ">
            <span className="text-pk text-lg md:text-xl font-bold font-Roboto ">
              Know More
            </span>
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="w-full p-10 md:w-1/2 md:p-10 md:text-2xl md:text-center md:justify-center md:leading-1.6 md:mt-12 max-h-screen overflow-scroll"
      >
        <GigCard
          head="Website Design & Development"
          count={1}
          body={`Elevate your brand with our web design and development. Seamless,
          responsive, and captivating sites for lasting online success.`}
        />
        <GigCard
          head="Mobile App Development"
          count={2}
          body={`Transform your app idea into reality. Expert app development for outstanding user experiences, performance, and market dominance`}
        />
        <GigCard
          head="Website Design & Development"
          count={3}
          body={`Innovate with us. Product development that disrupts markets, sparks
          growth, and sets industry standards. Let's craft your success
          story.`}
        />
        <GigCard
          head="Website Design & Development"
          count={4}
          body={`Elevate your brand with our web design and development. Seamless,
          responsive, and captivating sites for lasting online success.`}
        />
        <GigCard
          head="Mobile App Development"
          count={5}
          body={`Transform your app idea into reality. Expert app development for outstanding user experiences, performance, and market dominance`}
        />
        <GigCard
          head="Website Design & Development"
          count={6}
          body={`Innovate with us. Product development that disrupts markets, sparks
          growth, and sets industry standards. Let's craft your success
          story.`}
        />
      </motion.div>
    </motion.section>
  );
}

const GigCard = ({
  head,
  body,
  count,
}: {
  head: string;
  body: string;
  count: number;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="text-5xl md:text-6xl lg:text-7xl font-medium font-Roboto text-right lg:mr-20 text-transparent -webkit-text-stroke-0.5 text-white "
        style={{
          color: "black",
          WebkitTextFillColor: "transparent",
          WebkitTextStrokeWidth: "0.5px",
          WebkitTextStrokeColor: "white",
        }}
      >
        0{count}
      </div>
      <div className="text-gray-100 text-3xl font-semibold font-Roboto text-left ">
        {head}
      </div>

      <div className=" lg:w-3/4  mt-10 text-gray-100 text-xl font-light font-Roboto text-justify">
        {body}
      </div>
      <div className="w-[80%] h-[2px] my-10 bg-gradient-to-r from-pe via-pk to-blue-400" />
    </motion.div>
  );
};
