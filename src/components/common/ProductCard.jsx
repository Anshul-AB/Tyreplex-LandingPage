import React from "react";
import { FaStar } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import tireImage from "../../assets/tire_image.png";
import apollo from "../../assets/tp-apollo.png";

const ProductCard = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-5 relative hover:drop-shadow-lg overflow-hidden">
      {/* warranty sign */}
      <div className="absolute top-0 right-0 bg-yellow-100 flex justify-center items-center space-x-1 p-1">
        <MdVerifiedUser className="" />
        <span className="">5 year warranty</span>
      </div>

      {/* left section */}
      <div className="space-y-3">
        <img src={apollo} alt="Apollo tyres" className="h-8 w-20" />
        <div className="">AMAZER 4G LIFE</div>
        <div className="text-sm text-gray-500">145/80 R12</div>
        {/* rating and price  */}
        <div className="">
          <div className="flex items-center space-x-2">
            <span className="bg-green text-white p-1 px-2 rounded-md text-xs flex items-center">
              <FaStar className="mr-1" />4
            </span>
            <span className="text-xs text-gray-400">321 reviews</span>
          </div>
          <span className="text-lg">₹ 3,136</span>
        </div>

        <div className="text-xs text-gray-400">Offer available</div>
        <div className="text-xs text-gray-400">Tube Type</div>
      </div>

      {/* right section */}
      <div className="absolute -bottom-10 -right-20 h-52 w-50 overflow-hidden">
        <img
          src={tireImage}
          alt="Tire"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default ProductCard;
