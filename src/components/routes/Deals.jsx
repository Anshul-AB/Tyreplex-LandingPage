import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mrf from "../../assets/tp-mrf.png";
import ceat from "../../assets/tp-ceat.png";
import apollo from "../../assets/tp-apollo.png";
import goodyear from "../../assets/tp-goodyear.png";
import bridgestone from "../../assets/tp-bridgestone.png";
import jk from "../../assets/tp-jk.png";
import BrandCard from "../common/BrandCard";
import Slider from "react-slick";
import MainCard from "../common/MainCard";

const Deals = () => {
  const brandData = [
    { src: mrf, brandname: "MRF" },
    { src: ceat, brandname: "CEAT" },
    { src: apollo, brandname: "APOLLO" },
    { src: goodyear, brandname: "GOODYEAR" },
    { src: bridgestone, brandname: "BRIDGESTONE" },
    { src: jk, brandname: "JK Tyres" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <MainCard title={"Deals In"}>
      <Slider {...settings}>
        {brandData.map((brand, index) => (
          <BrandCard key={index} src={brand.src} brandname={brand.brandname} />
        ))}
      </Slider>
    </MainCard>
  );
};

export default Deals;
