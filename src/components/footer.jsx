import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-widgets">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="section-heading">
                  <h2 className="entry-title">About Us</h2>
                </div>
                <div className="row">
                  <div className="col-4">
                    <img
                      src="images/logos/logo-of-Basilica.png"
                      alt=""
                      style={{
                        display: "block",
                        marginLeft: "-3rem",
                        width: "10rem",
                        // marginRight: "auto",
                        height: "10rem",
                      }}
                    />
                  </div>
                  <div className="col-8">
                    <p
                      style={{
                        color: "white",
                        textAlign: "justify ",
                        fontSize: "14px",
                      }}
                    >
                      The formation of the city of Bangalore and the beginning
                      of St. Mary’s Church are found to be interlinked in the
                      History of Karnataka. During the 17th Century, few
                      Christians’
                    </p>
                  </div>
                  <p
                    style={{
                      color: "white",
                      textAlign: "justify",
                      fontSize: "14px",
                    }}
                  >
                    hailing from Ginjee in the state of Tamil Nadu, settle down
                    in the fertile land and gave the name ‘Bili akki palli’
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="foot-latest-news">
                  <div className="section-heading">
                    <h2 className="entry-title">Quick Links</h2>
                  </div>
                  <ul className="quick-links">
                    <li>
                      <i className="fas fa-history"></i>
                      <Link to={"/events-and-celebrations"}>About Us</Link>
                    </li>
                    <li>
                      <i className="fas fa-calendar"></i>
                      <Link to={"/overseas-mission"}>Liturgy Calendar</Link>
                    </li>
                    <li>
                      <i className="fas fa-play"></i>
                      <Link to={"/scb-associates"}>Youtube</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="foot-contact">
                  <div className="section-heading">
                    <h2 className="entry-title">Contact Us</h2>
                  </div>
                  <ul>
                    <li>
                      <i className="fa fa-phone mr-2" />
                      <Link to={"tel:+91089513 02508"}>+91 089513 02508</Link>
                    </li>
                    <li>
                      <i className="fa fa-envelope mr-2" />
                      <Link to={"mailto:shrinebasilicabangalore@gmail.com"}>
                        &nbsp;&nbsp;shrinebasilicabangalore@gmail.com
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-map-marker mr-2" />
                      <span>
                        <p style={{ color: "#fff" }}>
                          ST. MARY’S BASILICA, <br />
                          Msgr. F. Noronha Road,
                          <br /> Shivaji Nagar ,
                          <br />
                          BENGALURU – 560 051
                          <br />
                          KARNATAKA, SOUTH INDIA.
                        </p>
                        <li>
                          <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter mr-2" />
                          </a>
                          &nbsp;
                          <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-google-plus mr-2" />
                          </a>
                          &nbsp;
                          <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook mr-2" />
                          </a>
                          &nbsp;
                          <a
                            href="https://www.youtube.com/channel/UCch65k5prROvL_RCN5f-oYw"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="foot-latest-news">
                  <div className="section-heading">
                    <h2 className="entry-title">Our Location</h2>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8037942492233!2d77.60184397584203!3d12.984397714596007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1663d65f53f1%3A0xc492b89e9704c3c2!2sSt.%20Mary&#39;s%20Basilica%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1698747333866!5m2!1sen!2sin"
                    width="250"
                    height="150"
                    allowfullscreen=""
                    loading="lazy"
                    title="shrinechurch"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "-17px" }}>
              <p
                className="text-center"
                style={{ fontSize: "14px", color: "white" }}
              >
                Copyright © 2023 St . Mary’s Basilica , All rights reserved.
                Powered by
                <a
                  className="tech"
                  style={{ color: "#f6bb79" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.boscosofttech.com/"
                >
                  &nbsp;Boscosofttech
                </a>
                &nbsp; &nbsp; &nbsp;
                <a href="/" style={{ color: "#fff" }}>
                  Privacy Policy
                </a>
                &nbsp; &nbsp;
                <a href="/" style={{ color: "#fff" }}>
                  Refund Cancellation
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
