import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  return (
    <>
      <header className="site-header">
        <div className="top-header-bar">
          <div className="container">
            <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
              <div className="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <div className="header-bar-email" style={{ fontSize: "15px" }}>
                  <i
                    className="fa fa-envelope"
                    style={{ color: "#f6c93f" }}
                  ></i>
                  <a href="mailto:shrinebasilicabangalore@gmail.com">
                    <span
                      className="__cf_email__"
                      style={{ marginLeft: "0.5rem" }}
                    >
                      shrinebasilicabangalore@gmail.com
                    </span>
                  </a>
                </div>
                <div
                  className="header-bar-text align-items-center justify-content-center"
                  style={{ fontSize: "15px" }}
                >
                  <i className="fa fa-phone" style={{ color: "#f6c93f" }}></i>
                  <a
                    href="tel:+91089513 02508"
                    style={{ marginLeft: "0.3rem" }}
                  >
                    +91 089513 02508
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                <div className="social-icons">
                  <div className="social-icon">
                    <a
                      href="https://www.facebook.com/sharer.php?u=https://stcharleschennai.com/index.php/events-and-celebrations"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a
                      href="https://www.youtube.com/channel/UCch65k5prROvL_RCN5f-oYw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a
                      href="https://feebook.southindianbank.com/FeeBookUser/userhome"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-donate" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="sp-section-2">
          <div className="container">
            <div className="row ">
              <div id="sp-left-logo" className="col-xs-1 col-sm-1 col-md-1">
                <div className="sp-column">
                  <div className="sp-module right-menu-in">
                    <div className="sp-module-content">
                      <div className="custom right-menu-in">
                        <p>
                          <img
                            style={{
                              display: "block",
                              marginLeft: "-55px",
                              height: "8rem",
                              maxWidth: "105px",
                              maxHeight: "105px",
                            }}
                            src="images/logos/arcbishop.png"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sp-left-logo" className="col-xs-1 col-sm-1 col-md-1">
                <div className="sp-column">
                  <div className="sp-module right-menu-in">
                    <div className="sp-module-content">
                      <div className="custom right-menu-in">
                        <p>
                          <img
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                              height: "8rem",
                              maxWidth: "150px",
                              maxHeight: "125px",
                            }}
                            src="images/logos/church.png"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sp-center-in" className="col-xs-8 col-sm-8 col-md-8">
                <div className="sp-column">
                  <div className="sp-module main-tile-text">
                    <div className="sp-module-content">
                      <div className="custom main-tile-text">
                        <div className="text-center">
                          <h1 style={{ textAlign: "center" }}>
                            St . Mary's Basilica
                            <br />
                          </h1>
                          <h2 className="site-description">
                            Bangalore - India
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sp-right-logo" className="col-xs-2 col-sm-2 col-md-2">
                <div className="sp-column">
                  <div className="sp-module">
                    <div className="sp-module-content">
                      <div className="custom">
                        <p>
                          <img
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                              height: "8rem",
                              maxWidth: "105px",
                              maxHeight: "105px",
                            }}
                            src="images/logos/pope.png"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <nav class="navbar navbar-expand-lg navbar-light custom-menu">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse header-align-center"
            id="navbarNav"
          >
            <ul class="navbar-nav" style={{ cursor: "pointer" }}>
              <li
                className={`nav-item ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === "/about"
                  ? "active"
                  : ""
                }`}>
                <NavLink
                  to="/about"
                  className="nav-link"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </NavLink>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/channel/UCch65k5prROvL_RCN5f-oYw"
                  className="nav-link"
                  target="_blank"
                >
                 Youtube
                </Link>
              </li>

              <li className={`nav-item`}>
                <Link to="/liturgycalendar" className="nav-link">
                  Liturgy Calendar
                </Link>
              </li>

              <li>
                <Link
                  to="https://feebook.southindianbank.com/FeeBookUser/org?id=441"
                  className="nav-link"
                  target="_blank"
                >
                  Donate
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === "/contact"
                ? "active"
                : ""
                }`}>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="http://epdata.stcharleschennai.com/web/login"
                  className="nav-link"
                  target="_blank"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
