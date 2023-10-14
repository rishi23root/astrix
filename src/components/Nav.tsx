import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="flex items-center justify-between  w-[95%] ">
      <Image
        className="w-40 h-12 lg:w-72 lg:h-16 "
        alt="main logo"
        src="/logo.png"
        width={275}
        height={65}
        priority
      />
      <div className=" gap-3 fcc lg:gap-12 lg:text-2xl font-base md:flex">
        <Link href={"#about"} className="text-violet-900">
          What we do
        </Link>
        <Link href={"#features"} className="text-violet-50">
          Who are we
        </Link>
        <Link href={"#pricing"} className="text-violet-50">
          Careers
        </Link>
      </div>
      <div className="text-xl  text-purple-800 text-xl font-bold font-Roboto">CONSULT NOW</div>

  
    </div>
  );
}

export default Nav;
