import React, { useState } from "react";
import SelectInput from "../common/SelectInput";
import { FaSearch } from "react-icons/fa";

const AdvanceFilter = () => {
  const [productType, setProductType] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [variant, setVariant] = useState("");

  const productTypes = [
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

  const handleProductTypeChange = (e) => setProductType(e.target.value);
  const handleCompanyChange = (e) => setCompany(e.target.value);
  const handleModelChange = (e) => setModel(e.target.value);
  const handleVariantChange = (e) => setVariant(e.target.value);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex flex-wrap justify-center items-center space-x-3 mb-2">
        <SelectInput
          options={productTypes}
          name="productType"
          id="productType"
          value={productType}
          className="mb-2"
          defaultValue="Choose Type"
          onChange={handleProductTypeChange}
        />
        <SelectInput
          options={companyName}
          name="companyName"
          id="companyName"
          value={company}
          className="mb-2"
          defaultValue="Choose Company"
          onChange={handleCompanyChange}
        />
        <SelectInput
          options={carModels}
          name="carModels"
          id="carModels"
          value={model}
          className="mb-2"
          defaultValue="Choose Model"
          onChange={handleModelChange}
        />
        <SelectInput
          options={carModels}
          name="variants"
          id="variants"
          value={variant}
          className="mb-2"
          defaultValue="Choose Variant"
          onChange={handleVariantChange}
        />

        <div className="flex justify-center items-center w-full sm:w-auto mb-2">
          <button className="text-white text-lg bg-primaryRed p-3 rounded-md w-full sm:w-auto flex items-center justify-center">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvanceFilter;
