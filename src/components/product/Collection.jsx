import React from "react";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

const Collection = () => {
  return (
    <>
      {" "}
      <div className="slider" data-slider>
        <Card />

        <button
          className="slider-btn prev"
          aria-label="Slide to previous item"
          data-slider-prev
        >
          <FontAwesomeIcon
            icon={faBackward}
            style={{ color: "#FFFFFF" }}
            name="chevron-back-sharp"
            aria-hidden="true"
          ></FontAwesomeIcon>
        </button>

        <button
          className="slider-btn next"
          aria-label="Slide to next item"
          data-slider-next
        >
          <FontAwesomeIcon
            icon={faForward}
            style={{ color: "#FFFFFF" }}
            name="chevron-forward-sharp"
            aria-hidden="true"
          ></FontAwesomeIcon>
        </button>
      </div>
    </>
  );
};

export default Collection;
