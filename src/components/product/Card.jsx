import React, { useEffect } from "react";
import { myData } from "./data";
import { sliderInit } from "./slider";

const Card = () => {
  const sliders = document.querySelectorAll("[data-slider]");



  useEffect(() => sliderInit(sliders))
  return (
    <>
      <ul className="slider-container" data-slider-container>
        {myData.map((item, index) => (
          <li className="slider-item" key={`collection${index}`}>
            <div className="collection-card card">
              <figure
                className="card-banner img-holder"
                style={{ width: "500", height: "500" }}
              >
                <img
                  src={item.imgSrc}
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Digital Collection"
                  className="img-cover"
                ></img>
              </figure>

              <div className="card-content">
                <div className="card-profile">
                  <img
                    src={item.avatarSrc}
                    width="64"
                    height="64"
                    loading="lazy"
                    alt="CutieGirl profile"
                  ></img>

                  <ion-icon
                    name="checkmark-circle"
                    aria-hidden="true"
                  ></ion-icon>
                </div>

                <h3 className="title-md card-title">
                  <a href="/" className="link:hover">
                    Digital Collection
                  </a>
                </h3>

                <p className="label-md card-author">
                  by{" "}
                  <a href="/" className="link">
                    @CutieGirl
                  </a>
                </p>

                <p className="card-text">25 Items</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Card;
