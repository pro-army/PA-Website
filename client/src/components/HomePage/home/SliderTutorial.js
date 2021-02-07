// component that contains slider of all domains

import React, {useRef, useEffect, useState} from "react";
import './SliderTutorial.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderTutorial(props) {
  // variable that stores slides to show
  const [slidesToShow, changeSlidesToShow] = useState(5);

  // variable that stores width of slider. This variable changes with browser size
  const [sliderWidth, changeSliderWidth] = useState("21vw");

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  // function that changes slides to slow and slider width with browser size
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

  // setting for slider
  var settings = {
    focusOnSelect: true,
    infinite: true,
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
  
  // function that creates html content from domains object array value
  const renderSlides = () =>
    props.content.map((cont, index) => (
      <div key = {index} className = "slider-element">
        <h3>{cont}</h3>
      </div>
    )
    );

  return (
    <div class = "topics-slider" style = {{width: sliderWidth}}>
      <div className="newApp">

        {/* main slider that shows all domains */}
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