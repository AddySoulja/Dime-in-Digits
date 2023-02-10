import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import "../../App.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section class="section hero" aria-label="home">
            <div class="container">
              <h1 class="headline-lg hero-title">
                Discover rate collection or{" "}
                <span class="span">Arts & NFTs</span>
              </h1>

              <p class="section-text body-lg">
                We are a huge marketplace dedicated to connecting great artists
                of all Dime-in-Digits with their fans and unique token
                collectors!
              </p>

              <a href="/" class="btn">
                Explore now
              </a>
            </div>
          </section>

          <section
            class="section top-collection"
            aria-labelledby="collection-label"
          >
            <div class="container">
              <div class="title-wrapper">
                <h2
                  class="headline-md section-title text-center"
                  id="collection-label"
                >
                  Top Collections
                </h2>

                <a href="/" class="btn-link link:hover">
                  <span class="span">See More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>

              <div class="slider" data-slider>
                <ul class="slider-container" data-slider-container>
                  <li class="slider-item">
                    <div class="collection-card card">
                      <figure
                        class="card-banner img-holder"
                        style={{ width: "500", height: "500" }}
                      >
                        <img
                          src="./assets/images/showcase-1.jpg"
                          width="500"
                          height="500"
                          loading="lazy"
                          alt="Digital Collection"
                          class="img-cover"
                        ></img>
                      </figure>

                      <div class="card-content">
                        <div class="card-profile">
                          <img
                            src="./assets/images/avatar-1.jpg"
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

                        <h3 class="title-md card-title">
                          <a href="/" class="link:hover">
                            Digital Collection
                          </a>
                        </h3>

                        <p class="label-md card-author">
                          by{" "}
                          <a href="/" class="link">
                            @CutieGirl
                          </a>
                        </p>

                        <p class="card-text">25 Items</p>
                      </div>
                    </div>
                  </li>

                  <li class="slider-item">
                    <div class="collection-card card">
                      <figure
                        class="card-banner img-holder"
                        style={{ width: "500", height: "500" }}
                      >
                        <img
                          src="./assets/images/showcase-2.jpg"
                          width="500"
                          height="500"
                          loading="lazy"
                          alt="GIF Collection"
                          class="img-cover"
                        ></img>
                      </figure>

                      <div class="card-content">
                        <div class="card-profile">
                          <img
                            src="./assets/images/avatar-2.jpg"
                            width="64"
                            height="64"
                            loading="lazy"
                            alt="ButterFly profile"
                          ></img>

                          <ion-icon
                            name="checkmark-circle"
                            aria-hidden="true"
                          ></ion-icon>
                        </div>

                        <h3 class="title-md card-title">
                          <a href="/" class="link:hover">
                            GIF Collection
                          </a>
                        </h3>

                        <p class="label-md card-author">
                          by{" "}
                          <a href="/" class="link">
                            @ButterFly
                          </a>
                        </p>

                        <p class="card-text">25 Items</p>
                      </div>
                    </div>
                  </li>

                  <li class="slider-item">
                    <div class="collection-card card">
                      <figure
                        class="card-banner img-holder"
                        style={{ width: "500", height: "500" }}
                      >
                        <img
                          src="./assets/images/showcase-3.jpg"
                          width="500"
                          height="500"
                          loading="lazy"
                          alt="Sports Collection"
                          class="img-cover"
                        ></img>
                      </figure>

                      <div class="card-content">
                        <div class="card-profile">
                          <img
                            src="./assets/images/avatar-3.jpg"
                            width="64"
                            height="64"
                            loading="lazy"
                            alt="NorseQueen profile"
                          ></img>

                          <ion-icon
                            name="checkmark-circle"
                            aria-hidden="true"
                          ></ion-icon>
                        </div>

                        <h3 class="title-md card-title">
                          <a href="/" class="link:hover">
                            Sports Collection
                          </a>
                        </h3>

                        <p class="label-md card-author">
                          by{" "}
                          <a href="/" class="link">
                            @NorseQueen
                          </a>
                        </p>

                        <p class="card-text">25 Items</p>
                      </div>
                    </div>
                  </li>

                  <li class="slider-item">
                    <div class="collection-card card">
                      <figure
                        class="card-banner img-holder"
                        style={{ width: "500", height: "500" }}
                      >
                        <img
                          src="./assets/images/showcase-4.jpg"
                          width="500"
                          height="500"
                          loading="lazy"
                          alt="Photography Collection"
                          class="img-cover"
                        ></img>
                      </figure>

                      <div class="card-content">
                        <div class="card-profile">
                          <img
                            src="./assets/images/avatar-4.jpg"
                            width="64"
                            height="64"
                            loading="lazy"
                            alt="BigBull profile"
                          ></img>

                          <ion-icon
                            name="checkmark-circle"
                            aria-hidden="true"
                          ></ion-icon>
                        </div>

                        <h3 class="title-md card-title">
                          <a href="/" class="link:hover">
                            Photography Collection
                          </a>
                        </h3>

                        <p class="label-md card-author">
                          by{" "}
                          <a href="/" class="link">
                            @BigBull
                          </a>
                        </p>

                        <p class="card-text">25 Items</p>
                      </div>
                    </div>
                  </li>

                  <li class="slider-item">
                    <div class="collection-card card">
                      <figure
                        class="card-banner img-holder"
                        style={{ width: "500", height: "500" }}
                      >
                        <img
                          src="./assets/images/showcase-5.jpg"
                          width="500"
                          height="500"
                          loading="lazy"
                          alt="Illustrations Collection"
                          class="img-cover"
                        ></img>
                      </figure>

                      <div class="card-content">
                        <div class="card-profile">
                          <img
                            src="./assets/images/avatar-5.jpg"
                            width="64"
                            height="64"
                            loading="lazy"
                            alt="Angel profile"
                          ></img>

                          <ion-icon
                            name="checkmark-circle"
                            aria-hidden="true"
                          ></ion-icon>
                        </div>

                        <h3 class="title-md card-title">
                          <a href="/" class="link:hover">
                            Illustrations Collection
                          </a>
                        </h3>

                        <p class="label-md card-author">
                          by{" "}
                          <a href="/" class="link">
                            @Angel
                          </a>
                        </p>

                        <p class="card-text">25 Items</p>
                      </div>
                    </div>
                  </li>

                  <li class="slider-item">
                    <div class="collection-card card">
                      <figure
                        class="card-banner img-holder"
                        style={{ width: "500", height: "500" }}
                      >
                        <img
                          src="./assets/images/showcase-6.gif"
                          width="500"
                          height="500"
                          loading="lazy"
                          alt="Animations Collection"
                          class="img-cover"
                        ></img>
                      </figure>

                      <div class="card-content">
                        <div class="card-profile">
                          <img
                            src="./assets/images/avatar-6.gif"
                            width="64"
                            height="64"
                            loading="lazy"
                            alt="CrazyAnyone profile"
                          ></img>

                          <ion-icon
                            name="checkmark-circle"
                            aria-hidden="true"
                          ></ion-icon>
                        </div>

                        <h3 class="title-md card-title">
                          <a href="/" class="link:hover">
                            Animations Collection
                          </a>
                        </h3>

                        <p class="label-md card-author">
                          by{" "}
                          <a href="/" class="link">
                            @CrazyAnyone
                          </a>
                        </p>

                        <p class="card-text">25 Items</p>
                      </div>
                    </div>
                  </li>
                </ul>

                <button
                  class="slider-btn prev"
                  aria-label="Slide to previous item"
                  data-slider-prev
                >
                  <ion-icon
                    name="chevron-back-sharp"
                    aria-hidden="true"
                  ></ion-icon>
                </button>

                <button
                  class="slider-btn next"
                  aria-label="Slide to next item"
                  data-slider-next
                >
                  <ion-icon
                    name="chevron-forward-sharp"
                    aria-hidden="true"
                  ></ion-icon>
                </button>
              </div>

              <a href="/" class="btn-link link:hover">
                <span class="span">See More</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
