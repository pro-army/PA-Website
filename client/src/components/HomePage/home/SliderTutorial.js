import React, {useRef, useEffect, useState} from "react";
import './SliderTutorial.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function SliderTutorial(props) {
  const [slidesToShow, changeSlidesToShow] = useState(5);
  const [sliderWidth, changeSliderWidth] = useState("21vw");

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if(window.innerWidth <= 759){
      changeSlidesToShow(4);
      changeSliderWidth("25vw");
      console.log(sliderWidth);
    }
    else{
      changeSlidesToShow(5);
      changeSliderWidth("21vw");
    }
  }

  const customSlider = useRef()
  const next = () => {
    customSlider.current.slickNext();
  }
  const previous = () => {
    customSlider.current.slickPrev();
  }

  var settings = {
    focusOnSelect: true,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
      console.log(customSlider.current);
      props.change(currentSlide);
    }
  };
  
  const renderSlides = () =>
    props.content.map(cont => (
      <div className = "slider-element">
        <h3>{cont}</h3>
      </div>
    ));

  return (
    <div class = "topics-slider" style = {{width: sliderWidth}}>
      <div className="newApp">
        <Slider {...settings} ref = {customSlider}>
          {
            renderSlides()
          }
        </Slider>
        <br/>
      </div>
      <button className="prev-button" onClick={() => previous()}>
        <i class="fas fa-caret-up"></i>
      </button>
      <button className="next-button" onClick={() => next()}>
        <i class="fas fa-sort-down"></i>
      </button>
    </div>
  );
}
