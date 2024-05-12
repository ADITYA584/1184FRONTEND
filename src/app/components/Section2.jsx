import React from "react";
import SectionCard from "./Cards/CardAIapp";
import DummyData from "../Data/DummyImages";

function Section2() {
  return (
    <div>
      <div className=" flex gap-6 justify-center items-center text-center text-xl font-semibold">
        <div className="w-[40%] flex flex-col gap-8 ">
          <h1 className="text-5xl font-bold  text-HeadingColor">
            Explore the power of <br />
            AI apps generation
          </h1>
          <p className="text-primaryColor">
            {`Unlock the full potential of your tech stack with Horizon's
            intuitive and Unlock the full potential of your tech stack with
            GenAI’s intuitive and`}
          </p>
        </div>
      </div>
      <div className="mt-32">
        {DummyData.map((item, index) => (
          <SectionCard key={index} index={index} img={item.src} />
        ))}
      </div>
    </div>
  );
}

export default Section2;
