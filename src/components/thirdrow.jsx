import React from "react";
import { Link } from "react-router-dom";

function Thirdrow() {
  return (
    <>
      <div className="row mt-2">
        <div className="col-md-6">
          <div className="position-relative image_overlay">
            <img
              className="w-100"
              height={"400"}
              src="images/logos/img/church-1.jpg"
              alt=""
              style={{ objectFit: "cover"}}
            />
            <h1 className="text-white position-absolute top-50 start-50 translate-middle"><Link to={"/gallery"} style={{ textDecoration: "none",color:"#fff" }}>GALLERY</Link></h1>
          </div>
        </div>
        <div className="col-md-6">
          <div className="position-relative image_overlay">
            <img
              className="w-100"
              height={"400"}
              src="images/logos/img/darkened-lent-tile.jpg"
              alt=""
            />
            <h1 className="text-white position-absolute top-50 start-50 translate-middle"><Link to={"/masstime"} style={{ textDecoration: "none", color: "#fff" }}>MASS TIMING</Link></h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thirdrow;
