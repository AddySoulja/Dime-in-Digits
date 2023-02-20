import React from "react";
import { myData } from "../product/data";
import rupee from "../../assets/images/rupee.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

const Collection = ({ setItem }) => {
  return myData.map((item) => (
    <Link to={`/explore/id:${item.key}`}>
      <li onClick={() => setItem(item)}>
        <div class="discover-card card">
          <div
            class="card-banner img-holder"
            style={{ width: "500", height: "500" }}
          >
            <img
              src={item.imgSrc}
              width="500"
              height="500"
              loading="lazy"
              alt="Genuine Undead /3902"
              class="img-cover"
            ></img>

            <button class="btn btn-primary">
              <FontAwesomeIcon
                icon={faBoltLightning}
                name="flash"
                aria-hidden="true"
              ></FontAwesomeIcon>

              <span class="span">Place Bid</span>
            </button>
            {item.isLimited ? (
              <div className="countdown">
                <FontAwesomeIcon
                  icon={faStopwatch}
                  name="time-outline"
                  aria-hidden="true"
                ></FontAwesomeIcon>

                <span class="span">5d 04h 18m 04s</span>
              </div>
            ) : (
              ""
            )}
          </div>

          <div class="card-profile">
            <img
              src={item.avatarSrc}
              width="32"
              height="32"
              loading="lazy"
              alt="StreetBoy profile"
              class="img"
            ></img>

            <a href="/" class="link:hover">
              @{item.name}
            </a>
          </div>

          <h3 class="title-sm card-title">
            <a href="/" class="link:hover">
              {item.title}
            </a>
          </h3>

          <div class="card-meta">
            <div>
              <p>Price</p>

              <div class="card-price">
                <img
                  src={rupee}
                  width="16"
                  height="24"
                  loading="lazy"
                  alt="ethereum icon"
                ></img>

                <span class="span">3.5</span>
              </div>
            </div>

            <div>
              <p>Highest Bid</p>

              <div class="card-price">
                <img
                  src={rupee}
                  width="16"
                  height="24"
                  loading="lazy"
                  alt="ethereum icon"
                ></img>

                <span class="span">3.55</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  ));
};

export default Collection;
