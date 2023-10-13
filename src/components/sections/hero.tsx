import React from "react";

function HeroSection() {
  return (
    <section className="items-center justify-between max-w-[100%]">
    <div className="justify-start items-end gap-[93px] flex">
      <div className="flex-col justify-start items-start gap-14 inline-flex">
        <div className="flex-col justify-start items-start gap-8 flex">
          <div className="w-full md:w-[674px] mx-auto text-center"> 
            <span className="text-white text-5xl font-bold font-Roboto tracking-wider">
              Your Complete <br />
            </span>
            <span className="text-pink-500 text-5xl font-bold font-Roboto tracking-wider">
              Digital Solutions
              <br />
            </span>
            <span className="text-white text-5xl font-bold font-Roboto tracking-wider">
              Partner
            </span>
          </div>
          <div className="w-full md:w-[697px] text-white text-[32px] font-normal font-Roboto leading-[47.42px] mx-auto text-center">
            Unleash Your Business Potential with Expert IT, Web, Mobile
            Development, Product Innovation, Social Media Branding, and Digital
            Marketing Strategies
          </div>
        </div>
        <div className="justify-start items-center gap-[38px] inline-flex">
          <div className="w-[251px] h-[88px] relative">
            <div className="w-[251px] h-[88px] left-0 top-0 absolute rounded-[14px] border-2 border-white" />
            <div className="left-[34px] top-[25px] absolute text-center text-white text-[32px] font-bold font-Roboto">
              Consult Now
            </div>
          </div>
          <div className="text-center text-pink-500 text-[32px] font-bold font-Roboto">
            Download Brochure
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-2.5 md:flex">
        <div className="w-[500px] h-[630px] relative">
          <div className="w-[500px] h-[630px] left-0 top-0 absolute bg-stone-500" />
          {/* <img
            className="w-[1280px] h-[876.91px] left-[-44px] top-[-130px] absolute"
            src="https://via.placeholder.com/1280x877"
          /> */}
          {/* <div className="w-[1191px] h-[793px] left-[-440px] top-[-21px] absolute" />
          <div className="w-[946px] left-[1030px] top-[772px] absolute text-center">
            <span className="text-pink-500 text-[47px] font-medium font-Roboto leading-[74.67px]">
              Trusted
            </span>
            <span className="text-gray-100 text-[47px] font-medium font-Roboto leading-[74.67px]">
              {" "}
              by Top Brands: Astrix - Your Trusted Partner for Innovation and
              Excellence
            </span>
          </div> */}
        </div>
        {/* <div className="justify-start items-center gap-[19px] flex">
          <div className="w-[203.56px] h-[84px] relative">
            <div className="w-[69.56px] h-20 left-[134px] top-0 absolute">
              <img
                className="w-[69.56px] h-20 left-0 top-0 absolute"
                src="https://via.placeholder.com/70x80"
              />
              <img
                className="w-[86px] h-[82px] left-[-16px] top-0 absolute"
                src="https://via.placeholder.com/86x82"
              />
            </div>
            <div className="w-[69.56px] h-20 left-[72.44px] top-[2px] absolute">
              <img
                className="w-[69.56px] h-20 left-0 top-0 absolute"
                src="https://via.placeholder.com/70x80"
              />
              <img
                className="w-[102px] h-[153px] left-[-25.44px] top-[-10px] absolute"
                src="https://via.placeholder.com/102x153"
              />
            </div>
            <div className="w-20 h-20 left-0 top-[4px] absolute">
              <div className="w-20 h-20 left-0 top-0 absolute bg-stone-500 rounded-full" />
              <img
                className="w-[84px] h-[126px] left-[-2px] top-[-7px] absolute"
                src="https://via.placeholder.com/84x126"
              />
            </div>
          </div>
          <div className="relative">
            <div className="left-0 top-0 absolute text-white text-xl font-bold font-['Plus Jakarta Sans'] leading-7">
              49+ Businesses
            </div>
            <div className="left-[1px] top-[30px] absolute text-stone-300 text-base font-medium font-['Plus Jakarta Sans'] leading-snug">
              Boosted their business with us
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-[50px] inline-flex">
          <div>
            <span className="text-white text-[40px] font-semibold font-['Poppins'] leading-[88px]">
              99+
              <br />
            </span>
            <span className="text-white text-xs font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
              Project Complete
            </span>
          </div>
          <div>
            <span className="text-white text-[40px] font-semibold font-['Poppins'] leading-[88px]">
              30+
              <br />
            </span>
            <span className="text-white text-xs font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
              Happy Client
            </span>
          </div>
          <div>
            <span className="text-white text-[40px] font-semibold font-['Poppins'] leading-[88px]">
              2+
              <br />
            </span>
            <span className="text-white text-xs font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
              Years Experience
            </span>
          </div>
        </div> */}
      </div>
    </div>
    </section>

  );
}

export default HeroSection;
