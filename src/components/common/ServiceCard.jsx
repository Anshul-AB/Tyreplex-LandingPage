import React from "react";

const ServiceCard = ({ src, serviceTitle }) => {
  return (
    <div className="p-5 mx-5 bg-white drop-shadow-md rounded-md flex flex-col justify-between items-center h-[220px] w-full max-w-[300px]">
      <img src={src} alt={serviceTitle} className="h-24 w-auto object-contain mb-4" />
      <div className="text-xl font-semibold text-center mb-4">{serviceTitle}</div>
      <button className="p-3 px-8 rounded-md bg-primaryRed text-white cursor-pointer hover:bg-opacity-95">
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
