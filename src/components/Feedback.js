import React, { useState } from "react";
import Comments from "./commnets.js";

const Feedback = () => {
  const [activeCategory, setActiveCategory] = useState("features");

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-col m-2 rounded-xl font-semibold overflow-hidden max-h-1vh relative w-2/3 bg-black">
      <div className="flex w-full">
        <button
          className={`flex-1 px-4 py-2 mr-1 rounded-t-xl ${
            activeCategory === "features"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleClick("features")}
        >
          Features
        </button>
        <button
          className={`flex-1 px-4 py-2 mr-1 rounded-t-xl ${
            activeCategory === "pricing"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleClick("pricing")}
        >
          Pricing
        </button>
        <button
          className={`flex-1 px-4 py-2 rounded-t-xl ${
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
    </div>
  );
};

export default Feedback;
