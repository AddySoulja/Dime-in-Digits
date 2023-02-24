import React from "react";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import "../../App.css";
import { Link } from "react-router-dom";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../product/Carousel";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section
            className="section hero"
            aria-label="home"
            style={{
              paddingTop: "13rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="container">
              <h1 className="headline-lg hero-title">
                Discover rate collection or{" "}
                <span className="span">Arts & NFTs</span>
              </h1>

              <p className="section-text body-lg">
                We are a huge marketplace dedicated to connecting great artists
                of all Dime-in-Digits with their fans and unique token
                collectors!
              </p>

              <Link to="/explore" className="btn">
                Explore now
              </Link>
            </div>
          </section>
          <section
            className="section top-collection"
            aria-labelledby="collection-label"
          >
            <div className="container">
              <div className="title-wrapper">
                <h2
                  className="headline-md section-title text-center"
                  id="collection-label"
                >
                  Top Collections
                </h2>

                <a href="/" className="btn-link link:hover">
                  <span className="span">See More</span>

                  <FontAwesomeIcon
                    icon={faForward}
                    name="arrow-forward"
                    aria-hidden="true"
                  ></FontAwesomeIcon>
                </a>
              </div>

              <Carousel />
              <a href="/" className="btn-link link:hover">
                <span className="span">See More</span>

                <FontAwesomeIcon
                  icon={faForward}
                  style={{ color: "#FFFFFF" }}
                  name="arrow-forward"
                  aria-hidden="true"
                ></FontAwesomeIcon>
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

export default Dashboard;
