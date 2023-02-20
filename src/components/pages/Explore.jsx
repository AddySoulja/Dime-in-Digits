import React from "react";
import Footer from "../common/footer/Footer";
import Navbar from "../common/navbar/Navbar";
import "../../App.css";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import Collection from "../product/Collection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Explore = ({ setItem }) => {
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
                style={{ marginTop: "5rem" }}
              >
                Discover Collection
              </h2>

              <ul class="grid-list">
                <Collection setItem={setItem} />
              </ul>

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
      <Footer />
      <BackTopBtn />
    </>
  );
};

export default Explore;
