import React, { useState } from "react";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import rupee from "../../assets/images/rupee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const DisplayItem = ({ item, setItemsInWallet }) => {
  const [highestBid, setHighestBid] = useState(item.highestBid);
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
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ paddingBottom: "3rem", fontSize: "24px" }}>
              {item.title}
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
                  src={item.imgSrc}
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Genuine Undead /3902"
                  class="img-cover"
                ></img>
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

                    <span class="span">{item.price}</span>
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

                    <span class="span">{item.highestBid}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-bid-block">
              <input
                type="number"
                value={highestBid}
                className="input-bid"
                onChange={(e) => setHighestBid(e.target.value)}
              ></input>
              <button
                class="btn btn-primary"
                style={{ marginRight: "8px" }}
                onClick={() => setItemsInWallet((prev) => [...prev, item])}
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
