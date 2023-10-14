import Image from "next/image";
import Link from "next/link";
import React from "react";
import sm1 from "../../public/svgs/sm1.svg";
// import send from './svgs/send.svg'

function Footer() {
  return (
    <footer className="bg-zinc-950 w-full border">
      <div className="container mx-auto px-4 flex flex-col items-center relative mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center mb-10 b">
          <div className=" md:mb-0">
            <img src="./logo2.png" className="w-80 h-auto" alt="" />
            <br />
            <div className="flex-col md:text-left md:justify-left md:items-left text-center justify-center items-center gap-[40px]  lg:ml-10 leading-[50px]">
              <div className="text-white text-sm  font-normal font-Roboto leading-normal ">
                Lorem Ipsum, 235 Simply,
                <br />
                printing, Pin 309 309
                <br />
                Lorem Ipsum, 235 Simply,
                <br />
                printing, Pin 309 309
              </div>
              <div>
                <span className="text-white text-[17px] font-normal font-Roboto ">
                  info
                </span>
                <span className="text-white text-[17px] font-normal font-['Roboto'] underline">
                  @astrix.co.in
                </span>
              </div>
              <div className="text-white text-[17px] font-normal font-['Roboto']">
                +91 85276 99439
              </div>
              <div className=" lg:hidden text-white">
                Information | Services | Company | Subscribe
              </div>
            </div>
          </div>
          <div>
            {/* web view */}

            <div className="mb-8  md:mb-0 text-left ml-10 hidden md:block mt-10">
              <h3 className="text-lg font-bold mb-4 text-purple-700 text-Roboto">
                Information
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
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-purple-700 transition duration-300 block"
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-purple-700 transition duration-300 block"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          <div className="mb-8 md:mb-0 text-left hidden md:block mt-10">
            <h3 className="text-lg font-bold mb-4 text-purple-700">Services</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Website Development
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Application Development
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Product Development
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Branding & Social Media
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Digital Marketing
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                AI Automation
              </Link>
            </nav>
          </div>
          <div className="mb-8 md:mb-0 text-left hidden md:block mt-10">
            <h3 className="text-lg font-bold mb-4 text-purple-700">Company</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Career
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Terms of Use
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Terms & Condition
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-700 transition duration-300 block"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
          <div className="text-center hidden md:block mt-10">
            <h3 className="text-lg font-bold mb-4 text-purple-700">
              Subscribe
            </h3>
            <div className="flex items-center bg-white  rounded-[14px]  mt-10">
              <input
                className="flex-1 w-8 h-[40px] bg-white border-white rounded-tl-[14px] rounded-bl-[14px] text-center justify-center text-sm focus:outline-none"
                type="text"
                placeholder="Type your message..."
              />
              <div className="w-10  h-[40px] bg-pink-400 rounded-tr-[14px] rounded-br-[14px] ml-2 cursor-pointer">
                <img src="./svg/send.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-10 ">
            <Link href="#" className="text-blue-500 hover:text-blue-700">
              <img src={sm1} alt="" />
            </Link>
            <Link
              href="#"
              className="text-green-500 hover:text-green-700"
            ></Link>
            <Link href="#" className="text-red-500 hover:text-red-700">
              t
            </Link>
            <Link href="#" className="text-purple-500 hover:text-purple-700">
              g
            </Link>
            <Link href="#" className="text-yellow-500 hover:text-yellow-700">
              d
            </Link>
            <Link href="#" className="text-orange-500 hover:text-orange-700">
              h
            </Link>
          </div>
        </div>
        <div className=" text-center text-stone-900 lg:text-[300px] text-5xl font-medium font-Roboto mb-30">
          astrix
        </div>
      </div>
    </footer>
  );
}

export default Footer;
