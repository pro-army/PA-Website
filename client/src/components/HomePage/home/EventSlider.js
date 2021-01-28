import React, {useRef, useEffect, useState} from "react";
import './EventSlider.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function EventSlider(props) {
  // const numOfSlides = props.numOfSlides;
  const numOfSlides = 7;
  const [slidesToShow, changeSlidesToShow] = useState(4.3);
  const [stopAt, changeStopAt] = useState("2.7");

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
      if(window.innerWidth <= 563){
        changeSlidesToShow(2.6);
        changeStopAt(4.4);
      }
      else{
        changeSlidesToShow(4.3);
        changeStopAt(2.7);
      }
  };

  const customSlider = useRef()
  const next = () => {
    customSlider.current.slickNext();
  }
  const previous = () => {
    customSlider.current.slickPrev();
  }

  const [slideNum, setSlideNum] = useState(0);

  var settings = {
    // adaptiveHeight: true,
    // variableWidth: true,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
      console.log(customSlider.current);
      setSlideNum(currentSlide)
    }
  };
  
  // const renderSlides = () =>
  //   props.content.map(cont => (
  //     <div className = "slider-element">
  //       <h3>{cont}</h3>
  //     </div>
  //   ));

  return (
    <div className = "event-slider">
      <button className="event-prev-button" disabled = {slideNum == 0} onClick={() => previous()}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <div className="eventApp">
        <Slider {...settings} ref = {customSlider}>
        
        <div className = "event">
          <h4>Webinar</h4>
          <div className = "event-content">
            <div className = "event-image"></div>
            <div className = "event-text">
              <h5>Topic of Webinar/Contest</h5>
              <div className = "event-date">
                1st January 2021
              </div>
            </div>
          </div>
        </div>
        
        <div className = "event">
          <h4>Webinar</h4>
          <div className = "event-content">
            <div className = "event-image"></div>
            <div className = "event-text">
              <h5>Topic of Webinar/Contest</h5>
              <div className = "event-date">
                1st January 2021
              </div>
            </div>
          </div>
        </div>
        
        <div className = "event">
          <h4>Webinar</h4>
          <div className = "event-content">
            <div className = "event-image"></div>
            <div className = "event-text">
              <h5>Topic of Webinar/Contest</h5>
              <div className = "event-date">
                1st January 2021
              </div>
            </div>
          </div>
        </div>
        
        <div className = "event">
          <h4>Webinar</h4>
          <div className = "event-content">
            <div className = "event-image"></div>
            <div className = "event-text">
              <h5>Topic of Webinar/Contest</h5>
              <div className = "event-date">
                1st January 2021
              </div>
            </div>
          </div>
        </div>
        
        <div className = "event">
          <h4>Webinar</h4>
          <div className = "event-content">
            <div className = "event-image"></div>
            <div className = "event-text">
              <h5>Topic of Webinar/Contest</h5>
              <div className = "event-date">
                1st January 2021
              </div>
            </div>
          </div>
        </div>
        
        <div className = "event">
          <h4>Webinar</h4>
          <div className = "event-content">
            <div className = "event-image"></div>
            <div className = "event-text">
              <h5>Topic of Webinar/Contest</h5>
              <div className = "event-date">
                1st January 2021
              </div>
            </div>
          </div>
        </div>
        
        <div className = "event">
          <h4>Webinar</h4>
          <div className = "event-content">
            <div className = "event-image"></div>
            <div className = "event-text">
              <h5>Topic of Webinar/Contest</h5>
              <div className = "event-date">
                1st January 2021
              </div>
            </div>
          </div>
        </div>
        
        </Slider>
        <br/>
      </div>
      <button className="event-next-button" disabled = {slideNum == stopAt} onClick={() => next()}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}