import React from "react";
import Sec4Card from "./Cards/Sec4Card";
import PlansData from "../Data/Section4Data";
import CheckIcon from "@mui/icons-material/Check";

function Plans() {
  return (
    <div className="my-32 flex flex-col gap-32 justify-center items-center">
      <div className="text-6xl font-bold text-center">
        <p>
          Start making <span className="text-textHighlight">smarter</span>{" "}
          decisions,
          <br />
          Choose a plan
        </p>
      </div>
      <div className="flex p-10 justify-around gap-10  w-full">
        {PlansData.map((item, index) => (
          <Sec4Card
            key={index}
            planType={item.planType}
            price={item.price}
            feature={item.list}
          />
        ))}
      </div>
      <div className="w-full text-lg font-semibold text-textHighlight">
        <ol className="flex justify-center gap-32">
          <li>
            <CheckIcon className="bg-textHighlight rounded-full text-white mr-2" />
            <span>Free trial</span>
          </li>
          <li>
            <CheckIcon className="bg-textHighlight rounded-full text-white mr-2" />{" "}
            <span> Cancel anytime</span>
          </li>
          <li>
            <CheckIcon className="bg-textHighlight rounded-full text-white mr-2" />
            <span> Support included</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Plans;
