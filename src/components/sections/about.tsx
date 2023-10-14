import React from "react";
import curve from "../../../public/svgs/curve.svg";

function About() {
  return (
    <section className="">
    <div className="w-full p-[-10]">
      <div className=" bg-zinc-950 rounded-bl-[50px] rounded-br-[50px] h-auto p-10">
        <div className="  h-auto  bg-white rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[50px] rounded-br-[50px]">
          <div className=" top-0  flex-col justify-start items-center inline-flex">
            {/* <div className=" bg-purple-800 rounded-full" /> */}
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="  ">
                <div className="flex justify-center items-center h-screen/2">
                  <div className="text-center">
                    <span className="text-zinc-900 lg:text-5xl text-3xl font-medium font-Roboto">
                      We are <br />
                      humans who{" "}
                    </span>
                    <span className="text-purple-800 lg:text-5xl text-3xl font-medium font-Roboto">
                      collaborates
                    </span>
                    <span className="text-zinc-900 lg:text-5xl text-3xl font-medium font-Roboto">
                      {" "}
                      with <br /> some humans{" "}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center h-screen text-center">
                <div className="  text-neutral-600 text-3xl font-extrabold font-Roboto leading-[57.50px]">
                  At Astrix, we're more than just a digital agency; <br />
                  we're architects of transformation 🚀
                </div>
                </div>

                <div className="flex justify-center items-center h-screen/2 mb-0">
                  <div className="text-center text-purple-800 text-xl w-[70%] font-normal font-Roboto">
                    Our journey began with a deep passion for technology and a
                    vision for a future where businesses thrive in the digital
                    landscape. With years of experience in IT solutions, web
                    design, mobile app development, and digital marketing, we've
                    evolved into a dynamic force.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
