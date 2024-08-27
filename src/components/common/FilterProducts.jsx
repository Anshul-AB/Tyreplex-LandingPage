import React from "react";
import SelectInput from "../common/SelectInput";

const FilterProducts = ({ name, id }) => {
  const productNames = [
    // { value: "", label: "Filter By" },
    { value: "apollo", label: "Apollo" },
    { value: "bedrock", label: "Bedrock" },
    { value: "birla", label: "Birla" },
  ];
  const priceFilter = [
    // { value: "", label: "Most Popular" },
    { value: "mostPopular", label: "Most Popular" },
    { value: "lowTohigh", label: "Low To High" },
    { value: "highToLow", label: "High To Low" },
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center items-center space-x-5 ">
        <SelectInput
          options={productNames}
          name="productName"
          id="productName"
          value={productNames.value}
          className="mb-4"
          defaultValue="Filter By"
          onChange={handleChange}
        />
        <SelectInput
          options={priceFilter}
          name="price"
          id="price"
          value={priceFilter.value}
          className="mb-4"
          defaultValue="Most Popular"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default FilterProducts;
