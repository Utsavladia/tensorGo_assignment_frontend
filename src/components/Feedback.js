import React, { useState } from "react";
import Comments from "./commnets.js";
import GiveFeedback from "./GiveFeedback.js";

const Feedback = () => {
  const [activeCategory, setActiveCategory] = useState("features");

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-col m-2 rounded-xl font-semibold overflow-hidden h-full relative ">
      <div>
        <button
          className={`px-16 py-2 mr-1 rounded-t-xl ${
            activeCategory === "features"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleClick("features")}
        >
          Features
        </button>
        <button
          className={`px-16 py-2 mr-1 rounded-t-xl ${
            activeCategory === "pricing"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleClick("pricing")}
        >
          Pricing
        </button>
        <button
          className={`px-16 py-2  rounded-t-xl ${
            activeCategory === "usability"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleClick("usability")}
        >
          Usability
        </button>
      </div>
      <Comments category={activeCategory} />
      <GiveFeedback />
    </div>
  );
};

export default Feedback;
