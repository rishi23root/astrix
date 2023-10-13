import React from "react";

export default function Unlock() {
  return (
    
    <div className="w-[100%] h-auto flex-col justify-start items-center gap-[150px] inline-flex">
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
          intelligence to automate repetitive tasks, make data-driven decisions,
          and optimize workflows across your organization.
        </div>
      </div>
      <div className=" text-center justify-center">
        <div className="items-center gap-0 inline-flex justify-center ">
          <div className="flex-col justify-start items-start gap-[100px] inline-flex mx-auto ">
            <div className="flex-col justify-start items-center gap-5 flex mx-auto ">
              <div className=" w-[300px] text-center text-gray-100 text-3xl font-semibold font-Roboto">
                Data Analytics
              </div>
              <div className=" w-[200px] text-justify text-gray-100 text-xl font-light font-Roboto">
                Extract valuable insights from your data to drive data-driven
                decision-making.
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-5 flex mx-auto">
              <div className="w-[300px] text-center text-gray-100 text-3xl font-semibold font-Roboto">
                Process Automation
              </div>
              <div className="w-[200px] text-justify text-gray-100 text-xl font-light font-Roboto">
                Streamline workflows, reduce manual interventions, and boost
                operational efficiency.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-[125px] inline-flex mx-auto">
            <div className="flex-col justify-start items-center gap-5 flex mx-auto">
              <div className="w-[300px] text-center text-gray-100 text-3xl font-semibold font-Roboto">
                Predictive Analytics
              </div>
              <div className="w-[200px] text-justify text-gray-100 text-xl font-light font-Roboto">
                Anticipate trends and behaviors for proactive decision-making.
                Stay ahead in the digital age with AI Automations. Embrace the
                future of automation today.
              </div>
            </div>
            <div className="w-[385px] h-[88px] relative mx-auto">
              <div className="w-[385px] h-[88px] left-0 top-0 absolute bg-pink-500 rounded-3xl" />
              <div className="left-[70px] top-[25px] absolute text-center text-gray-100 text-3xl font-bold font-Roboto">
                Click to integrate
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[100px] inline-flex mx-auto">
            <div className="flex-col justify-start items-center gap-5 flex mx-auto">
              <div className="w-[300px] text-center text-gray-100 text-3xl font-semibold font-Roboto">
                Chatbots and Virtual Assistants:{" "}
              </div>
              <div className="w-[200px] text-gray-100 text-2xl font-light font-Roboto">
                Enhance customer support and engagement with intelligent
                chatbots.
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-5 flex mx-auto">
              <div className="w-[300px] text-center text-gray-100 text-3xl font-semibold font-Roboto">
                AI-Powered Marketing
              </div>
              <div className="w-[200px] text-gray-100 text-2xl font-light font-Roboto">
                Optimize marketing campaigns with AI-driven strategies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
