import "normalize.css";
import "./styles/main.scss";

import logo from "./images/logo.png";
import searchIcon from "./images/search-icon.svg";
import cartIcon from "./images/cart-icon.svg";
import main from "./images/main.png";
import categoriesOne from "./images/categories-1.png";
import categoriesTwo from "./images/categories-2.png";
import categoriesThree from "./images/categories-3.png";
import newModelOne from "./images/newModel-1.png";
import newModelTwo from "./images/newModel-2.png";
import newModelThree from "./images/newModel-3.png";
import newModelFour from "./images/newModel-4.png";
import newModelFive from "./images/newModel-5.png";
import testRider from "./images/testRider.png";
import Super73RX from "./images/Super73RX.png";
import modelStroll from "./images/model-stroll.png";
import modelMojave from "./images/model-mojave.png";
import bestSallerOne from "./images/bestSeller-1.png";
import bestSallerTwo from "./images/bestSeller-2.png";
import bestSallerThree from "./images/bestSeller-3.png";
import bestSallerFour from "./images/bestSeller-4.png";
import BikeGirl from "./images/BikeGirl.png";
import BikeRide from "./images/Bike_ride.png";
import AllBike from "./images/All_Bike.png";
import imageClientOne from "./images/imageClients-1.svg";
import imageClientTwo from "./images/imageClients-2.svg";
import imageClientThree from "./images/imageClients-3.svg";
import imageClientFour from "./images/imageClients-4.svg";
import imageClientFive from "./images/imageClients-5.svg";
import imageGalleryOne from "./images/gallery-img1.png";
import imageGalleryTwo from "./images/gallery-img2.png";
import imageGalleryThree from "./images/gallery-img3.png";
import imageGalleryFour from "./images/gallery-img4.png";
import imageGalleryFive from "./images/gallery-img5.png";
import imageGallerySix from "./images/gallery-img6.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header__container">
            <div className="menu__wrapper">
              <div className="hamburger-menu">
                <span className="line line1"></span>
                <span className="line line2"></span>
              </div>
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__item">
                    <a className="menu__link" href="#">
                      e-bikes
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="#">
                      accessories
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" href="#">
                      APPAREL
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="logo">
              <a className="logo-link" href="#">
                <img className="logo__img" src={logo} alt="logo" />
              </a>
            </div>
            <div className="menu-site">
              <a className="menu-site__icon" href="#">
                <img className="menu-site__img" src={searchIcon} alt="logo" />
              </a>
              <a className="menu-site__icon" href="#">
                <img className="menu-site__img" src={cartIcon} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="main">
        <div className="container">
          <div className="main-img">
            <img src={main} alt="image" className="main-img__image" />
            <p className="testRide__button">TEST RIDE</p>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <div className="categories__wrapper">
            <div className="direction__item">
              <img src={categoriesOne} alt="" className="direction__img" />
              <p className="categories__text">E-BIKES</p>
            </div>
            <div className="categories__item">
              <img src={categoriesTwo} alt="" className="categories__img" />
              <p className="categories__text">Accessories</p>
            </div>
            <div className="categories__item">
              <img src={categoriesThree} alt="" className="categories__img" />
              <p className="categories__text">APPAREL</p>
            </div>
          </div>
        </div>
      </section>

      <section className="new-models">
        <div className="container">
          <div className="new-models__wrapper">
            <div className="new-models__item">
              <img src={newModelOne} alt="" className="new-models__img" />
              <p className="new-models__text">SUPER73-S2 BONE WHITE</p>
              <p className="new-models__price">€3.699,00</p>
            </div>
            <div className="new-models__item">
              <img src={newModelTwo} alt="" className="new-models__img" />
              <p className="new-models__text">SUPER73-RX MOJAVE DARK EARTH</p>
              <p className="new-models__price">€4.599,00</p>
            </div>
            <div className="new-models__item">
              <img src={newModelThree} alt="" className="new-models__img" />
              <p className="new-models__text">
                CHROME X SUPER73 DOUBLETRACK FEED BAG
              </p>
              <p className="new-models__price">€49,95</p>
            </div>
            <div className="new-models__item">
              <img src={newModelFour} alt="" className="new-models__img" />
              <p className="new-models__text">REVERSIBLE CARGO PLATFORM</p>
              <p className="new-models__price">€129,00</p>
            </div>
            <div className="new-models__item">
              <img src={newModelFive} alt="" className="new-models__img" />
              <p className="new-models__text">TRAX GLOVE</p>
              <p className="new-models__price">€35,00</p>
            </div>
          </div>
        </div>
      </section>

      <section className="test-ride">
        <div className="container">
          <div className="test-ride-img">
            <img src={testRider} alt="image" className="test-ride-img__image" />
            <p className="test-ride-img__text">
              Come See What We’re All About & Test Ride Today
            </p>
            <p className="test-ride-img__button">TEST RIDE</p>
          </div>
        </div>
      </section>

      <section className="model-carmine">
        <div className="container">
          <div className="model-carmine-img">
            <img src={Super73RX} alt="image" className="model-carmine-img__image" />
            <p className="model-carmine__name">SUPER73-RX CARMINE RED</p>
            <p className="model-carmine__button">BUY NOW</p>
            <p className="model-carmine__price">€4.599,00</p>
            <p className="model-carmine__text">
              The RX debuts Super73’s most powerful and technologically advanced
              drive system with multi-class ride modes.
            </p>
            <p className="model-carmine__text">
              Experience the RX in an entirely new color palette!
            </p>
          </div>
        </div>
      </section>

      <section className="model-mojave">
        <div className="container">
          <div className="model-mojave-img">
            <p className="model-mojave__text">Performance Adventurer</p>
            <p className="model-mojave__title">SUPER73-RX MOJAVE DARK EARTH</p>
            <p className="model-mojave__price">€4.599,00</p>
            <img src={modelMojave} alt="image" className="model-mojave-img__image" />
            <button className="model-mojave__button">BUY NOW</button>
          </div>
          <div className="model-stroll-img">
            <img src={modelStroll} alt="image" className="model-stroll-img__image" />
          </div>
        </div>
      </section>

      <section className="best-sellers">
        <div className="container">
          <div className="best-sellers__header">
            <h1 className="best-sellers__text">Best Sellers</h1>
            <p className="best-sellers__filter">
              See: <a href="">all</a>
            </p>
            See all
          </div>
          <div className="best-sellers__item">
            <img src={bestSallerOne} alt="" className="best-sellers__img" />
            <p className="best-sellers__text">SUPER73-ZX Storm Grey</p>
            <p className="best-sellers__price">€2.699,00</p>
          </div>
          <div className="best-sellers__item">
            <img src={bestSallerTwo} alt="" className="best-sellers__img" />
            <p className="best-sellers__text">SUPER73-ZX Moon Rock</p>
            <p className="best-sellers__price">€2.699,00</p>
          </div>
          <div className="best-sellers__item">
            <img src={bestSallerThree} alt="" className="best-sellers__img" />
            <p className="best-sellers__text">SUPER73-S2 GALAXY BLACK</p>
            <p className="best-sellers__price">€3.699,00</p>
          </div>
          <div className="best-sellers__item">
            <img src={bestSallerFour} alt="" className="best-sellers__img" />
            <p className="best-sellers__text">GRZLY TIRE 20" X 4.5"</p>
            <p className="best-sellers__price">€89,95</p>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="content__wrapper">
            <h1 className="content__title">
              We are an American lifestyle adventure brand
            </h1>
            <p className="content__text">
              {" "}
              Born from the desire to inspire and create adventure and
              community, SUPER73 is an American lifestyle adventure brand fusing
              motorcycle heritage and youth culture.{" "}
            </p>
          </div>
          <div className="content__item">
            <img src={AllBike} alt="" className="content__img" />
          </div>
          <div className="content__item">
            <img src={BikeRide} alt="" className="content__img" />
          </div>
          <div className="content__item">
            <img src={BikeGirl} alt="" className="content__img" />
          </div>
        </div>
      </section>

      <section className="clients">
        <div className="container">
          <div className="clients__wrapper">
            <div className="clients__item">
              <img src={imageClientOne} alt="" className="content__img" />
            </div>
            <div className="clients__item">
              <img src={imageClientTwo} alt="" className="content__img" />
            </div>
            <div className="clients__item">
              <img src={imageClientThree} alt="" className="content__img" />
            </div>
            <div className="clients__item">
              <img src={imageClientFour} alt="" className="content__img" />
            </div>
            <div className="clients__item">
              <img src={imageClientFive} alt="" className="content__img" />
            </div>
          </div>
        </div>
      </section>

      <section className="follow-customer">
        <div className="container">
          <div className="follow-customer__wrapper">
            <h1 className="follow-customer__title">FOLLOW US ON INSTAGRAM</h1>
            <div className="link-social">
              <p>super73eu</p>
            </div>

            <div className="follow-customer__item">
              <img
                src={imageGalleryOne}
                alt=""
                className="follow-customer__img"
              />
            </div>
            <div className="follow-customer__item">
              <img
                src={imageGalleryTwo}
                alt=""
                className="follow-customer__img"
              />
            </div>
            <div className="follow-customer__item">
              <img
                src={imageGalleryThree}
                alt=""
                className="follow-customer__img"
              />
            </div>
            <div className="follow-customer__item">
              <img
                src={imageGalleryFour}
                alt=""
                className="follow-customer__img"
              />
            </div>
            <div className="follow-customer__item">
              <img
                src={imageGalleryFive}
                alt=""
                className="follow-customer__img"
              />
            </div>
            <div className="follow-customer__item">
              <img
                src={imageGallerySix}
                alt=""
                className="follow-customer__img"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__mail">
            <p className="footer-text">SIGN UP TO OUR NEWSLETTER:</p>
            <input type="text" placeholder="your@email.com" />
            <button>subscribe</button>
          </div>

          <div className="footer__wrapper">
            <div className="footer__address">
              <p className="footer__address-text">
                Industrieweg 61, 1115 AD Duivendrecht, The Netherlands Dutch
                Chamber of Commerce # - 76631761
              </p>
              <p className="footer__address-phone" href="310208990462">
                +31(0)208990462
              </p>
            </div>

            <div className="footer__info">
              <div className="footer__company">
                <p className="footer__box-title">Company</p>
                <ul className="footer__box-list">
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>About Us</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Store Finder</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Careers</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Blog</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Recycling</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__help">
                <p className="footer__box-title">Help</p>
                <ul className="footer__box-list">
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Contact Us</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Warranty & Returns</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Manuals</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Dealer Application</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Track Orders</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>SUPER73 App</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__social">
                <p className="footer__box-title">Social</p>
                <ul className="footer__box-list">
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Twitter</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Facebook</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Instagram</p>
                    </a>
                  </li>
                  <li className="footer__box-list-item">
                    <a href="#">
                      <p>Youtube</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__privacy">
            <p className="footer__privacy-text">
              © 2022, SUPER73 Europe is a registered trademark and all rights
              are reserved.
            </p>
            <ul className="footer__box-list">
              <li className="footer__box-list-item">
                <a href="#">
                  <p>Privacy Policy </p>
                </a>
              </li>
              <li className="footer__box-list-item">
                <a href="#">
                  <p>Privacy Choices </p>
                </a>
              </li>
              <li className="footer__box-list-item">
                <a href="#">
                  <p>Cookie Notice </p>
                </a>
              </li>
              <li className="footer__box-list-item">
                <a href="#">
                  <p>Terms & Conditions</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
