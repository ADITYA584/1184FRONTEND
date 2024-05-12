import React from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";

function PlansCard(props) {
  return (
    <div className="hover:scale-[1.08] transition duration-300 w-[30%] rounded-3xl shadow-md border-1 flex flex-col p-8 justify-center gap-8 items-center text-lg  font-semibold">
      <div className="text-4xl font-bold text-center">
        <div className="flex gap-2 text-[1.4rem] font-semibold">
          <p>{props.planType}</p>
          {props.planType === "Innovator" ? (
            <div className="flex  items-center px-6 rounded-lg bg-[#FF4F0030] text-sm ">
              <ol className="list-disc">
                <li className="text-textHighlight ">Best value</li>
              </ol>
            </div>
          ) : (
            ""
          )}
        </div>
        <p>
          ${props.price}
          <span className="text-moneyHighlight">/m</span>
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-4  text-textHighlight">
          {props.feature.map((item, index) => (
            <li className="flex gap-4">
              <ArrowForward />
              <p className="text-primaryColor">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <button className=" hover:border-none hover:bg-textHighlight hover:text-white transition duration-300 w-full p-2 rounded-lg  border-2">
          <p>
            Get now <ArrowForward />
          </p>
        </button>
      </div>
    </div>
  );
}

export default PlansCard;
