import React from "react";
import MainCard from "../common/MainCard";
import ServiceCard from "../common/ServiceCard";
import wheel1 from "../../assets/wheel-alignment-bal.png";
import wheel2 from "../../assets/wheel-alignment.png";

const Services = () => {
  const servicesData = [
    { src: wheel1, serviveName: "Wheel Balancing" },
    { src: wheel2, serviveName: "Wheel Alignment" },
  ];

  return (
    <MainCard title={"Services offered by this dealer"}>
      <div className="flex space-x-4">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            src={service.src}
            serviceTitle={service.serviveName}
          />
        ))}
      </div>
    </MainCard>
  );
};

export default Services;
