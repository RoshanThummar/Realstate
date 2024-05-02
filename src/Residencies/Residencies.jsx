import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "../Residencies/Residencies.css";
import data from "../utils/slider.json";
import { sliderSettings } from "../common";

function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies </span>
        </div>
        <Swiper {...sliderSettings}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span stle={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.details}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button onClick={() => Swiper.slideprev}>&lt;</button>
      <button onClick={() => Swiper.slideprev}>&gt;</button>
    </div>
  );
};
