import React, { useState, useEffect } from "react";
import axios from "axios";
import GiveFeedback from "./GiveFeedback.js";

const Commnets = ({ category }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/${category}`);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [category]);

  return (
    <div className="h-full w-full max-h-[90vh] min-h[90vh] flex flex-col justify-between ">
      <div className=" w-full max-h-[80vh] overflow-auto bg-black mb-1 p-4 justify-start align-top flex flex-col ">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="mb-4 p-2 flex items-center justify-start  text-white rounded"
            >
              <img
                src={comment.profile}
                alt={comment.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex flex-col items-start">
                <h4 className="text-lg font-semibold">
                  {comment.name}{" "}
                  <span className="text-sm text-gray-400 ml-6">
                    {new Date(comment.createdAt).toLocaleString()}
                  </span>
                </h4>

                <p className=" text-base font-normal">{comment.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No comments yet.</p>
        )}
      </div>
      <GiveFeedback category={category} onFeedbackSubmitted={fetchComments} />
    </div>
  );
};

export default Commnets;
