import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import OutsideClickHandler from 'react-outside-click-handler';

const SelectInput = ({ options, name, id, className, onChange, defaultValue }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // to filter options in search box
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // to handle when we click on option
  const handleSelect = (value) => {
    const fakeEvent = {
      target: {
        value: value,
        name: name,
        id: id,
      },
    };
    onChange(fakeEvent);
    setIsOpen(false);
    setSearchTerm("");  
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className={`relative ${className}`}>
        <div
          className="p-3 text-base bg-white border border-gray-300 shadow-sm cursor-pointer flex justify-between items-center space-x-7"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{defaultValue}</span>
          <FaCaretDown />
        </div>

        {isOpen && (
          <div className="absolute top-full bg-white border border-gray-300 shadow-md z-10">
            <input
              type="search"
              placeholder="Search..."
              className="p-1 m-1 border border-gray-300 rounded-md focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-blueHover hover:text-white cursor-pointer"
                    onClick={() => handleSelect(option.value)}
                  >
                    {option.label}
                  </li>
                ))
              ) : (
                <li className="p-3 text-gray-500">No options found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default SelectInput;
