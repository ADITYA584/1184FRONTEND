import React from "react";
import Image from "next/image";
import GenAILogo from "../../../public/svgs/GenAILogo.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Navbar() {
  return (
    <div className="flex text-lg border-2 justify-around items-center text-primaryColor p-6">
      <div className="flex justify-center gap-1 font-bold">
        <Image src={GenAILogo} alt="Logo"></Image>
        <p className="text-2xl">GenAI</p>
      </div>
      <div>
        <ul className="flex gap-6 font-semibold hover:cursor-pointer ">
          <li className="hover:text-textHighlight">Feature</li>
          <li className="hover:text-textHighlight">Product</li>
          <li className="hover:text-textHighlight">Testimonial</li>
          <li className="hover:text-textHighlight">FAQ</li>
        </ul>
      </div>
      <div className="flex text-white ">
        <button className="flex p-3 rounded-lg items-center gap-2 bg-textHighlight hover:translate-y-1 tranisition duration-300">
          <p className="font-semibold">Get Started</p>
          <ArrowForwardIcon className="text-md" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
