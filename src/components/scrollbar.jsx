import React from "react";

function Scrollbar() {
  return (
    <>
      <div className="scrollbar">
        <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
          <div className="col-4 col-lg-2 d-flex">
            <div class="label ripple">Flash News</div>
          </div>
          <div className="col-8 col-lg-10 d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
            <div className="marqueenews">
              <div className="marquee">
                <p>
                  <span
                    id="flnews_id"
                    className="fas fa-forward scroolnews"
                    style={{ color: "#feaf32" }}
                  >
                    {" "}
                  </span>
                  &nbsp;&nbsp;Koramangala 8th Block parish council & SCC member
                  election
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scrollbar;
