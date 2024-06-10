import React, { useState, useRef, useEffect } from "react";

const GiveFeedback = () => {
  const textareaRef = useRef(null);
  const [height, setHeight] = useState("auto");
  const [comments, setComments] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (textareaRef.current) {
      setHeight("auto");
      setHeight(`${textareaRef.current.scrollHeight}px`);
    }
  }, [comments]);

  return (
    <div className="flex bg-black p-2 w-full justify-between items-end rounded-xl ">
      <div className="w-full">
        <textarea
          ref={textareaRef}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          style={{ height }}
          placeholder="Enter your feedback"
          className=" w-full bg-black text-white outline-none overflow-hidden text-lg pl-2"
          rows={1}
        />
      </div>
      <div className=" ">
        <button className="bg-blue-600 px-4 py-1 rounded-full text-lg ">
          Send
        </button>
      </div>
    </div>
  );
};

export default GiveFeedback;
