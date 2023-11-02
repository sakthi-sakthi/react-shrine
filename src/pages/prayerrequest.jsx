import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import ApiUrl from "../components/API/Api";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
function Prayerrequest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  function onSubmitcontactform(data, e) {
    axios
      .post(`${ApiUrl}/store-prayerrequest`, data)
      .then((Response) => {
        console.log(Response);
        if (Response.status === 201) {
          Swal.fire("Submited Successfully..!", "", "success");
          e.target.reset();
          //   navigate("/contact");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err.message,
        });
      });
  }

  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <h2 style={{ color: "#760f08", fontWeight: "bold" }}>
              Liturgy Calendar
            </h2>
          </h3>
          <div className="brudcrums">
            <span
              className="pagename"
              style={{ color: "#000", fontWeight: "bold" }}>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                {" "}
                Home &nbsp;»&nbsp;{" "}
              </Link>
            </span>
            <span
              className="pagename"
              style={{ color: "#000", fontWeight: "bold" }}>
              Liturgy Calendar
            </span>
          </div>
        </div>
      </div>
      <br />
      <Container>
        <h2>Online Prayer Request</h2>
        <p>
          All Your Prayers and petitions will be offered during the Holy Masses
          on Saturday at the Shrine Basilica of our Lady of Good Health. May God
          bless you and grant all your requests through the intercession of
          Blessed Mother Mary.
        </p>
        <Row>
          <Col xs={12} md={6}>
            <form
              className="php-email-form"
              onSubmit={handleSubmit(onSubmitcontactform)}>
              <div className="row">
                <div className="form-group ">
                  <label htmlFor="name">
                    <b>Your Name</b>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Name"
                    id="name"
                    {...register("name", { required: true })}
                    aria-invalid={errors?.name ? "true" : "false"}
                  />
                  {errors?.name?.type === "required" && (
                    <div className="text-danger text_error">
                      <label className="errlabel">Name is required</label>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="name">
                    <b>Your Email</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email Address"
                    id="email"
                    {...register("email", { required: true })}
                    aria-invalid={errors?.email ? "true" : "false"}
                  />
                  {errors?.email?.type === "required" && (
                    <div className="text-danger text_error">
                      <label className="errlabel">Email is required</label>
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  <b>Prayer Request</b>
                </label>
                <textarea
                  className="form-control"
                  name="prayer_request"
                  placeholder="Enter Your Prayer Request"
                  rows={10}
                  defaultValue={""}
                  {...register("prayer_request", { required: true })}
                  aria-invalid={errors?.prayer_request ? "true" : "false"}
                />
                {errors?.prayer_request?.type === "required" && (
                  <div className="text-danger text_error">
                    <label className="errlabel">
                      Prayer Request is required
                    </label>
                  </div>
                )}
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-success">
                  Send Message
                </button>
              </div>
            </form>
          </Col>
          <Col xs={12} md={6}>
            <h4>Address:</h4>
            <p>
              ST. MARY’S BASILICA
              <br />
              Msgr. F. Noronha Road,
              <br />
              Shivaji Nagar,
              <br />
              BENGALURU – 560 051
              <br />
              KARNATAKA, SOUTH INDIA.
              <br />
              <br />
              <b>Mobile : 089513 02508</b>
              <br />
              <br />
              <b>Email : shrinebasilicabangalore@gmail.com</b>
            </p>
          </Col>
        </Row>
      </Container>

      <br />
      <Footer />
    </>
  );
}

export default Prayerrequest;
