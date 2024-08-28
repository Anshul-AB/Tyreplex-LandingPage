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
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center space-x-5">
        {/* Filter products */}
        <div >

        <FilterProducts />
        </div>

        {/* Advanced filter products */}
        <div
          className="flex justify-center items-center space-x-3 border border-gray-400 rounded-md bg-white p-3 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={toggleAdvanceFilter}
          aria-expanded={isAdvancedOpen}
          aria-controls="advanced-filter"
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
      <div
        id="advanced-filter"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isAdvancedOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex justify-end items-center mt-3">
          <AdvanceFilter />
        </div>
      </div>
    </div>
  );
};

export default Filters;
