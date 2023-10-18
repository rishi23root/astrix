"use client";
import {
  circOut,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function About() {
  // add scroll animation
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
    smooth: 1,
  });
  const paddingInREM = useTransform(
    scrollYProgress,
    [0, 0.9], // Map x from these values:
    [3, 0], // desied range to use here // Into these values:
    { ease: circOut }
  );
  const radiusInREM = useTransform(
    scrollYProgress,
    [0, 1], // Map x from these values:
    [4, 0], // desied range to use here // Into these values:
    { ease: circOut }
  );

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest, paddingInREM.get());
  // });

  return (
    <section ref={ref} className="w-full z-10" >
      <motion.div
        className="bg-zinc-950 h-auto"
        style={{
          padding: useMotionTemplate`${paddingInREM}rem`,
          borderRadius: useMotionTemplate`${radiusInREM}rem`,
        }}
      >
        <motion.div
          className="bg-white"
          style={{
            borderRadius: useMotionTemplate`${radiusInREM}rem`,
          }}
        >
          <div className="fc fsc ">
            <div className="w-full h-[10%] ">
              <div className="cointainer w-[90%] m-auto flex justify-start">
                <Image
                  src={"/svgs/aboutTop.svg"}
                  width={200}
                  height={80}
                  alt="img svg"
                  className="w-full h-fit md:object-fill"
                />
              </div>
            </div>
            <div className="flex-col gap-2.5"  id="about">
              <div className="text-center pt-20">
                <span className="text-zinc-900 lg:text-5xl text-3xl font-bold font-Roboto">
                  We are <br />
                  humans who{" "}
                </span>
                <span className="text-pe lg:text-5xl text-3xl font-bold font-Roboto">
                  collaborates
                </span>
                <span className="text-zinc-900 lg:text-5xl text-3xl font-bold font-Roboto">
                  {" "}
                  with <br /> some humans{" "}
                </span>
              </div>
              <div className="text-center text-neutral-600 text-xl lg:text-3xl font-extrabold font-Roboto lg:leading-[57.50px] mt-20">
                At Astrix, we{"'"}re more than just a digital agency; <br />
                we{"'"}re architects of transformation 🚀
              </div>
              <Image
                height={2}
                width={10}
                src="/svgs/curve.svg"
                alt="curve line svg"
                className="p-5 mb-20 w-full"
              />
              <div className="text-center text-pe text-xl w-[80%] font-normal font-Roboto mx-auto pb-10">
                Our journey began with a deep passion for technology and a
                vision for a future where businesses thrive in the digital
                landscape. With years of experience in IT solutions, web design,
                mobile app development, and digital marketing, we{"'"}ve evolved
                into a dynamic force.
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
