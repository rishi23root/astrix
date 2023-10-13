import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-zinc-950">
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center mb-10 b">
          <div className="mb-8 md:mb-0">
            {/* <h2 className="text-5xl text-purple-700 font-bold mb-2">
                  Pratyaksh
                </h2> */}
            <img src="" className="w-60 h-auto ml-10" alt="" />
            <br />
            <p className="text-white leading-relaxed">
              Empowering You in Every Language <br /> Pratyaksh Your Legal
              Document Solution
            </p>
          </div>
          <div className="mb-8 md:mb-0 text-center">
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
          <div className="mb-8 md:mb-0 text-center">
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
          <div className="mb-8 md:mb-0 text-center">
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
                className="flex-1 bg-transparent border-white focus:outline-none"
                type="text"
                placeholder="Type your message..."
              />
              <div className="w-14 h-12 bg-pink-500 rounded-tr-lg rounded-br-lg ml-2 cursor-pointer"></div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              f
            </a>
            <a href="#" className="text-green-500 hover:text-green-700">
          i
            
            </a>
            <a href="#" className="text-red-500 hover:text-red-700">
             t
            </a>
            <a href="#" className="text-purple-500 hover:text-purple-700">
           g
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-700">
            d
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-700">
              h
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
