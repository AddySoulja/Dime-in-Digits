import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import "../../App.css";
import BackTopBtn from "../common/BackTopBtn";

const Explore = () => {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section class="section discover" aria-labelledby="discover-label">
            <div class="container">
              <h2
                class="headline-md section-title text-center"
                id="discover-label"
              >
                Discover Items
              </h2>

              <ul class="grid-list">
                <li>
                  <div class="discover-card card">
                    <div
                      class="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./assets/images/showcase-8.gif"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Genuine Undead /3902"
                        class="img-cover"
                      ></img>

                      <button class="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span class="span">Place Bid</span>
                      </button>
                    </div>

                    <div class="card-profile">
                      <img
                        src="./assets/images/avatar-8.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="StreetBoy profile"
                        class="img"
                      ></img>

                      <a href="/" class="link:hover">
                        @StreetBoy
                      </a>
                    </div>

                    <h3 class="title-sm card-title">
                      <a href="/" class="link:hover">
                        Genuine Undead /3902
                      </a>
                    </h3>

                    <div class="card-meta">
                      <div>
                        <p>Price</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.5 ETH</span>
                        </div>
                      </div>

                      <div>
                        <p>Highest Bid</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.55 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="discover-card card">
                    <div
                      class="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./assets/images/showcase-7.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Windchime /768"
                        class="img-cover"
                      ></img>

                      <button class="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span class="span">Place Bid</span>
                      </button>

                      <div class="countdown">
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <span class="span">5d 04h 18m 04s</span>
                      </div>
                    </div>

                    <div class="card-profile">
                      <img
                        src="./assets/images/avatar-7.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="CutieGirl profile"
                        class="img"
                      ></img>

                      <a href="/" class="link:hover">
                        @CutieGirl
                      </a>
                    </div>

                    <h3 class="title-sm card-title">
                      <a href="/" class="link:hover">
                        Windchime /768
                      </a>
                    </h3>

                    <div class="card-meta">
                      <div>
                        <p>Price</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.5 ETH</span>
                        </div>
                      </div>

                      <div>
                        <p>Highest Bid</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.55 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="discover-card card">
                    <div
                      class="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./assets/images/showcase-6.gif"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Probably A Label /3277"
                        class="img-cover"
                      ></img>

                      <button class="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span class="span">Place Bid</span>
                      </button>
                    </div>

                    <div class="card-profile">
                      <img
                        src="./assets/images/avatar-6.gif"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="ButterFly profile"
                        class="img"
                      ></img>

                      <a href="/" class="link:hover">
                        @ButterFly
                      </a>
                    </div>

                    <h3 class="title-sm card-title">
                      <a href="/" class="link:hover">
                        Probably A Label /3277
                      </a>
                    </h3>

                    <div class="card-meta">
                      <div>
                        <p>Price</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.5 ETH</span>
                        </div>
                      </div>

                      <div>
                        <p>Highest Bid</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.55 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="discover-card card">
                    <div
                      class="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./assets/images/showcase-5.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Probably A Label /1711"
                        class="img-cover"
                      ></img>

                      <button class="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span class="span">Place Bid</span>
                      </button>
                    </div>

                    <div class="card-profile">
                      <img
                        src="./assets/images/avatar-5.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="NorseQueen profile"
                        class="img"
                      ></img>

                      <a href="/" class="link:hover">
                        @NorseQueen
                      </a>
                    </div>

                    <h3 class="title-sm card-title">
                      <a href="/" class="link:hover">
                        Probably A Label /1711
                      </a>
                    </h3>

                    <div class="card-meta">
                      <div>
                        <p>Price</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.5 ETH</span>
                        </div>
                      </div>

                      <div>
                        <p>Highest Bid</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.55 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="discover-card card">
                    <div
                      class="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./assets/images/showcase-4.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Shibuya Scramble Punks"
                        class="img-cover"
                      ></img>

                      <button class="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span class="span">Place Bid</span>
                      </button>
                    </div>

                    <div class="card-profile">
                      <img
                        src="./assets/images/avatar-4.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="BigBull profile"
                        class="img"
                      ></img>

                      <a href="/" class="link:hover">
                        @BigBull
                      </a>
                    </div>

                    <h3 class="title-sm card-title">
                      <a href="/" class="link:hover">
                        Shibuya Scramble Punks
                      </a>
                    </h3>

                    <div class="card-meta">
                      <div>
                        <p>Price</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.5 ETH</span>
                        </div>
                      </div>

                      <div>
                        <p>Highest Bid</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.55 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="discover-card card">
                    <div
                      class="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./assets/images/showcase-3.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Probably A Label /650"
                        class="img-cover"
                      ></img>

                      <button class="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span class="span">Place Bid</span>
                      </button>
                    </div>

                    <div class="card-profile">
                      <img
                        src="./assets/images/avatar-3.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Angel profile"
                        class="img"
                      ></img>

                      <a href="/" class="link:hover">
                        @Angel
                      </a>
                    </div>

                    <h3 class="title-sm card-title">
                      <a href="/" class="link:hover">
                        Probably A Label /650
                      </a>
                    </h3>

                    <div class="card-meta">
                      <div>
                        <p>Price</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.5 ETH</span>
                        </div>
                      </div>

                      <div>
                        <p>Highest Bid</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.55 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="discover-card card">
                    <div
                      class="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./assets/images/showcase-2.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Looki /0147"
                        class="img-cover"
                      ></img>

                      <button class="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span class="span">Place Bid</span>
                      </button>

                      <div class="countdown">
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <span class="span">10d 23h 24m 10s</span>
                      </div>
                    </div>

                    <div class="card-profile">
                      <img
                        src="./assets/images/avatar-2.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="CrazyAnyone profile"
                        class="img"
                      ></img>

                      <a href="/" class="link:hover">
                        @CrazyAnyone
                      </a>
                    </div>

                    <h3 class="title-sm card-title">
                      <a href="/" class="link:hover">
                        Looki /0147
                      </a>
                    </h3>

                    <div class="card-meta">
                      <div>
                        <p>Price</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.5 ETH</span>
                        </div>
                      </div>

                      <div>
                        <p>Highest Bid</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.55 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="discover-card card">
                    <div
                      class="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./assets/images/showcase-1.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Poob /285"
                        class="img-cover"
                      ></img>

                      <button class="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span class="span">Place Bid</span>
                      </button>
                    </div>

                    <div class="card-profile">
                      <img
                        src="./assets/images/avatar-1.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Princess profile"
                        class="img"
                      ></img>

                      <a href="/" class="link:hover">
                        @Princess
                      </a>
                    </div>

                    <h3 class="title-sm card-title">
                      <a href="/" class="link:hover">
                        Poob /285
                      </a>
                    </h3>

                    <div class="card-meta">
                      <div>
                        <p>Price</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.5 ETH</span>
                        </div>
                      </div>

                      <div>
                        <p>Highest Bid</p>

                        <div class="card-price">
                          <img
                            src="./assets/images/ethereum.svg"
                            width="16"
                            height="24"
                            loading="lazy"
                            alt="ethereum icon"
                          ></img>

                          <span class="span">3.55 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <a href="/" class="btn-link link:hover">
                <span class="span">Explore More</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <BackTopBtn />
    </>
  );
};

export default Explore;
