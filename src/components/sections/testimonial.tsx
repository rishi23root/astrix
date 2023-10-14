import React from "react";

export default function Testimonial() {
  return (
    <div className="w-full items-center bg-zinc-950 ">
      <div className="  flex-col justify-cemter items-center gap-[71px] inline-flex ">
        <div className="flex-col justify-center items-center gap-[115px] flex">
          <div className="mt-20">
            <span className="text-purple-800 text-5xl font-medium font-Roboto">
              What people{" "}
            </span>
            <span className="text-pink-500 text-5xl font-medium font-Roboto">
              say
            </span>
            <span className="text-purple-800 text-5xl font-medium font-Roboto">
              {" "}
              about us
            </span>
          </div>
          <div className="w-[207px] h-[88px] relative">
            <div className="w-[88.71px] h-[88px] top-0 absolute">
              <div className="w-[88.71px] h-[88px] left-0 top-0 absolute bg-purple-800 rounded-full" />
              <div className="origin-top-left -rotate-90 w-[18.85px] h-[23.66px]  absolute"></div>
            </div>
            <div className="origin-top-left rotate-180 w-[88.71px] h-[88px] left-[120px] top-[3px] absolute">
              <div className="w-[88.71px] h-[88px] left-0 top-0 absolute origin-top-left rotate-180 bg-gray-100 rounded-full" />
              <div className="origin-top-left rotate-90 w-[18.85px] h-[23.66px]absolute"></div>
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-[38px] inline-flex">
          <div className="w-[300px] h-[382.85px] relative">
            <div className="origin-top-left rotate-180 w-[52.91px] h-[37.80px] left-[556.86px] top-[301.11px] absolute"></div>
            <div className="w-[300px] h-[382.85px] left-0 top-0 absolute flex-col justify-start items-start gap-[51px] inline-flex">
              <div className=" justify-start items-start gap-[37px] inline-flex">
                <div className="w-[300px] h-[30.87px] relative"></div>
                <div className="w-[119.69px] h-[0px] origin-top-left rotate-90 border-4 border-pink-500"></div>
                <div className=" text-white text-xl font-normal font-Roboto">
                  "But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete."
                </div>
              </div>
              {/* <div className="relative">
                <div className="w-[50px] h-[70.58px] left-[149.92px] top-[28.98px] absolute">
                  <div className="left-0 top-0 absolute text-white text-2xl font-bold font-Roboto leading-[38.40px]">
                    Chester Feil
                  </div>
                  <div className="left-0 top-[41.58px] absolute text-purple-800 text-lg font-medium font-Roboto uppercase leading-[28.80px]">
                    customer
                  </div>
                </div>
                <div className="w-[125.99px] h-[125.99px] left-0 top-0 absolute">
                  <div className="w-[125.99px] h-[125.99px] left-0 top-0 absolute bg-stone-500 rounded-full" />
                  <img
                    className="w-[125.99px] h-[125.99px] left-[125.99px] top-[-0px] absolute origin-top-left rotate-180"
                    src="https://via.placeholder.com/126x126"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-[300px] h-[382.70px] relative">
            <div className="w-[300px] h-[382.70px] left-[250px] top-0 absolute flex-col justify-start items-start gap-[51px] inline-flex">
              <div className="w-[300px] justify-start items-start gap-9 inline-flex">
                <div className="w-[300px] h-[30.87px] relative"></div>
                <div className="w-[119.69px] h-[0px] origin-top-left rotate-90 border-4 border-pink-500"></div>
                <div className=" text-white text-xl font-normal font-Roboto ">
                  "But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete."
                </div>  
              </div>
              {/* <div className="relative">
                <div className="w-[158px] h-[70.58px] left-[149.92px] top-[28.98px] absolute">
                  <div className="left-0 top-0 absolute text-white text-2xl font-bold font-Roboto leading-[38.40px]">
                    Malina Willans
                  </div>
                  <div className="left-[-0px] top-[41.58px] absolute text-purple-800 text-lg font-medium font-Roboto uppercase leading-[28.80px]">
                    customer
                  </div>
                </div>
                <div className="w-[125.99px] h-[125.99px] left-0 top-0 absolute">
                  <div className="w-[125.99px] h-[125.99px] left-0 top-0 absolute bg-stone-500 rounded-full" />
                  <img
                    className="w-[125.99px] h-[125.99px] left-0 top-0 absolute"
                    src="https://via.placeholder.com/126x126"
                  />
                </div>
              </div> */}
            </div>
            <div className="origin-top-left rotate-180 w-[52.91px] h-[37.80px] left-[556.86px] top-[301.11px] absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
