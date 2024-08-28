import React, { useState } from "react";

const Navlink = ({ list = [], navLabel, listHeading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block md:inline-block">
      {/* Navlink Label */}
      <div
        className="cursor-pointer font-semibold text-base transition-all duration-300 ease-smooth pb-[2px] border-b-2 border-transparent hover:border-primaryRed"
        onClick={toggleDropdown}
      >
        {navLabel}
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full md:w-max bg-white z-50 border-2 border-gray-200 rounded-md shadow-lg mt-1 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {listHeading && (
          <div className="text-gray-500 text-sm flex justify-center items-center p-2 px-5">
            {listHeading}
          </div>
        )}
        <ul>
          {list &&
            list.map((item, index) => (
              <li
                key={index}
                className="list-none hover:bg-gray-200 p-2 px-7 cursor-pointer font-semibold"
                onClick={() => setIsOpen(false)} 
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navlink;
