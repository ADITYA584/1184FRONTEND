import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/svgs/HeroImage.svg";
import ArrowForward from "@mui/icons-material/ArrowForward";

function HeroSection() {
  return (
    <div className="grid items-center grid-cols-2 gap-4 text-xl h-[85vh] ">
      <div className="flex flex-col justify-center gap-8 text-primaryColor p-4">
        <div>
          <h1 className="text-6xl font-bold">
            <span className="text-textHighlight">Transform Ideas</span>
            <br />
            into apps with AI
          </h1>
        </div>
        <div>
          <p className="leading-8">
            Step into a new era of strategic decision-making. Horizon empowers
            businesses in the marketing space with unparalleled
          </p>
        </div>
        <div>
          <button className="flex text-white p-3 rounded-lg items-center gap-2 bg-textHighlight hover:translate-y-1 tranisition duration-300">
            Get Started
            <ArrowForward />
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <div className=" p-2 rounded-3xl  bg-HeadingColor w-[550px]">
          <Image src={HeroImage} alt="HeroImage"></Image>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
