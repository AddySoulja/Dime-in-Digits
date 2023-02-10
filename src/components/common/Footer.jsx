import React from "react";

const Footer = () => {
  return (
    <>
      <section class="section qna" aria-label="question and answer">
        <div class="container">
          <h2 class="headline-md section-title text-center">Q&A</h2>

          <p class="section-text body-md text-center">
            We are a huge marketplace dedicated to connecting great artists of
            all Dime-in-Digits with their fans and unique token collectors!
          </p>

          <ul class="qna-list">
            <li class="qna-item">
              <div class="qna-card" data-accordion>
                <button class="qna-btn" data-accordion-btn>
                  <h3 class="title-sm">How does it work ?</h3>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </button>

                <div class="qna-content">
                  <p class="body-md">
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

            <li class="qna-item">
              <div class="qna-card" data-accordion>
                <button class="qna-btn" data-accordion-btn>
                  <h3 class="title-sm">
                    Do I need a designer to use Dime-in-Digits ?
                  </h3>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </button>

                <div class="qna-content">
                  <p class="body-md">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </li>

            <li class="qna-item">
              <div class="qna-card" data-accordion>
                <button class="qna-btn" data-accordion-btn>
                  <h3 class="title-sm">
                    What do I need to do to start selling ?
                  </h3>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </button>

                <div class="qna-content">
                  <p class="body-md">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </li>

            <li class="qna-item">
              <div class="qna-card" data-accordion>
                <button class="qna-btn" data-accordion-btn>
                  <h3 class="title-sm">
                    What happens when I receive an order ?
                  </h3>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </button>

                <div class="qna-content">
                  <p class="body-md">
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

      <section class="section contact" aria-label="contact">
        <div class="container">
          <h2 class="headline-md section-title text-center">
            Have Question ? Get in touch!
          </h2>

          <p class="body-md section-text text-center">
            We are a huge marketplace dedicated to connecting great artists of
            all Dime-in-Digits with their fans and unique token collectors!
          </p>

          <a href="/" class="btn btn-primary">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

            <span class="span">Contact us</span>
          </a>
        </div>
      </section>

      <section class="section newsletter" aria-label="newsletter">
        <div class="container">
          <div class="newsletter-card">
            <div>
              <h3 class="headline-md text-center">Subscribe to Newsletter!</h3>

              <p class="body-md card-text text-center">
                Subscribe to get latest updates and information.
              </p>
            </div>

            <div class="input-wrapper">
              <input
                type="email"
                name="email_address"
                placeholder="Enter your email :"
                required
                class="input-field"
              ></input>

              <button class="btn btn-primary">Subscribe</button>
            </div>

            <ion-icon
              name="mail-open-outline"
              aria-hidden="true"
              class="bg-icon bg-icon-1"
            ></ion-icon>

            <ion-icon
              name="document-text-outline"
              aria-hidden="true"
              class="bg-icon bg-icon-2"
            ></ion-icon>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="section footer-top">
          <div class="container">
            <div class="footer-brand">
              <a href="/">
                <img
                  src="./assets/images/logo.svg"
                  width="126"
                  height="28"
                  loading="lazy"
                  alt="Dime-in-Digits home"
                ></img>
              </a>

              <p class="body-md footer-text">
                Buy, sell and discover exclusive digital assets by the top
                artists of NFTs world.
              </p>
            </div>

            <ul class="footer-list">
              <li>
                <p class="title-lg footer-list-title">Dime-in-Digits</p>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Explore Item</span>
                </a>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Live Auction</span>
                </a>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Activities</span>
                </a>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Wallets</span>
                </a>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Creators</span>
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <p class="title-lg footer-list-title">Useful Links</p>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">About Us</span>
                </a>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Blog & News</span>
                </a>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Terms & Condition</span>
                </a>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Privacy policy</span>
                </a>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Login</span>
                </a>
              </li>

              <li>
                <a href="/" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Contact Us</span>
                </a>
              </li>
            </ul>

            <div class="footer-list">
              <ul>
                <li>
                  <p class="title-lg footer-list-title">
                    Download the Dime-in-Digits app
                  </p>
                </li>

                <li class="footer-list-item">
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
                  <p class="title-lg footer-list-title">Contact Details</p>
                </li>

                <li class="footer-list-item">
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                  <a href="mailto:dimeindigits@nft.com" class="footer-link">
                    dimeindigits@nft.com
                  </a>
                </li>

                <li class="footer-list-item">
                  <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                  <a href="tel:+111 234-567-891" class="footer-link">
                    +111 234-567-891
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <p class="body-md text-center copyright">
              &copy; 2023 Dime-in-Digits. Developed with{" "}
              <span class="span">❤</span> by Aditya Kumar.
            </p>
          </div>
        </div>
      </footer>

      <a
        href="/top"
        class="back-to-top btn-icon"
        aria-label="back to top"
        data-back-top-btn
      >
        <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
      </a>

      <div class="body-bg-shape"></div>
    </>
  );
};

export default Footer;
