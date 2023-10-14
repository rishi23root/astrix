import React from "react";

export default function Info() {
  return (
    <div className="w-[100%] p-20 flex flex-col justify-center items-center h-auto bg-black text-center text-gray-100 mt-10 border">
      <div>
        <span className="text-purple-800 text-3xl lg:text-5xl font-bold font-Roboto">
          Let’s{" "}
        </span>
        <span className="text-pink-500 text-3xl lg:text-5xl font-bold font-Roboto">
          build
        </span>
        <span className="text-purple-800 text-3xl lg:text-5xl font-bold font-Roboto">
          {" "}
          your business together
        </span>
      </div>
      <div className="text-3xl font-bold font-Roboto mt-10">
        info@astrix.co.in
      </div>
      <div className="w-52 h-52 mt-20 flex justify-center items-center relative">
        <div className="w-40 h-40 ml-5 top-0 absolute bg-pink-500 rounded-full flex justify-center items-center">
          <img src="/svgs/info.svg" alt="" />
        </div>
        <img
          className="absolute flex justify-center items-center ml-5 mb-20 transform rotate-180"
          src="/svgs/pointer.svg"
          alt=""
        />
      </div>
    </div>
  );
}
