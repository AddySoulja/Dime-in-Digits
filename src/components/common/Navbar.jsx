import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="header" data-header>
      <div class="container">
        <Link href="/">
          <img
            src="./assets/images/logo-small.svg"
            width="40"
            height="40"
            alt="Dime-in-Digits home"
            class="logo-small"
          ></img>
          <img
            src="./assets/images/logo.svg"
            width="126"
            height="28"
            alt="Dime-in-Digits home"
            class="logo"
          ></img>
        </Link>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list">
            <li>
              <Link to="/" class="navbar-link label-lg link:hover">
                Home
              </Link>
            </li>

            <li>
              <Link to="/explore" class="navbar-link label-lg link:hover">
                Explore
              </Link>
            </li>

            <li>
              <Link to="/wallet" class="navbar-link label-lg link:hover">
                Wallet
              </Link>
            </li>

            <li>
              <Link to="/create" class="navbar-link label-lg link:hover">
                Create
              </Link>
            </li>

            <li>
              <Link to="/about-us" class="navbar-link label-lg link:hover">
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        <div class="header-action">
          <button class="btn-icon primary" aria-label="wallet">
            <ion-icon name="wallet-outline"></ion-icon>
          </button>

          <button
            class="btn-icon profil-btn"
            aria-label="Dime-in-Digits account: Fiona doe"
          >
            <img
              src="./assets/images/profile.jpg"
              width="50"
              height="50"
              alt="Fiona doe"
              class="img-cover"
            ></img>
          </button>

          <button
            class="nav-toggle-btn"
            aria-label="menu toggle"
            data-nav-toggler
          >
            <ion-icon
              name="menu-outline"
              aria-hidden="true"
              class="default-icon"
            ></ion-icon>

            <ion-icon
              name="close-outline"
              aria-hidden="true"
              class="active-icon"
            ></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
