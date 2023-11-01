import React from "react";
import { Link } from 'react-router-dom';

function Firstrow() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div class="row donate_wrapper">
            <div class="col-sm-6 col-md-5 pe-0">
              <img className="w-100" height={"94%"} src="/images/logos/img/banks-religion-AML-1200x675-1-1024x576.jpg" alt="" />
            </div>
            <div class="col-6 col-md-7 ps-0">
              <div className="about_content">
                <h3><a href="https://payonline.shrinebasilicabangalore.org/donation/" style={{ textDecoration: "none", color: "#fff" }} target="_blank" rel="noreferrer">Donate</a></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="row donate_wrapper">
            <div class="col-sm-6 col-md-5 pe-0">
              <img className="w-100" height={"94%"} src="/images/logos/img/Schedule-Change.jpg" alt="" />
            </div>
            <div class="col-6 col-md-7 ps-0">
              <div className="about_contentnew">
                <h3><Link to={"/liturgycalendar"} style={{ textDecoration: "none", color: "#fff" }}>Mass Booking</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Firstrow;
