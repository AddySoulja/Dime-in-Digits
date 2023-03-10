import React from "react";
import Footer from "../common/footer/Footer";
import Navbar from "../common/navbar/Navbar";
import "../../App.css";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import Creators from "../product/Creators";

const Sellers = () => {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section class="section sellers" aria-labelledby="sellers-label">
            <div class="container">
              <h2
                class="headline-md section-title text-center"
                id="sellers-label"
                style={{ marginTop: "5rem", height: "1.8rem" }}
              >
                Best Creators & Sellers
              </h2>

              <ul class="grid-list">
                <Creators />
              </ul>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <BackTopBtn />
    </>
  );
};

export default Sellers;
