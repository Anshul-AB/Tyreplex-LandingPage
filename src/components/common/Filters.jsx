import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FilterProducts from "./FilterProducts";
import AdvanceFilter from "./AdvanceFilter";

const Filters = () => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const toggleAdvanceFilter = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  return (
    <div className="mb-2">
      <div className="flex justify-end items-center space-x-5">
        {/* filter products */}
        <FilterProducts />

        {/* Advanced filter products */}
        <div
          className="flex justify-center items-center space-x-5 border border-gray-400 rounded-md bg-white p-3 cursor-pointer"
          onClick={toggleAdvanceFilter}
        >
          <span className="text-blue-400 text-lg">Advanced</span>
          {isAdvancedOpen ? (
            <FaChevronUp className="text-gray-500 text-lg" />
          ) : (
            <FaChevronDown className="text-gray-500 text-lg" />
          )}
        </div>
      </div>

      {/* Slide-down AdvanceFilter */}
      {isAdvancedOpen && (
        <div className="flex justify-end items-center transition-all duration-300 ease-in-out">
          <AdvanceFilter />
        </div>
      )}
    </div>
  );
};

export default Filters;
