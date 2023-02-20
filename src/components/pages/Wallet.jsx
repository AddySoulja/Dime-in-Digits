import React, { useEffect, useState } from "react";
import Navbar from "../common/navbar/Navbar";
import "../../App.css";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import Collection from "../product/Collection";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import rupee from "../../assets/images/rupee.png";
const Wallet = ({ itemsInWallet }) => {
  const [wallet, setWallet] = useState(0);
  useEffect(() => {
    let total = 0;
    itemsInWallet.forEach((item) => {
      total += item.highestBid;
    });
    setWallet(total);
  }, [itemsInWallet]);
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section className="section discover">
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

              {itemsInWallet.length > 0 ? (
                <ul class="grid-list">
                  <Collection data={itemsInWallet} />
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
                {wallet}
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
