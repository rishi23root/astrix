import Image from "next/image";
import Link from "next/link";
import React from "react";
import sm1 from '../../public/svgs/sm1.svg'

function Footer() {
  return (
    <footer className="bg-zinc-950 w-[100%]">
      <div className="container mx-auto px-4 flex flex-col items-center relative mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center mb-10 b">
          <div className="mb-8 md:mb-0">
            <img src="./logo.png" className="w-60 h-auto" alt="" />
            <br />
            <div className="flex-col justify-center items-center gap-[10px] flex text-center">
              <div className="text-white text-lg font-normal font-['Roboto'] leading-normal ">
                Lorem Ipsum, 235 Simply,
                <br />
                printing, Pin 309 309
                <br />
                Lorem Ipsum, 235 Simply,
                <br />
                printing, Pin 309 309
              </div>
              <div>
                <span className="text-white text-[17px] font-normal font-['Roboto']">
                  info
                </span>
                <span className="text-white text-[17px] font-normal font-['Roboto'] underline">
                  @astrix.co.in
                </span>
              </div>
              <div className="text-white text-[17px] font-normal font-['Roboto']">
                +91 85276 99439
              </div>
            </div>
          </div>
          <div className="mb-8 md:mb-0 text-center web">
            <h3 className="text-lg font-bold mb-4 text-purple-700">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Events
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Team
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="mb-8 md:mb-0 text-center web">
            <h3 className="text-lg font-bold mb-4 text-purple-700">Services</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Events
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Team
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="mb-8 md:mb-0 text-center web">
            <h3 className="text-lg font-bold mb-4 text-purple-700">Company</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Events
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Team
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-purple-700">
              Subscribe
            </h3>
            <div className="flex items-center border rounded-lg p-2">
              <input
                className="flex-1 w-20 h-10 bg-transparent border-white focus:outline-none"
                type="text"
                placeholder="Type your message..."
              />
              <div className="w-14 h-12 bg-pink-500 rounded-tr-lg rounded-br-lg ml-2 cursor-pointer"></div>
            </div>
          </div>
          <div className="flex items-center space-x-4 ">
            <Link href="#" className="text-blue-500 hover:text-blue-700">
              <img src={sm1} alt="" />
            </Link >
            <Link href="#" className="text-green-500 hover:text-green-700">
              i
            </Link >
            <Link href="#" className="text-red-500 hover:text-red-700">
              t
            </Link >
            <Link href="#" className="text-purple-500 hover:text-purple-700">
              g
            </Link >
            <Link href="#" className="text-yellow-500 hover:text-yellow-700">
              d
            </Link >
            <Link href="#" className="text-orange-500 hover:text-orange-700">
              h
            </Link >
          </div>
        </div>
        <div className=" text-center text-stone-900 lg:text-[300px] text-5xl font-medium font-Roboto mb-30">astrix</div>

      </div>
    </footer>
  );
}

export default Footer;
