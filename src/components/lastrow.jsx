import React, { useState, useEffect } from "react";

function Lastrow() {
  const [massSchedule, setMassSchedule] = useState(null);

  useEffect(() => {
    fetch("https://cristolive.org/api/liturgy/17570")
      .then((response) => response.json())
      .then(({ data }) => {
        setMassSchedule(data);
      })
      .catch((error) => {
        console.error("Error fetching Mass Schedule data: ", error);
      });
  }, []);

  return (
    <div className="row mt-2">
      <div className="col-md-6">
        <div className="row donate_wrapper">
          <div className="col-sm-6 col-md-5">
            <h4 className="news-title">NEWS & EVENTS</h4>
          </div>
          <div className="col-6 col-md-7">
            <h4 className="mass-schedule">MASS SCHEDULE</h4>
            <div className="scrollable-content" id="massprog">
              {massSchedule && (
                <div>
                  {massSchedule.map((languageMass, index) => (
                    <div
                      className="mass"
                      key={index}
                      style={{ margin: "0 0 12px 0" }}>
                      <h3
                        style={{
                          margin: "0 0 0 0",
                          fontSize: "19px",
                          fontWeight: 600,
                          lineHeight: "26px",
                          color: "#4691ce",
                          textShadow: "none",
                          cursor: "pointer",
                        }}>
                        {new Date(languageMass.liturgy_on).toLocaleString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </h3>
                      <span
                        className="schedule"
                        style={{
                          fontSize: "16px",
                          color: "#333333",
                          fontWeight: 500,
                          lineHeight: "26px",
                          textShadow: "none",
                          cursor: "pointer",
                        }}>
                        {languageMass?.mass?.map((masstime, masstimeIndex) => (
                          <span key={masstimeIndex}>
                            {masstime.language} -
                            {masstime?.mass_detail?.map((time, timeIndex) => (
                              <span className="ms-2" key={timeIndex}>
                                {time?.mass_time}
                                {timeIndex < masstime.mass_detail.length - 1
                                  ? ","
                                  : ""}
                              </span>
                            ))}
                            {masstimeIndex < languageMass.mass.length - 1 ? (
                              <br />
                            ) : (
                              ""
                            )}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <img
          src="/images/logos/img/IMG_1824-scaled.jpg"
          width="100%"
          height="500"
          alt=""
        />
      </div>
    </div>
  );
}

export default Lastrow;
