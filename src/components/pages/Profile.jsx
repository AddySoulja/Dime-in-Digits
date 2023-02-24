import React from "react";
import BackTopBtn from "../common/backToTop/BackTopBtn";
import Navbar from "../common/navbar/Navbar";
import Collection from "../product/Collection";
import { myData } from "../product/data";

const Profile = () => {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <div className="container">
            <section
              className="section hero"
              style={{
                paddingTop: "10rem",
              }}
            >
              <div className="left">
                <h2
                  class="headline-md section-title text-center"
                  id="sellers-label"
                  style={{ marginTop: "0", height: "1.8rem" }}
                >
                  Profile
                </h2>

                <div
                  class="discover-card card"
                  style={{
                    width: "80vw",
                    minWidth: "330px",
                    minHeight: "370px",
                  }}
                >
                  <div
                    class="card-profile"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "16px",
                    }}
                  >
                    <img
                      src={myData[5].avatarSrc}
                      width="300"
                      height="300"
                      loading="lazy"
                      alt="StreetBoy profile"
                      class="img"
                    ></img>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                        height: "300px",
                      }}
                    >
                      <h3 class="title-sm card-title">
                        <a href="/" class="link:hover">
                          DESCRIPTION
                        </a>
                      </h3>
                      <div class="card-meta">User Details</div>
                    </div>
                  </div>
                  <a
                    href="/"
                    class="link:hover title-sm card-title"
                    style={{
                      display: "flex",
                      paddingLeft: "10%",
                      marginRight: "auto",
                      fontSize: "20px",
                    }}
                  >
                    Username
                  </a>
                </div>
              </div>

              <div className="right" style={{ width: "100%" }}>
                <h2
                  class="headline-md section-title text-center"
                  id="sellers-label"
                  style={{ marginTop: "1.8rem", height: "1.8rem" }}
                >
                  My Collection
                </h2>

                <ul class="grid-list">
                  <Collection />
                </ul>
              </div>
            </section>
          </div>
        </article>
      </main>
      <BackTopBtn />
    </>
  );
};

export default Profile;
