import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProjectCarousel.scss";
import { carouselData } from "./ProjectCarouselData";

const arrowImg = require("../../../../assets/arrow-right.png");

const ProjectCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.13,
      partialVisibilityGutter: 100, // Adjust this value to control the amount of next and previous images shown
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 80,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };

  return (
    <Carousel
      renderArrowsWhenDisabled={true}
      responsive={responsive}
      containerClass="carousel-container"
    >
      {carouselData.map((slide, index) => (
        <div
          key={index}
          className="slide-item"
          style={{ background: slide.backgroundColor }}
        >
          <img
            className="projectThumbnail"
            src={slide.imageUrl}
            alt={`Carousel ${index + 1}`}
          />
          <div className="contentWrapper">
            <h5>{slide.title}</h5>
            <div>{slide.content}</div>
            <a href={slide.link} target="_blank">
              Live link <img className="arrow" src={arrowImg} alt=""></img>
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
