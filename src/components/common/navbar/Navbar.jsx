import {
  faBars,
  faPerson,
  faTimes,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import profile from "../../../assets/images/profile.jpg";
import "../../../App.css";

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
            width="52"
            height="52"
            alt="Dime-in-Digits home"
            className="logo-small logoPlus"
          ></img>
          <img
            src={logo}
            width="68"
            height="68"
            alt="Dime-in-Digits home"
            className="logo logoPlus"
          ></img>
        </Link>

        <nav className={isOpen ? "active navbar" : "navbar"} data-navbar>
          <ul className="navbar-list">
            <li>
              <Link to="/explore" className="navbar-link label-lg link:hover">
                Explore
              </Link>
            </li>

            <li>
              <Link to="/sellers" className="navbar-link label-lg link:hover">
                Sellers
              </Link>
            </li>

            <li>
              <Link to="/create" className="navbar-link label-lg link:hover">
                Create
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-action">
          <Link to="/wallet">
            <button className="btn-icon primary" aria-label="wallet">
              <FontAwesomeIcon icon={faWallet} className="nav-btn" />
            </button>
          </Link>

          <Link to="/profile">
            <button
              className="btn-icon primary"
              aria-label="Dime-in-Digits account: Username"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="nav-btn"
              ></FontAwesomeIcon>
            </button>
          </Link>

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
