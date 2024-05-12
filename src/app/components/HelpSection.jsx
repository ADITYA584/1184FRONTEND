"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function HelpSection() {
  const [arrowDirection, setArrowDirection] = useState(false);
  const [identifier, setIdentifier] = useState(null);

  const ClickHandler = (e) => {
    console.log(e.target.id);
    setIdentifier(e.target.id);
    setArrowDirection((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col justify-center gap-10 items-center p-24 bg-[#EDF6FF] mb-32">
      <div className="flex flex-col width-50% text-center ">
        <h1 className="text-HeadingColor text-4xl mb-5 font-bold">
          Need Help?
        </h1>
        <p>
          {`Don't worry, we got you. Here are some answers for`}
          <br /> your questions.
        </p>
      </div>
      <div className="flex flex-col w-[55%] gap-10 ">
        <div className="flex flex-col bg-white p-4 justify-between ">
          <div className="flex justify-between pb-4 ">
            <p>What is GenAI?</p>
            <ExpandMoreIcon
              id="0"
              className={`hover:cursor-pointer
                ${arrowDirection && identifier === "0" ? "rotate-180" : ""}
              `}
              onClick={(e) => {
                ClickHandler(e);
              }}
            />
          </div>
          <div>
            <p
              className={`${
                arrowDirection && identifier === "0"
                  ? "block border-t-2"
                  : "hidden"
              } `}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              esse doloribus voluptate eos eum sunt numquam dicta obcaecati fuga
              possimus ad dolor, corrupti provident ullam est aliquam eaque at
              necessitatibus laborum molestiae, aliquid laboriosam, facilis quia
              libero. Reiciendis qui vitae ea, fugiat suscipit eum officiis,
              commodi quae animi, a eveniet!
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white p-4 justify-between ">
          <div className="flex justify-between pb-4 ">
            <p>Lorem ipsum dolor sit amet?</p>
            <ExpandMoreIcon
              id="1"
              className={`hover:cursor-pointer
                ${arrowDirection && identifier === "1" ? "rotate-180" : ""}
              `}
              onClick={(e) => {
                ClickHandler(e);
              }}
            />
          </div>
          <div>
            <p
              className={`${
                arrowDirection && identifier === "1"
                  ? "block border-t-2"
                  : "hidden"
              } `}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              esse doloribus voluptate eos eum sunt numquam dicta obcaecati fuga
              possimus ad dolor, corrupti provident ullam est aliquam eaque at
              necessitatibus laborum molestiae, aliquid laboriosam, facilis quia
              libero. Reiciendis qui vitae ea, fugiat suscipit eum officiis,
              commodi quae animi, a eveniet!
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white p-4 justify-between ">
          <div className="flex justify-between pb-4 ">
            <p>Lorem, ipsum dolor?</p>
            <ExpandMoreIcon
              id="2"
              className={`hover:cursor-pointer
                ${arrowDirection && identifier === "2" ? "rotate-180" : ""}
              `}
              onClick={(e) => {
                ClickHandler(e);
              }}
            />
          </div>
          <div>
            <p
              className={`${
                arrowDirection && identifier === "2"
                  ? "block border-t-2"
                  : "hidden"
              } `}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              esse doloribus voluptate eos eum sunt numquam dicta obcaecati fuga
              possimus ad dolor, corrupti provident ullam est aliquam eaque at
              necessitatibus laborum molestiae, aliquid laboriosam, facilis quia
              libero. Reiciendis qui vitae ea, fugiat suscipit eum officiis,
              commodi quae animi, a eveniet!
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white p-4 justify-between ">
          <div className="flex justify-between pb-4 ">
            <p>Lorem ipsum dolor sit amet consectetur?</p>
            <ExpandMoreIcon
              id="3"
              className={`hover:cursor-pointer
                ${arrowDirection && identifier === "3" ? "rotate-180" : ""}
              `}
              onClick={(e) => {
                ClickHandler(e);
              }}
            />
          </div>
          <div>
            <p
              className={`${
                arrowDirection && identifier === "3"
                  ? "block border-t-2"
                  : "hidden"
              } `}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              esse doloribus voluptate eos eum sunt numquam dicta obcaecati fuga
              possimus ad dolor, corrupti provident ullam est aliquam eaque at
              necessitatibus laborum molestiae, aliquid laboriosam, facilis quia
              libero. Reiciendis qui vitae ea, fugiat suscipit eum officiis,
              commodi quae animi, a eveniet!
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white p-4 justify-between ">
          <div className="flex justify-between pb-4 ">
            <p>Lorem ipsum dolor sit?</p>
            <ExpandMoreIcon
              id="4"
              className={`hover:cursor-pointer
                ${arrowDirection && identifier === "4" ? "rotate-180" : ""}
              `}
              onClick={(e) => {
                ClickHandler(e);
              }}
            />
          </div>
          <div>
            <p
              className={`${
                arrowDirection && identifier === "4"
                  ? "block border-t-2"
                  : "hidden"
              } `}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              esse doloribus voluptate eos eum sunt numquam dicta obcaecati fuga
              possimus ad dolor, corrupti provident ullam est aliquam eaque at
              necessitatibus laborum molestiae, aliquid laboriosam, facilis quia
              libero. Reiciendis qui vitae ea, fugiat suscipit eum officiis,
              commodi quae animi, a eveniet!
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white p-4 justify-between ">
          <div className="flex justify-between pb-4 ">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing?</p>
            <ExpandMoreIcon
              id="5"
              className={`hover:cursor-pointer
                ${arrowDirection && identifier === "5" ? "rotate-180" : ""}
              `}
              onClick={(e) => {
                ClickHandler(e);
              }}
            />
          </div>
          <div>
            <p
              className={`${
                arrowDirection && identifier === "5"
                  ? "block border-t-2"
                  : "hidden"
              } `}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              esse doloribus voluptate eos eum sunt numquam dicta obcaecati fuga
              possimus ad dolor, corrupti provident ullam est aliquam eaque at
              necessitatibus laborum molestiae, aliquid laboriosam, facilis quia
              libero. Reiciendis qui vitae ea, fugiat suscipit eum officiis,
              commodi quae animi, a eveniet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
