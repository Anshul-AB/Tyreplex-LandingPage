import React from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import profile from "../../assets/elegant 1.jpg";

const reviews = [
  {
    name: "John Doe",
    comment: "Great product! Highly recommended.",
    src: profile,
  },
  {
    name: "Jane Smith",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aperiam quae, totam eveniet ratione harum ea non esse eius at, placeat doloribus assumenda. Qui, ipsum eos! Sequi, quidem ipsa. Aliquid..",
    src: profile,
  },
  {
    name: "Alice Johnson",
    comment: "It was okay, but could be better.",
    src: profile,
  },
  {
    name: "David Johnson",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aperiam quae, totam eveniet ratione harum ea non esse eius at, placeat doloribus assumenda. Qui, ipsum eos! Sequi, quidem ipsa. Aliquid..",
    src: profile,
  },
];

const ReviewSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-full">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
