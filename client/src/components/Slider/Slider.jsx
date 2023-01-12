import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

const Slider = () => {
  const data = [
    "https://www.ukmodels.co.uk/wp-content/uploads/2016/06/shutterstock_297747434.jpg",
    "https://media.vanityfair.com/photos/57d32a5da9f841aa372f5521/master/pass/jordan-barrett-october-2016-it-boy.jpg",
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/FDDD/production/_106298946_kha_banh.png",
    "https://i.ex-cdn.com/nhadautu.vn/files/content/2019/04/02/kha-banh-pega-1702.jpg",
  ];
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 20000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <div className="slider">
      <Slick {...settings}>
        {data.map((i) => (
          <img src={i} alt="null" key={i} />
        ))}
      </Slick>
    </div>
  );
};

export default Slider;
