import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="fcb min-h-[55vh] my-10 justify-center md:gap-20 gap-8 md:justify-between  px-auto fc md:fr border w-[95%]">
      {/* text  */}
      <div className="flex flex-col justify-between h-full gap-8  md:max-w-[35em] w-full ">
        <div className="  flex-col justify-start items-start gap-[2rem] flex  ">
          <div className="text-[1.5rem] font-semibold md:text-[3rem]  bg-gradient-pp text-transparent bg-clip-text ">
            Build Your Professional
            <br />
            Resume with Simple Login
          </div>
          <div className="flex flex-col items-start justify-between p-4 ">
            <div className="flex items-start justify-start gap-1 ">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/svgs/arrow.svg"
                width={22}
                height={17}
              />
              <div className="text-[17px] font-medium text-pk">
                Find Your Starting Point, Craft Your Perfect Resume
              </div>
            </div>
            <div className="flex items-start justify-start gap-1 ">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/svgs/arrow.svg"
                width={22}
                height={17}
              />
              <div className="  text-[17px] font-medium">
                Master the Art of Resume Writing with Best Practices
              </div>
            </div>
            <div className="flex items-start justify-start gap-1 ">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/svgs/arrow.svg"
                width={22}
                height={17}
              />
              <div className=" text-zinc-400 text-[17px] font-medium">
                Unlock Success with Mentor-Recommended Templates
              </div>
            </div>
            <div className="flex items-start justify-start gap-1 ">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/svgs/arrow.svg"
                width={22}
                height={17}
              />
              <div className=" text-pe text-[17px] font-medium">
                Get Noticed by HR - Make Your Resume Irresistible
              </div>
            </div>
            <div className="flex items-start justify-start gap-1 ">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/svgs/arrow.svg"
                width={22}
                height={17}
              />
              <div className=" text-zinc-400 text-[17px] font-medium">
                Rise Above the Rest - Stand Out from Your Peers
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="p-4 px-16 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-500 border-stone-500 w-fit">
          <div className="text-center text-neutral-200 md::text-[2.3rem] font-medium">
            Build Your Resume
          </div>
        </div>
      </div>

      {/* images  */}
    </section>
  );
}

export default HeroSection;
