import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const GiveFeedback = ({ category, onFeedbackSubmitted }) => {
  const textareaRef = useRef(null);
  const [height, setHeight] = useState("auto");
  const [comments, setComments] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    if (textareaRef.current) {
      setHeight("auto");
      setHeight(`${textareaRef.current.scrollHeight}px`);
    }
  }, [comments]);

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userProfilePic = localStorage.getItem("userProfilePic");
    setName(userName);
    setProfile(userProfilePic);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const feedbackData = {
      profile,
      name,
      comment: comments,
    };
    console.log(feedbackData);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/${category}`,
        feedbackData
      );
      console.log("Feedback submitted:", response.data);
      setComments("");
      onFeedbackSubmitted();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-black p-2 w-full justify-between items-end rounded-xl border-blue-400 border-2 "
    >
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
      <div className="">
        <button
          className="bg-blue-600 px-4 py-1 rounded-full text-lg "
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default GiveFeedback;
