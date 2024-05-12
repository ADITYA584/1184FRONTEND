import React from "react";
import Sec3Card from "./Cards/Sec3Card";

function GridSection() {
  return (
    <div className="flex flex-col items-center">
      <div className=" w-[80%] flex items-center mb-32  text-center">
        <h1 className="text-6xl font-bold">
          {" "}
          <span className="text-textHighlight">Essentially,</span> everything
          you need to ship you first AI App
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <Sec3Card />
        <Sec3Card />
        <Sec3Card />
        <Sec3Card />
        <Sec3Card />
        <Sec3Card />
      </div>
    </div>
  );
}

export default GridSection;
