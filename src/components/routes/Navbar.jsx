import React from "react";
import TyreplexLogo from "../../assets/TP-logo.png";
import Navlink from "../common/Navlink";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
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
    <div className="flex justify-around items-center p-3 bg-primaryBg shadow-lg">
      {/* logo */}
      <div>
        <img src={TyreplexLogo} alt="logo" className="h-full w-full cursor-pointer" title="Tyreplex.com" />
      </div>

      {/* nav links */}
      <div className="flex space-x-5">
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

      {/* login  */}
      <div className="flex space-x-1 cursor-pointer" title="Login">
        <CgProfile className="text-2xl text-gray-500" />
        <div className="text-base font-semibold" >Login</div>
      </div>
    </div>
  );
};

export default Navbar;
