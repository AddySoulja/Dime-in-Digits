import { faCheckCircle, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { myData } from "./data";

const Creators = () => {
  return (
    <>
      {myData.map((item) => (
        <li>
          <div class="seller-card card">
            <figure
              class="card-banner"
              style={{ display: "flex", width: "65px" }}
            >
              <img
                src={item.avatarSrc}
                width="64"
                height="64"
                loading="lazy"
                alt="Steven Townsend profile"
              ></img>

              <FontAwesomeIcon
                icon={faCheckCircle}
                name="checkmark-circle"
                aria-hidden="true"
                style={{
                  marginTop: "auto",
                  position: "relative",
                  left: "-10px",
                  color: "#059467",
                }}
              ></FontAwesomeIcon>
            </figure>

            <div class="card-title-wrapper">
              <h3 class="title-sm">
                <Link to="/" class="link:hover">
                  {item.name}
                </Link>
              </h3>

              <p class="user-name label-md">@{item.name}</p>
            </div>

            <button class="btn-icon outline" aria-label="Hire Steven Townsend">
              <FontAwesomeIcon
                icon={faUserPlus}
                name="person-add-outline"
                aria-hidden="true"
              ></FontAwesomeIcon>
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default Creators;
