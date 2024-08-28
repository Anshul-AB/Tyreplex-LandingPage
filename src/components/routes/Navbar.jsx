import React, { useState } from "react";
import TyreplexLogo from "../../assets/TP-logo.png";
import Navlink from "../common/Navlink";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const carTyreBrands = [
    "MRF Tyres",
    "CEAT Tyres",
    "Goodyear Tyres",
    "Apollo Tyres",
    "Bridgestone Tyres",
    "JK Tyres",
    "Michelin Tyres",
    "All car Tyres",
  ];

  const bikeTyresBrands = [
    "MRF Tyres",
    "CEAT Tyres",
    "Apollo Tyres",
    "Bridgestone Tyres",
    "JK Tyres",
    "Michelin Tyres",
    "Pirelli Tyres",
    "All bike Tyres",
  ];

  const Accessories = ["Accessories", "Batteries", "Alloys Wheels"];

  const more = [
    "CashBack Offer",
    "Find Tyre Dealers",
    "Compare Tyres",
    "Are you a Tyre Dealer",
    "Wheel balancing",
    "Wheel Alignment",
  ];

  return (
    <div className="bg-primaryBg shadow-lg relative">
      <div className="container mx-auto p-3 flex items-center justify-between">
        {/* logo */}
        <div className="">
          <img src={TyreplexLogo} alt="logo" className="h-10 w-14cursor-pointer" title="Tyreplex.com" />
        </div>

        {/* Toggle Button for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-gray-500 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* nav links */}
        <div className="hidden lg:flex lg:flex-row lg:space-x-5 lg:items-center w-full lg:w-auto">
          <Navlink
            navLabel={"Car Tyres"}
            listHeading={"Popular Car Tyre Brands"}
            list={carTyreBrands}
          />
          <Navlink
            navLabel={"Bike Tyres"}
            listHeading={"Popular Bike Tyre Brands"}
            list={bikeTyresBrands}
          />
          <Navlink navLabel={"Tyre Pressure"} />
          <Navlink
            navLabel={"Commercial Tyres"}
            list={["All Commercial Tyres"]}
          />
          <Navlink navLabel={"Accessories"} list={Accessories} />
          <Navlink navLabel={"More"} list={more} />
        </div>

        {/* login */}
        <div className="flex items-center space-x-2 cursor-pointer" title="Login">
          <CgProfile className="text-2xl text-gray-500" />
          <div className="text-base font-semibold">Login</div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-primaryBg shadow-lg transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-500 text-2xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="p-5 space-y-4 flex flex-col">
          <Navlink
            navLabel={"Car Tyres"}
            listHeading={"Popular Car Tyre Brands"}
            list={carTyreBrands}
          />
          <Navlink
            navLabel={"Bike Tyres"}
            listHeading={"Popular Bike Tyre Brands"}
            list={bikeTyresBrands}
          />
          <Navlink navLabel={"Tyre Pressure"} />
          <Navlink
            navLabel={"Commercial Tyres"}
            list={["All Commercial Tyres"]}
          />
          <Navlink navLabel={"Accessories"} list={Accessories} />
          <Navlink navLabel={"More"} list={more} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
