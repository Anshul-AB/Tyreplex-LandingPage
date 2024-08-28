import React from "react";
import haveQuestion from "../../assets/haveQuestion-bg.webp";
import TPLogo from "../../assets/TP-logo.png";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white m-2">
      {/* Ask Question Section */}
      <div className="bg-yellowBg grid grid-cols-1 md:grid-cols-2 py-6">
        {/* Left Column */}
        <div className="p-5 space-y-2">
          <p className="text-xl font-semibold">Have a question about Tyres?</p>
          <p className="text-lg text-gray-500">
            Get an answer in 24 hours from our experts.
          </p>
          <input
            type="search"
            className="rounded-full drop-shadow-md shadow-yellowBg outline-none p-3 w-full"
            placeholder="Ask or search your question"
          />
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center">
          <img src={haveQuestion} alt="have Question" className="h-28 w-32" />
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-5">
        {/* Column 1 */}
        <div className="flex flex-col items-start space-y-4">
          <img src={TPLogo} alt="Tyreplex Logo" className="h-10 w-28" title="TyrePlex" />
          <div className="flex space-x-4 mt-4">
            <LuFacebook className="text-2xl text-gray-500 cursor-pointer" />
            <FaInstagram className="text-2xl text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2 text-base text-gray-400">
          <a href="#" className="hover:text-blue-500">Who We Are</a>
          <a href="#" className="hover:text-blue-500">Are you a Tyre Dealer?</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-2 text-base text-gray-400">
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500">Terms of Use</a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col space-y-2 text-base text-gray-400">
          <a href="#" className="hover:text-blue-500">Contact Us</a>
          <a href="#" className="hover:text-blue-500">Career</a>
          <a href="#" className="hover:text-blue-500">Shipping & Return Policy</a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center items-center border-t border-gray-300 py-4 px-2">
        <p className="text-gray-400 text-base">
          ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
