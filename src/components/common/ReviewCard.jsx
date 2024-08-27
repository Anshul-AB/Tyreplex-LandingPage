import React from "react";
import placeholderProfile from '../../assets/TP-placeholderimage.png'

const ReviewCard = ({ review }) => {
  return (
    <div className="p-5 border border-gray-400 shadow-md rounded-md h-[150px] mx-2">
      <div className="flex justify-start items-center space-x-3">
        <img
         src={review.src ? review.src : placeholderProfile}
          alt="Profile Picture"
          className="rounded-full w-10 h-10 object-cover"
        />
        <div className="text-gray-700 font-semibold">{review.name}</div>
      </div>
      <div className="mt-4">
        <p
          className="text-gray-600 italic overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2, 
            WebkitBoxOrient: "vertical",
          }}
        >
          "{review.comment}"
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
