import React, {useState} from "react";

import "../styles/components/carousel.scss";
import chevronLeft from "../assets/icons/chevron_left.svg"
import chevronRight from "../assets/icons/chevron_right.svg"

const Carousel = ({dir, images}) => {

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <img onClick={prevSlide} className="arrow arrow-left" alt="previous slide" src={chevronLeft}/>
      {images.map((img, idx) => {
        return (
          <img
            src={dir+img}
            alt='alt text'
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <img onClick={nextSlide} className="arrow arrow-right" alt="next slide" src={chevronRight}/>
      <span className="indicators">
        {images.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel