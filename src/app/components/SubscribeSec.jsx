import React from "react";

function SubscribeSec() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center mb-16">
      <div>
        <h1 className="text-6xl font-bold text-HeadingColor">
          Detect your next <span className="text-textHighlight">big move</span>{" "}
        </h1>
      </div>
      <div className="text-center font-semibold text-primaryColor">
        <p>
          Experience the synergy of your favorite tools working seamlessly{" "}
          <br />
          together, all powered by Horizon's cutting-edge AI analytics.
        </p>
      </div>
      <div className="flex justify-center gap-4 w-[50%] ">
        <input
          placeholder="yourmail@gmail.com"
          className=" w-[60%] rounded-lg bg-slate-200 text-primaryColor px-2  focus:outline-none"
          type="text "
        ></input>{" "}
        <button className="py-3 px-5 rounded-lg bg-textHighlight text-white">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default SubscribeSec;
