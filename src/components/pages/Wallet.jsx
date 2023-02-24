import React, { useEffect, useState } from "react";
import Navbar from "../common/navbar/Navbar";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faStopwatch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import rupee from "../../assets/images/rupee.png";
const Wallet = ({ wallet, setWallet }) => {
  const [walletValue, setWalletValue] = useState(0);

  const removeItem = (e, item) => {
    e.preventDefault();
    const id = wallet.findIndex((each) => each.key === item.key);
    wallet.splice(id, 1);
    setWallet([...wallet]);
  };

  useEffect(() => {
    let total = 0;
    wallet.forEach((item) => {
      total += item.highestBid;
    });
    setWalletValue(total);
  }, [wallet, setWallet]);

  return (
    <>
      <Navbar />
      <main>
        <article>
          <section className="section discover" style={{ minHeight: "100vh" }}>
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                class="headline-md section-title text-center"
                id="discover-label"
                style={{ marginTop: "5rem" }}
              >
                Items in Wallet
              </h2>

              {wallet.length > 0 ? (
                <ul class="grid-list">
                  {wallet.map((item) => (
                    <Link to={`/explore/${item.key - 1}`}>
                      <li>
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

                            <button
                              class="btn btn-primary"
                              onClick={(e) => removeItem(e, item)}
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                name="flash"
                                aria-hidden="true"
                              ></FontAwesomeIcon>

                              <span class="span">Remove</span>
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
                      </li>
                    </Link>
                  ))}
                </ul>
              ) : (
                <h1>Empty Wallet !</h1>
              )}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "8px",
                  fontSize: "23px",
                }}
              >
                {"Wallet value :    "}
                <img
                  alt="rupee"
                  src={rupee}
                  style={{
                    height: "19px",
                    width: "19px",
                    marginLeft: "6px",
                    marginRight: "6px",
                  }}
                ></img>
                {walletValue}
              </div>
              <Link to="/" class="btn-link link:hover">
                <span class="span">Explore More</span>

                <FontAwesomeIcon
                  icon={faForward}
                  name="arrow-forward"
                  aria-hidden="true"
                ></FontAwesomeIcon>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <BackTopBtn />
    </>
  );
};

export default Wallet;
