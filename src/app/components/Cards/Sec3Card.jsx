import React from "react";
import Image from "next/image";
import AILogo from "../../../../public/svgs/AILogo.svg";

function Sec3Card() {
  return (
    <div className="flex flex-col justify-around rounded-lg p-6 shadow-lg h-[300px]">
      <div>
        <Image
          className=" bg-[#FF4F0020] p-3 rounded-lg w-16"
          src={AILogo}
          alt="AILogo"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Quality Apps</h1>
        <p className="text-xl font-semibold">
          Identify strengths, capitalize on weaknesses, and chart a course for
          unparalleled success.
        </p>
      </div>
    </div>
  );
}

export default Sec3Card;
