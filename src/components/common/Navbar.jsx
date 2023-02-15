import { faBars, faTimes, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.jpg";
import "../../assets/js/script";
import "../../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const setScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", setScroll);
    return () => window.removeEventListener("scroll", setScroll);
  }, []);
  return (
    <header className={scrollY > 500 ? "active header" : "header"} data-header>
      <div className="container">
        <Link to="/">
          <img
            src={logo}
            width="40"
            height="40"
            alt="Dime-in-Digits home"
            className="logo-small"
          ></img>
          <img
            src={logo}
            width="126"
            height="28"
            alt="Dime-in-Digits home"
            className="logo"
          ></img>
        </Link>

        <nav className={isOpen ? "active navbar" : "navbar"} data-navbar>
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link label-lg link:hover">
                Home
              </Link>
            </li>

            <li>
              <Link to="/explore" className="navbar-link label-lg link:hover">
                Explore
              </Link>
            </li>

            <li>
              <Link to="/wallet" className="navbar-link label-lg link:hover">
                Wallet
              </Link>
            </li>

            <li>
              <Link to="/create" className="navbar-link label-lg link:hover">
                Create
              </Link>
            </li>

            <li>
              <Link to="/about-us" className="navbar-link label-lg link:hover">
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-action">
          <button className="btn-icon primary" aria-label="wallet">
            <FontAwesomeIcon icon={faWallet} style={{ color: "#FFFFFF" }} />
          </button>

          <button
            className="btn-icon profil-btn"
            aria-label="Dime-in-Digits account: Fiona doe"
          >
            <img
              src={profile}
              width="50"
              height="50"
              alt="Fiona doe"
              className="img-cover"
            ></img>
          </button>

          <button
            className={isOpen ? "active nav-toggle-btn" : "nav-toggle-btn"}
            aria-label="menu toggle"
            data-nav-toggler
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#FFFFFF" }}
              name="menu-outline"
              aria-hidden="true"
              className="default-icon"
            />
            <FontAwesomeIcon
              icon={faTimes}
              style={{
                color: "#FFFFFF",
                fontSize: "48",
              }}
              name="close-outline"
              aria-hidden="true"
              className="active-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
