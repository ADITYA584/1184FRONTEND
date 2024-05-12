import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Footer() {
  return (
    <div className="p-28 flex flex-col gap-10 bg-HeadingColor text-white">
      <div className="flex justify-between border-b-[1px] pb-10">
        <h1 className="text-4xl">
          Get your AI apps built with
          <br /> blazing speed.
        </h1>
        <div>
          <button className="flex p-3 rounded-lg items-center gap-2 bg-textHighlight hover:translate-y-1 tranisition duration-300">
            <p className="font-semibold">Get Started</p>
            <ArrowForwardIcon className="text-md" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2  border-b-1 gap-20 font-semibold">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl">GenAI</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            eveniet fugiat explicabo quo magnam? Ipsam quas odit vitae est
            adipisci!
          </p>
          <p>All rights reserved</p>
        </div>
        <div className="grid grid-cols-3  text-[#B0B2B8]">
          <div>
            <ul className="flex flex-col gap-4">
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Story</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li>Company</li>
              <li>Product</li>
              <li>Press</li>
              <li>More</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li>Press</li>
              <li>Career</li>
              <li>News Letter</li>
              <li>More</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
