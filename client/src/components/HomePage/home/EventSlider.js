// component that contains slider of all events

import React, {useRef, useEffect, useState} from "react";
import './EventSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

export default function EventSlider(props) {
  // variable that stores maximum number of slides to show at a time.
  // This is changed with the change of browser size
  const [slidesToShow, changeSlidesToShow] = useState(4.3);

  // variable that helps slider to stop at end point 
  const [stopAt, changeStopAt] = useState("2.7");

  // object array that will store information of all webinars and contests
  const [data, changeData] = useState([])

  // variable that stores index of current slide
  const [slideNum, setSlideNum] = useState(0);

  // fetching data of webinar and contest and stores in data array
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    var url = "https://programmers-army-dev-backend.herokuapp.com/api/webinar/all"
    axios.get(url)
    .then(res => {
      changeData([])
      Object.keys(res.data.webinar).forEach(key => changeData(arr => [...arr, res.data.webinar[key]]))
      url = "https://programmers-army-dev-backend.herokuapp.com/api/contest/all"
      axios.get(url)
      .then(res => {
        Object.keys(res.data.contest).forEach(key => changeData(arr => [...arr, res.data.contest[key]]))
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  // sorting event of the basis of date
  useEffect(() => {
    data.sort(function(a, b){
      var date1 = "", date2 = ""

      if(a["date"] !== undefined){
        date1 = a["date"].substring(0, 10)
        date1 = date1.split("-")
        date1 = new Date(date1[0], date1[1] - 1, date1[2])
      }else{
        date1 = a["contestdate"].substring(0, 10)
        date1 = date1.split("-")
        date1 = new Date(date1[0], date1[1] - 1, date1[2])
      }
        
      if(b["date"] !== undefined){
        date2 = b["date"].substring(0, 10)
        date2 = date2.split("-")
        date2 = new Date(date2[0], date2[1] - 1, date2[2])
      }else{
        date2 = b["contestdate"].substring(0, 10)
        date2 = date2.split("-")
        date2 = new Date(date2[0], date2[1] - 1, date2[2])
      }

      return date2 - date1
    })
  }, [data])

  // function that changes slides to show and stop at variable with change in browser size
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

  // reference of slider
  const customSlider = useRef()
  const next = () => {
    customSlider.current.slickNext();
  }
  const previous = () => {
    customSlider.current.slickPrev();
  }

  var settings = {
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    afterChange: function(currentSlide) {
      setSlideNum(currentSlide)
    }
  };  

  // function to create html content from webinars and contest data
  const allEvents = () => {
    var events = []
    for(var i = 0; i<data.length; i++){
      if(data[i] != undefined){
        events.push(
          <div className = "event">
            <h4>Webinar</h4>
            <div className = "event-content">
              <img src = {data[i].picture} class = "event-image"/>
              <div className = "event-text">
                <h5>{data[i].title}</h5>
                <div className = "event-date">
                  {
                    getDate(data[i])
                  }
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
    return events;
  }

  const getDate = ev => {
    var d = ""
    if(ev["date"] !== undefined){
      d = ev["date"].substring(0, 10)
      d = d.split("-")
      d = new Date(d[0], d[1] - 1, d[2])
    }else{
      d = ev["contestdate"].substring(0, 10)
      d = d.split("-")
      d = new Date(d[0], d[1] - 1, d[2])
    }

    return d.toDateString()
  }

  return (
    <div className = "event-slider">
      <button className="event-prev-button" disabled = {slideNum == 0} onClick={() => previous()}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <div className="eventApp">

        {/* main slider that contains information of events */}
        <Slider {...settings} ref = {customSlider}>
          {
            allEvents()
          }
        </Slider>
        <br/>
      </div>
      <button className="event-next-button" disabled = {slideNum == stopAt} onClick={() => next()}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}