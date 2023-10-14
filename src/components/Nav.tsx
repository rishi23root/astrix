import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="fc fcc w-full ">
      <div className="fr fcb md:w-[90%] w-[95%]">
        <Image
          className="md:w-64 md:h-12 w-40 h-8"
          alt="main logo"
          src="/logo.png"
          width={500}
          height={300}
          priority
        />
        <div className="fss gap-12 text-md w-[50%] font-base hidden md:flex">
          <Link href={"#about"} className="text-violet-50">
            What we do
          </Link>
          <Link href={"#features"} className="text-violet-50">
            Who are we
          </Link>
          <Link href={"#pricing"} className="text-violet-50">
            Careers
          </Link>
        </div>
        <div className="text-xl font-bold font-Roboto cursor-pointer bg-gradient-pp text-transparent bg-clip-text">
          CONSULT NOW
        </div>
      </div>
    </div>
  );
}

export default Nav;
