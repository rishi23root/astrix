"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clamp from "lodash/clamp";
import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const ScrollableSection = () => {
  const refScrollTrigger = useRef<HTMLElement>(null);
  const scrollableParentRef = useRef<HTMLDivElement>(null);
  const scrollableContentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: refScrollTrigger,
    offset: ["start center", "end end"],
  });

  const radiusInREM = useTransform(
    scrollYProgress,
    [0, 1], // Map x from these values:
    [5, 0] // desied range to use here // Into these values:
  );

  // ----------------------------------------------------------------

  const refTimeline = useRef<gsap.core.Timeline>();
  const progress = useMotionValue(0);

  const scrollHeightInPencentage = useTransform(
    progress, // x
    [0.1, 1], // Map x from these values:
    [0, 100] // desied range to use here // Into these values:
  );

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (
      scrollableContentRef.current &&
      refScrollTrigger.current &&
      scrollableParentRef.current
    ) {
      // will need in testing only
      // var sectionheight = refScrollTrigger.current.scrollHeight;
      // var scrollerParentheight = scrollableParentRef.current.offsetHeight;
      // var scrollerheight = scrollableContentRef.current.offsetHeight;
      // console.log(sectionheight, scrollerParentheight, scrollerheight);

      refTimeline.current = gsap.timeline({
        scrollTrigger: {
          end: `+=100%`,
          pin: true,
          scrub: true,
          start: "top top",
          // markers: true,
          trigger: refScrollTrigger.current,
          onUpdate: (instance) => {
            progress.set(clamp(instance.progress, 0, 1));
            console.log(scrollHeightInPencentage.get());
          },
        },
      });
    }

    return () => {
      // Kill and clear the timeline and scrolltrigger instance when updated/unmounted.
      refTimeline.current?.scrollTrigger?.kill();
      refTimeline.current?.kill();
      refTimeline.current?.clear();
    };
  }, [progress, scrollHeightInPencentage]);

  return (
    <motion.section
      ref={refScrollTrigger}
      className="w-full bg-zinc-950 fc md:fr z-10 min-h-screen gap-4  "
      style={{
        borderTopLeftRadius: useMotionTemplate`${radiusInREM}rem`,
        borderTopRightRadius: useMotionTemplate`${radiusInREM}rem`,
      }}
    >
      {/* static part */}
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(1rem)",
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0rem)",
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        className="w-full md:w-1/2 p-4 pt-8 md:p-24 fc fss lg:justify-center gap-4"
      >
        <div className="w-full lg:w-[65%] leading-4 lg:leading-10 lg:text-left text-center">
          <span className="text-pe md:text-5xl text-2xl   md:text-center font-bold font-Roboto">
            Discover the power of Astrix{"`"}s <br /> comprehensive
          </span>
          <span className="text-pk md:text-5xl text-2xl font-bold font-Roboto text-font-custom">
            &nbsp; services
          </span>
        </div>

        <div className="w-full lg:w-[70%] text-justify text-gray-300 text-md md:text-2xl lg:text-xl font-normal font-Roboto leading-[18px]">
          Our diverse range of offerings, from web design to digital marketing,
          are all designed to propel your brand forward. Each service is
          meticulously crafted, bringing innovation, creativity, and expertise
          to the forefront. It{"`"}s time to transform your digital presence
          with Astrix.
        </div>

        <div className="w-full lg:w-[80%] fcc md:fss ">
          <Button className="fcc bg-background md:p-8 px-12  border border-white rounded-2xl ">
            <span className="text-pk text-lg md:text-xl font-bold font-Roboto ">
              Know More
            </span>
          </Button>
        </div>
      </motion.div>

      {/* scrolling part */}
      <motion.div
        ref={scrollableParentRef}
        className="flex-1 w-full md:w-1/2 max-h-screen relative overflow-hidden mt-8"
      >
        <motion.div
          ref={scrollableContentRef}
          className="w-full px-4 fcc fc absolute top-0 left-0 translate-y-[50%]"
          style={{
            top: useMotionTemplate`${scrollHeightInPencentage}%`,
            translateY: useMotionTemplate`-${scrollHeightInPencentage}%`,
          }}
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
      </motion.div>
    </motion.section>
  );
};

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
        className="text-3xl lg:text-7xl font-medium font-Roboto text-right lg:mr-20 text-transparent -webkit-text-stroke-0.5 text-white "
        style={{
          color: "black",
          WebkitTextFillColor: "transparent",
          WebkitTextStrokeWidth: "0.5px",
          WebkitTextStrokeColor: "white",
        }}
      >
        0{count}
      </div>
      <div className="text-gray-100 text-3xl font-semibold font-Roboto text-left">
        {head}
      </div>
      <div className="lg:w-3/4 mt-10 text-gray-100 text-xl font-light font-Roboto text-justify">
        {body}
      </div>
      <div className="w-[80%] h-[2px] my-10 bg-gradient-to-r from-pe via-pk to-blue-400" />
    </motion.div>
  );
};

export default ScrollableSection;
