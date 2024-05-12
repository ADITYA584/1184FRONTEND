import React from "react";
import Image from "next/image";

function Section2Card(props) {
  return (
    <div
      className={`grid grid-cols-2 gap-8 my-32 text-xl font-semibold leading-10`}
    >
      <div className="flex flex-col gap-8">
        <div className="text-6xl font-bold text-HeadingColor">
          <p>
            <span className="text-textHighlight">Unleash</span> the power of AI
            with GenAI
          </p>
        </div>
        <div className="text-primaryColor">
          <p>
            {`Stay ahead of the curve with our Dynamic Trend Analysis feature.
            Unlock the full potential of your tech stack with Horizon's
            intuitive and Stay ahead of the curve with our Dynamic Trend
            Analysis feature. Unlock the full potential of your tech stack with
            Horizon's intuitive and`}
          </p>
        </div>
      </div>
      <div
        className={`flex justify-end ${
          props.index % 2 === 0 ? "order-first" : ""
        }`}
      >
        <Image className="h-[95%]" src={props.img} alt="Img" />
        {console.log(props.img)}
      </div>
    </div>
  );
}

export default Section2Card;
