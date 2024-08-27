import React from "react";
import SelectInput from "../common/SelectInput";
import { FaSearch } from "react-icons/fa";

const AdvanceFilter = ({ name, id }) => {
  const productTypes = [
    // { value: "", label: "Filter By" },
    { value: "car", label: "Car" },
    { value: "bike", label: "Bike" },
    { value: "scooter", label: "Scooter" },
  ];
  const companyName = [
    { value: "bmw", label: "BMW" },
    { value: "audi", label: "Audi" },
    { value: "honda", label: "Honda" },
    { value: "toyota", label: "Toyota" },
    { value: "mercedes", label: "Mercedes-Benz" },
    { value: "ford", label: "Ford" },
    { value: "chevrolet", label: "Chevrolet" },
    { value: "tesla", label: "Tesla" },
    { value: "nissan", label: "Nissan" },
    { value: "volkswagen", label: "Volkswagen" },
  ];

  const carModels = [
    { value: "civic", label: "Civic" },
    { value: "accord", label: "Accord" },
    { value: "mustang", label: "Mustang" },
    { value: "camry", label: "Camry" },
    { value: "corolla", label: "Corolla" },
    { value: "modelS", label: "Model S" },
    { value: "model3", label: "Model 3" },
    { value: "charger", label: "Charger" },
    { value: "cherokee", label: "Cherokee" },
    { value: "altima", label: "Altima" },
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center items-center space-x-5 mb-2">
        <SelectInput
          options={productTypes}
          name="productType"
          id="productType"
          value={productTypes.value}
          className="mb-4"
          defaultValue="Choose Type"
          onChange={handleChange}
        />
        <SelectInput
          options={companyName}
          name="companyName"
          id="companyName"
          value={companyName.value}
          className="mb-4"
          defaultValue="Choose Company"
          onChange={handleChange}
        />
        <SelectInput
          options={carModels}
          name="carModels"
          id="carModels"
          value={carModels.value}
          className="mb-4"
          defaultValue="Choose Model"
          onChange={handleChange}
        />
        <SelectInput
          options={carModels}
          name="varients"
          id="varients"
          value={carModels.value}
          className="mb-4"
          defaultValue="Choose Varient"
          onChange={handleChange}
        />

       {/* Search button */}
      <div className="flex items-center justify-center h-12">
        <button className="text-white text-lg bg-primaryRed p-3 rounded-md">
          <FaSearch />
        </button>
      </div>
      </div>
    </>
  );
};

export default AdvanceFilter;
