import React from "react";
import haveQuestion from "../../assets/haveQuestion-bg.webp";
import TPLogo from "../../assets/TP-logo.png";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="m-2 bg-white">
      {/* ask question */}
      <div className="bg-yellowBg grid grid-cols-2 py-3">
        {/* left */}
        <div className="p-5 space-y-2">
          <p className="text-xl font-semibold">Have a question about Tyres?</p>
          <p className="text-lg text-gray-500 ">
            Get an answer in 24 hours from our experts.
          </p>
          <input
            type="search"
            className="rounded-full drop-shadow-md shadow-yellowBg outline-none p-3 w-full"
            placeholder="Ask or search your question"
          />
        </div>

        {/* right */}
        <div className=" flex justify-center items-center">
          <img src={haveQuestion} alt="have Question" className="h-50 w-50" />
        </div>
      </div>

      {/* links */}
      <div className="grid grid-cols-4 p-5">
        {/* col-1 */}
        <div className="">
          <img src={TPLogo} alt="Tyreplex Logo" className=" h-50 w-50 ml-5" title="TyrePlex" />
          <div className="flex space-x-4 mt-5 ml-10">
            <LuFacebook className="text-3xl text-gray-500 cursor-pointer" />
            <FaInstagram className="text-3xl text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* col-2 */}
        <div className="flex flex-col justify-start items-start text-base text-gray-400 ">
          <a href="#" className="hover:text-blue-500">
            Who We Are
          </a>
          <a href="#" className="hover:text-blue-500">
            Are you a Tyre Dealer?
          </a>
        </div>

        {/* col-3 */}
        <div className="flex flex-col justify-start items-start text-base text-gray-400">
          <a href="#" className="hover:text-blue-500">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-500">
            Terms of use
          </a>
        </div>

        {/* col-4 */}
        <div className="flex flex-col justify-start items-start text-base text-gray-400">
          <a href="#" className="hover:text-blue-500">
            Contact Us
          </a>
          <a href="#" className="hover:text-blue-500">
            Career
          </a>
          <a href="#" className="hover:text-blue-500">
            Shipping & Return Policy
          </a>
        </div>
      </div>

      {/* copyright */}
      <div className="flex justify-center items-center border-t border-gray-300 p-5">
        <p className="text-gray-400 text-base">©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
