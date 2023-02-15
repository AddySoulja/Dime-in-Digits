import React from "react";

const Footer = () => {
  return (
    <>
      <section className="section qna" aria-label="question and answer">
        <div className="container">
          <h2 className="headline-md section-title text-center">Q&A</h2>

          <p className="section-text body-md text-center">
            We are a huge marketplace dedicated to connecting great artists of
            all Dime-in-Digits with their fans and unique token collectors!
          </p>

          <ul className="qna-list">
            <li className="qna-item">
              <div className="qna-card" data-accordion>
                <button className="qna-btn" data-accordion-btn>
                  <h3 className="title-sm">How does it work ?</h3>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </button>

                <div className="qna-content">
                  <p className="body-md">
                    There are many variations Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Autem ab repellat inventore
                    consectetur ex quis reiciendis itaque dicta est, voluptatem
                    pariatur unde quod accusamus fugit quibusdam perferendis
                    vero obcaecati libero! of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </li>

            <li className="qna-item">
              <div className="qna-card" data-accordion>
                <button className="qna-btn" data-accordion-btn>
                  <h3 className="title-sm">
                    Do I need a designer to use Dime-in-Digits ?
                  </h3>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </button>

                <div className="qna-content">
                  <p className="body-md">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </li>

            <li className="qna-item">
              <div className="qna-card" data-accordion>
                <button className="qna-btn" data-accordion-btn>
                  <h3 className="title-sm">
                    What do I need to do to start selling ?
                  </h3>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </button>

                <div className="qna-content">
                  <p className="body-md">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </li>

            <li className="qna-item">
              <div className="qna-card" data-accordion>
                <button className="qna-btn" data-accordion-btn>
                  <h3 className="title-sm">
                    What happens when I receive an order ?
                  </h3>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </button>

                <div className="qna-content">
                  <p className="body-md">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section contact" aria-label="contact">
        <div className="container">
          <h2 className="headline-md section-title text-center">
            Have Question ? Get in touch!
          </h2>

          <p className="body-md section-text text-center">
            We are a huge marketplace dedicated to connecting great artists of
            all Dime-in-Digits with their fans and unique token collectors!
          </p>

          <a href="/" className="btn btn-primary">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

            <span className="span">Contact us</span>
          </a>
        </div>
      </section>

      <section className="section newsletter" aria-label="newsletter">
        <div className="container">
          <div className="newsletter-card">
            <div>
              <h3 className="headline-md text-center">
                Subscribe to Newsletter!
              </h3>

              <p className="body-md card-text text-center">
                Subscribe to get latest updates and information.
              </p>
            </div>

            <div className="input-wrapper">
              <input
                type="email"
                name="email_address"
                placeholder="Enter your email :"
                required
                className="input-field"
              ></input>

              <button className="btn btn-primary">Subscribe</button>
            </div>

            <ion-icon
              name="mail-open-outline"
              aria-hidden="true"
              className="bg-icon bg-icon-1"
            ></ion-icon>

            <ion-icon
              name="document-text-outline"
              aria-hidden="true"
              className="bg-icon bg-icon-2"
            ></ion-icon>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="/">
                <img
                  src="./assets/images/logo.svg"
                  width="126"
                  height="28"
                  loading="lazy"
                  alt="Dime-in-Digits home"
                ></img>
              </a>

              <p className="body-md footer-text">
                Buy, sell and discover exclusive digital assets by the top
                artists of NFTs world.
              </p>
            </div>

            <ul className="footer-list">
              <li>
                <p className="title-lg footer-list-title">Dime-in-Digits</p>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Explore Item</span>
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Live Auction</span>
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Activities</span>
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Wallets</span>
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Creators</span>
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="title-lg footer-list-title">Useful Links</p>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">About Us</span>
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Blog & News</span>
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Terms & Condition</span>
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Privacy policy</span>
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Login</span>
                </a>
              </li>

              <li>
                <a href="/" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Contact Us</span>
                </a>
              </li>
            </ul>

            <div className="footer-list">
              <ul>
                <li>
                  <p className="title-lg footer-list-title">
                    Download the Dime-in-Digits app
                  </p>
                </li>

                <li className="footer-list-item">
                  <a href="/">
                    <img
                      src="./assets/images/appstore.png"
                      width="134"
                      height="40"
                      loading="lazy"
                      alt="Download Dime-in-Digits app from AppStore"
                    ></img>
                  </a>

                  <a href="/">
                    <img
                      src="./assets/images/playstore.png"
                      width="134"
                      height="40"
                      loading="lazy"
                      alt="Download Dime-in-Digits app from PlayStore"
                    ></img>
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <p className="title-lg footer-list-title">Contact Details</p>
                </li>

                <li className="footer-list-item">
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                  <a href="mailto:dimeindigits@nft.com" className="footer-link">
                    dimeindigits@nft.com
                  </a>
                </li>

                <li className="footer-list-item">
                  <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                  <a href="tel:+111 234-567-891" className="footer-link">
                    +111 234-567-891
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="body-md text-center copyright">
              &copy; 2023 Dime-in-Digits. Developed with{" "}
              <span className="span">❤</span> by Aditya Kumar.
            </p>
          </div>
        </div>
      </footer>

      <a
        href="/top"
        className="back-to-top btn-icon"
        aria-label="back to top"
        data-back-top-btn
      >
        <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
      </a>

      <div className="body-bg-shape"></div>
    </>
  );
};

export default Footer;
