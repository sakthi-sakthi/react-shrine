import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import axios from "axios";
import ApiUrl from "./API/Api";

function Slider() {
  const sliderId = "mySlider";
  const slideshowRef = useRef(null);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`${ApiUrl}/get/slider`)
      .then((response) => {
        setApiData(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the API: ", error);
      });

    const swiper = new Swiper(`#${sliderId}`, {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 1,
      spaceBetween: 20,
      on: {
        slideChange: () => {
        },
      },
    });

    const interval = setInterval(() => {
      swiper.slideNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      swiper.destroy();
    };
  }, [sliderId]);

  return (
    <div
      id={sliderId}
      className="swiper-container hero-slider"
      ref={slideshowRef}
    >
      <div className="swiper-wrapper">
        {apiData?.map((data) => (
          <div className="swiper-slide hero-content-wrap" key={data.id}>
            <img src={data.image} alt={data.title} id="newslidebanner"/>
            <div className="hero-content-overlay position-absolute w-100 h-100">
              <div className="container h-100">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
