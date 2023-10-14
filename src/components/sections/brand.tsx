import React from "react";
import svg1 from "../../../public/svgs/brands/svg1.svg";
import svg2 from "../../../public/svgs/brands/svg2.svg";
import svg3 from "../../../public/svgs/brands/svg3.svg";
import svg4 from "../../../public/svgs/brands/svg4.svg";
import svg5 from "../../../public/svgs/brands/svg5.svg";
import svg6 from "../../../public/svgs/brands/svg6.svg";
import svg7 from "../../../public/svgs/brands/svg7.svg";
import svg8 from "../../../public/svgs/brands/svg8.svg";
import Image from "next/image";

function Brand() {
  return (
    <div className="w-full fc fcc py-12 my-12 ">
      <div className="text-3xl md:text-6xl font-medium text-white fcc ">
        <span className="text-pk">Trusted </span>&nbsp; by Top Brands
      </div>
      {/* all scrolling animations */}
      <div className="overflow-x-hidden w-full mt-12">
        <div className=" pl-8 justify-start items-start gap-[26.67px] inline-flex">
          <Image src={svg1} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg2} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg3} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg4} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg5} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg6} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg7} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg8} alt="svg" className="border-2 p-2 rounded-xl" />
        </div>
        <div className=" pl-8 justify-start items-start gap-[26.67px] inline-flex">
          <Image src={svg1} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg2} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg3} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg4} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg5} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg6} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg7} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg8} alt="svg" className="border-2 p-2 rounded-xl" />
        </div>
        <div className=" pl-8 justify-start items-start gap-[26.67px] inline-flex">
          <Image src={svg1} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg2} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg3} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg4} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg5} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg6} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg7} alt="svg" className="border-2 p-2 rounded-xl" />
          <Image src={svg8} alt="svg" className="border-2 p-2 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default Brand;
