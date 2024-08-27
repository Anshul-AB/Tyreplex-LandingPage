import React from "react";

const ServiceCard = ({ src, serviceTitle }) => {
  return (
    <div className="p-5 mx-5 bg-white drop-shadow-md rounded-md flex flex-col justify-between items-center h-[220px] w-[300px] ">
      <img src={src} alt="wheel alignment" className="h-100 w-100" />
      <div className="text-xl font-semibold">{serviceTitle}</div>
      <button className="p-3 px-8 rounded-md bg-primaryRed text-white cursor-pointer hover:bg-opacity-95">
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
