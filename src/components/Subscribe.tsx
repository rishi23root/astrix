import Image from "next/image";
import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subscriptionData = {
      email,
    };

    console.log(JSON.stringify(subscriptionData));

    setEmail("");
  };

  return (
    <div className="text-center hidden md:block mt-10">
      <h3 className="text-lg font-bold mb-4 text-pe">Subscribe</h3>
      <div className="flex items-center bg-white rounded-[14px] mt-5">
        <input
          className="flex w-48 h-10 bg-white border-white rounded-tl-[14px] rounded-bl-[14px] p-2 justify-center text-sm focus:outline-none"
          type="email"
          placeholder="Type email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <div
          className="w-10  h-10 bg-pk rounded-tr-[14px] rounded-br-[14px] ml-2 cursor-pointer flex items-center justify-center"
          onClick={handleFormSubmit}
        >
          <Image src="/svgs/send.svg" width={200} height={200} alt="" />
        </div>
      </div>
    </div>
  );
}
