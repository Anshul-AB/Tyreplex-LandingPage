import React from "react";


const BrandCard = ({src, brandname}) => {
  return (
    <div className="mx-5 drop-shadow-md rounded-md bg-white h-[120px] flex flex-col justify-between items-center">
      <img src={src} alt="Brand Logo" className="h-50 w-50" />
      <span className="text-base text-gray-400">{brandname}</span>
    </div>
  );
};

export default BrandCard;
