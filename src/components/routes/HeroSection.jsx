import React from "react";
import { MdVerifiedUser } from "react-icons/md";
import photo1 from "../../assets/TP-photo1.jpg";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import ReviewSlider from "../common/ReviewSlider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const HeroSection = () => {
  return (
    <div className="bg-white p-5 border-2 shadow-md rounded-md m-2 ">
      {/* Address */}
      <div className="grid grid-cols-5 ">
        <div className="col-span-2">
          {/* heading */}
          <div className="flex justify-between items-start">
            <div className="text-[28px] font-medium">
              SHREE HEMKUNT TYRES AND SERVICES
            </div>
            <div className="flex justify-center items-center mt-2 space-x-1">
              <MdVerifiedUser className="text-green" />
              <span className="text-green">Verified</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex justify-start items-center space-x-2">
            <span className="bg-green text-white p-1 px-2 rounded-md text-xs">
              4.9
            </span>
            <div className="flex ">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <span className="hover:underline">2278 Reviews</span>
            <button className=" text-gray-400 rounded-md p-1 px-2 text-sm border border-gray-300 hover:bg-gray-300 hover:text-gray-600">
              Rate
            </button>
          </div>

          {/* Address */}
          <div className="space-y-2 py-5">
            {/* Address */}
            <div className="flex justify-start items-start text-gray-800 text-base space-x-3">
              <FaLocationDot className="text-xl text-gray-500" />
              <p>
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </p>
            </div>

            {/* Operating Hours */}
            <div className="flex justify-start items-center text-gray-500 text-base space-x-3">
              <IoMdTime className="text-xl" />
              <span>Open - Monday to Sunday - 10:00AM to 8:00PM</span>
            </div>
          </div>

          {/* Button */}
          <button className="text-primaryRed p-2 rounded-[4px] font-medium px-10 border border-primaryRed hover:bg-primaryRed hover:text-white transition-all duration-300 ease-smooth">
            Get Directions
          </button>
        </div>

        {/* Images */}
        <div className="col-span-3 grid grid-cols-2  p-5">
          <img
            src={photo1}
            alt="TyrePlex Photo 1 "
            className="rounded-md p-5 pt-0"
          />
          <img
            src={photo1}
            alt="TyrePlex Photo 1 "
            className="rounded-md p-5 pt-0"
          />
        </div>
      </div>

      {/* Reviews */}
      <div className="my-5">
        <div className="text-lg font-semibold mb-2">2278 Google Reviews</div>
        <ReviewSlider/>
      </div>
    </div>
  );
};

export default HeroSection;
