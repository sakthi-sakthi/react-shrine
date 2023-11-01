import React from "react";
import { Link } from "react-router-dom";
const Secondrow = () => {
  return (
    <div className="row mt-2">
      <div className="col-md-6">
        <div class="row donate_wrapper">
          <div class="col-sm-6 col-md-5">
            <h4 className="rector-title">Rector Cum Parish Priest</h4>
            <img
              height={"366"}
              width={"251"}
              src="https://shrinehtml.pages.dev/wp-content/uploads/2022/06/Rev.-Fr.-Martin-Kumar-Rector-cum-Parish-Priest-251x300.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-md-7">
            <h4 className="rector-message">Rector Message</h4>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div class="row donate_wrapper">
          <div class="col-sm-6 col-md-6">
            <div className="position-relative">
              <img
                className="w-100"
                height={"400"}
                src="https://shrinehtml.pages.dev/wp-content/uploads/2022/04/prayer-request-1.jpg"
                alt=""
              />
              <h4 className="text-black position-absolute top-50 start-50 translate-middle"><b><Link to={"/prayer-request"} style={{ textDecoration: "none", color: "#fff" }}>PRAYER REQUEST</Link></b></h4>
            </div>
          </div>
          <div class="col-6 col-md-6">
            <div className="position-relative">
              <img
                className="w-100"
                height={"400"}
                src="https://shrinehtml.pages.dev/wp-content/uploads/2022/04/church-1.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <h4 className="text-black position-absolute top-50 start-50 translate-middle"><b><Link to={"/parish-details"} style={{ textDecoration: "none", color: "#fff" }}>PARISH DETAILS</Link></b></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondrow;
