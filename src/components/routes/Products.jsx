import React from "react";
import ProductCard from "../common/ProductCard";
import { FaChevronDown } from "react-icons/fa";
import FilterProducts from "../common/FilterProducts";
import AdvanceFilter from "../common/AdvanceFilter";
import Filters from "../common/Filters";

const Products = () => {
  return (
    <div className=" m-2 pb-10">
      <div className="font-semibold text-xl p-5">Tyres sold by this Dealer</div>

      {/* Filters */}
      <div className="">
       <Filters/>
      </div>

      {/* Product card */}
      <div className="grid grid-cols-4 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      {/* View more button */}
      <div className="flex justify-center items-center m-4">
        <button className="p-3 bg-white rounded-md border border-gray-400 text-gray-400 flex justify-center items-center space-x-2">
          <span className="">View More</span>
          <FaChevronDown />
        </button>
      </div>

      {/* Links */}
      <div className=" flex justify-start items-center space-x-3 mt-2">
        <a href="#" className="text-base text-gray-400 hover:text-blue-500">
          Home
        </a>
        <span className="text-base text-gray-400">/</span>
        <a href="#" className="text-base text-gray-400 hover:text-blue-500">
          Tyre Dealers
        </a>
        <span className="text-base text-gray-400">/</span>
        <a href="#" className="text-base text-gray-400 hover:text-blue-500">
          Tyre Dealers Ghaziabad
        </a>
        <span className="text-base text-gray-400">/</span>
        <div className="text-base text-gray-400">
          SHREE HEMKUNT TYRES AND SERVICES
        </div>
      </div>
    </div>
  );
};

export default Products;
