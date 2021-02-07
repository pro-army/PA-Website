// component to add feature section

import React, {useRef, useEffect, useState} from "react";
import './PaFeatures.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function PaFeatures(props) {

  // reference of feature slider
  const customSlider = useRef()

  // settings for feature slider
  var settings = {
    centerMode: true,
    variableWidth: true,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 548,
        settings:{
          variableWidth: true,
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id = "pa-features">

      {/* main feature slider */}
      <Slider {...settings} ref = {customSlider}>
        <div class = "feature">
          <div className = "inner-feature">
            <div class = "feature-img"></div>
            <div class = "feature-text">
                <h6>Feature Name</h6>
                <div class = "text">Some features of programmers army</div>
            </div>
          </div>
        </div>
          
        <div class = "feature">
          <div className = "inner-feature">
            <div class = "feature-img"></div>
            <div class = "feature-text">
                <h6>Feature Name</h6>
                <div class = "text">Some features of programmers army</div>
            </div>
          </div>
        </div>
          
        <div class = "feature">
          <div className = "inner-feature">
            <div class = "feature-img"></div>
            <div class = "feature-text">
                <h6>Feature Name</h6>
                <div class = "text">Some features of programmers army</div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}