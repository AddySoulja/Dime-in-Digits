import React, { useEffect, useState } from "react";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import rupee from "../../assets/images/rupee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { myData } from "./data";
import { useNavigate, useParams } from "react-router-dom";

const DisplayItem = ({ wallet, setWallet }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [onDisplay] = useState(myData[id]);
  const [highestBid, setHighestBid] = useState(onDisplay.highestBid);

  const addToWallet = () => {
    if (!wallet.includes(onDisplay)) {
      setWallet((prev) => [...prev, onDisplay]);
      navigate("/wallet");
      return;
    }
    alert("Item already in Wallet !");
  };
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section
            className="section hero"
            style={{
              paddingTop: "13rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ paddingBottom: "3rem", fontSize: "24px" }}>
              {onDisplay.title}
            </h1>
            <div
              class="discover-card card"
              style={{
                width: "30%",
                height: "40%",
              }}
            >
              <div
                class="card-banner img-holder"
                style={{ width: "500", height: "500" }}
              >
                <img
                  src={onDisplay.imgSrc}
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Genuine Undead /3902"
                  class="img-cover"
                ></img>
              </div>

              <div class="card-profile">
                <img
                  src={onDisplay.avatarSrc}
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="StreetBoy profile"
                  class="img"
                ></img>

                <a href="/" class="link:hover">
                  @{onDisplay.name}
                </a>
              </div>

              <h3 class="title-sm card-title">
                <a href="/" class="link:hover">
                  {onDisplay.title}
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

                    <span class="span">{onDisplay.price}</span>
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

                    <span class="span">{onDisplay.highestBid}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-bid-block">
              <input
                type="number"
                value={highestBid}
                className="input-bid"
                onChange={(e) => {
                  e.target.value < onDisplay.highestBid
                    ? setHighestBid(onDisplay.highestBid)
                    : setHighestBid(e.target.value);
                }}
              ></input>
              <button
                class="btn btn-primary"
                style={{ marginRight: "8px" }}
                onClick={addToWallet}
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  name="flash"
                  aria-hidden="true"
                ></FontAwesomeIcon>

                <span class="span">Place Bid</span>
              </button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <BackTopBtn />
    </>
  );
};

export default DisplayItem;
