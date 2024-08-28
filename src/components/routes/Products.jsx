import React from "react";
import ProductCard from "../common/ProductCard";
import { FaChevronDown } from "react-icons/fa";
import Filters from "../common/Filters";

const Products = () => {
  return (
    <div className="m-2 pb-10">
      <div className="font-semibold text-xl p-5">Tyres sold by this Dealer</div>

      {/* Filters */}
      <div className="mb-6">
        <Filters />
      </div>

      {/* Product card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
        <button className="p-3 bg-white rounded-md border border-gray-400 text-gray-600 flex justify-center items-center space-x-2 hover:bg-gray-100">
          <span>View More</span>
          <FaChevronDown />
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-start items-center space-x-3 mt-4 text-sm text-gray-400">
        <a href="#" className="hover:text-blue-500">
          Home
        </a>
        <span>/</span>
        <a href="#" className="hover:text-blue-500">
          Tyre Dealers
        </a>
        <span>/</span>
        <a href="#" className="hover:text-blue-500">
          Tyre Dealers Ghaziabad
        </a>
        <span>/</span>
        <span className="text-gray-600">
          SHREE HEMKUNT TYRES AND SERVICES
        </span>
      </div>
    </div>
  );
};

export default Products;
