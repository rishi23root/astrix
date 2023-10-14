import React from "react";
import VLine1 from "../v-Line1";
import VLine2 from "../v-line2";

export default function Unlock() {
  return (
    <>

    {/* hidden md:block Version */}
    <div className="hidden md:block  w-[100%] border h-auto flex-col justify-start items-center gap-[236px] inline-flex bg-cover bg-no-repeat bg-center bg-unlock  bg-[url('../../public/unlock.png')]">
        <div className="flex-col justify-start items-center gap-[31px] flex">
          <div className="w-[90%] text-center mt-40">
            <span className="text-gray-100 text-5xl font-medium font-Roboto">
              Unlock the future of efficiency with our <br />
            </span>
            <span className="text-pink-500 text-5xl font-medium font-Roboto">
              {" "}
              AI Automation
            </span>
            <span className="text-gray-100 text-5xl font-medium font-Roboto">
              {" "}
              services
            </span>
          </div>
          <div className="w-[60%] text-center text-gray-100 text-xl font-light font-Roboto">
            Our AI Automation services harness the power of artificial
            intelligence to automate repetitive tasks, make data-driven
            decisions, and optimize workflows across your organization.
          </div>

          <div className=" h-[515px] justify-start items-center gap-[10px] inline-flex ">
            <div className="flex-col justify-start items-start gap-[60px] inline-flex ">
              <div className="flex-col justify-start items-center gap-5 flex flex flex-wrap justify-center ">
                <div className="w-[350px] text-center text-gray-100 text-xl font-semibold font-Roboto">
                  Data Analytics
                </div>
                <div className="w-[300px] text-justify text-gray-100 text-sm font-light font-Roboto">
                  Extract valuable insights from your data to drive data-driven
                  decision-making.
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="w-[300px] text-center text-gray-100 text-xl font-semibold font-Roboto">
                  Process Automation
                </div>
                <div className="w-[250px] text-justify text-gray-100 text-sm font-light font-Roboto">
                  Streamline workflows, reduce manual interventions, and boost
                  operational efficiency.
                </div>
              </div>
            </div>
           
            <VLine1 />
         
            <div className="flex-col justify-start items-center gap-[50px] inline-flex">
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="w-[300px] text-center text-gray-100 text-xl font-semibold font-Roboto">
                  Predictive Analytics
                </div>
                <div className="w-[250px] text-justify text-gray-100 text-sm font-light font-Roboto">
                  Anticipate trends and behaviors for proactive decision-making.
                  Stay ahead in the digital age with AI Automations. Embrace the
                  future of automation today.
                </div>
              </div>
              <div className="w-[220px] h-[60px] relative">
                <div className="w-[220px] h-[60px] left-0 top-0 absolute bg-pink-500 rounded-3xl">
                  <div className="p-5 absolute text-center inset-0 flex items-center justify-center text-gray-100 text-xl font-bold font-Roboto">
                    Click to integrate
                  </div>
                </div>
              </div>

              <VLine2 />
            </div>
            <div className="flex-col justify-start items-start gap-[60px] inline-flex">
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="w-[300px] text-center text-gray-100 text-xl font-semibold font-Roboto">
                  Chatbots and Virtual Assistants:{" "}
                </div>
                <div className="w-[250px] text-gray-100 text-sm font-light font-Roboto text-justify">
                  Enhance customer support and engagement with intelligent
                  chatbots.
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="w-[300px] text-center text-gray-100 text-xl font-semibold font-Roboto">
                  AI-Powered Marketing
                </div>
                <div className="w-[250px] text-gray-100 text-sm font-light font-Roboto text-justify">
                  Optimize marketing campaigns with AI-driven strategies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden w-full h-auto flex-col  justify-start items-center gap-[50px] inline-flex bg-cover bg-no-repeat bg-center bg-unlock  bg-[url('../../public/unlock.png')]">
        
        <div className="flex-col justify-start items-center gap-[100px] text-center mt-8">
          <span className="text-gray-100 text-3xl font-medium font-Roboto">
            Unlock the future of efficiency with our <br />
          </span>
          <span className="text-pink-500 text-4xl font-medium font-Roboto">
            AI Automation
          </span>
          <span className="text-gray-100 text-4xl font-medium font-Roboto">
            {" "}
            services
          </span>
          <div className="text-gray-100 text-xl font-light font-Roboto mt-10">
            Our AI Automation services harness the power of artificial
            intelligence to automate repetitive tasks, make data-driven
            decisions, and optimize workflows across your organization.
          </div>
        </div>

        
        <div className="flex-col justify-start items-center gap-5 inline-flex">
          <div className="w-[350px] text-center text-gray-100 text-xl font-semibold font-Roboto">
            Data Analytics
          </div>
          <div className="w-[300px] text-justify text-gray-100 text-sm font-light font-Roboto">
            Extract valuable insights from your data to drive data-driven
            decision-making.
          </div>

          <div className="w-[300px] text-center text-gray-100 text-xl font-semibold font-Roboto">
            Process Automation
          </div>
          <div className="w-[250px] text-justify text-gray-100 text-sm font-light font-Roboto">
            Streamline workflows, reduce manual interventions, and boost
            operational efficiency.
          </div>
        </div>

       
        <div className="flex-col justify-start items-center gap-5 inline-flex">
          <div className="w-[300px] text-center text-gray-100 text-xl font-semibold font-Roboto">
            Chatbots and Virtual Assistants:
          </div>
          <div className="w-[250px] text-gray-100 text-sm font-light font-Roboto text-justify">
            Enhance customer support and engagement with intelligent chatbots.
          </div>

          <div className="w-[300px] text-center text-gray-100 text-xl font-semibold font-Roboto">
            AI-Powered Marketing
          </div>
          <div className="w-[250px] text-gray-100 text-sm font-light font-Roboto text-justify">
            Optimize marketing campaigns with AI-driven strategies.
          </div>
        </div>

        
        <div className="flex-col justify-start items-center gap-5 inline-flex">
          <div className="w-[300px] text-center text-gray-100 text-xl font-semibold font-Roboto">
            Predictive Analytics
          </div>
          <div className="w-[250px] text-justify text-gray-100 text-sm font-light font-Roboto">
            Anticipate trends and behaviors for proactive decision-making. Stay
            ahead in the digital age with AI Automations. Embrace the future of
            automation today.
          </div>
          <div className="w-[220px] h-[60px] relative mb-10">
            <div className="w-[220px] h-[60px] left-0 top-0 absolute bg-pink-500 rounded-3xl">
              <div className="p-5 absolute text-center inset-0 flex items-center justify-center text-gray-100 text-xl font-bold font-Roboto">
                Click to integrate
              </div>
            </div>
          </div>
        </div>

        
        
      </div>
    </>
  );
}
