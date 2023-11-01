import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import Footer from '../components/footer';
import ApiUrl from '../components/API/Api';

function Contact() {
    const initialFormData = {
        name: '',
        email: '',
        mobile: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message,mobile } = formData;

        if (!name) {
            toast.error('Name is required');
        } else if (name.length < 3) {
            toast.error('Name should contain at least 3 letters');
        } else if (/[^A-Za-z\s.]/.test(name)) {
            toast.error('Name should only contain letters');
        } else if (!mobile) {
            toast.error('Mobile Number is required');
        } else if (!/^\d{10}$/.test(mobile)) {
            toast.error('Mobile Number must be 10 digits and contain only numbers');
        } else if (!email) {
            toast.error('Email is required');
        } else if (!/^[A-Za-z0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
            toast.error('Email is not valid');
        } else if (!message) {
            toast.error('Message is required');
        } else {
            setLoading(true);


            const dataToSend = {
                name,
                email,
                message,
                mobile,
            };

            Axios.post(`${ApiUrl}/store/contact/`, dataToSend)
                .then((response) => {
                    console.log('Form submitted with data:', formData);
                    setFormData(initialFormData);
                    toast.success('Contact submitted successfully');
                })
                .catch((error) => {
                    toast.error('Failed to submit the form: ' + error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <Header />
            <div className="home-mother">
                <div className="container" style={{ padding: "30px" }}>
                    <h3 className="entry-title motherhouse">
                        <h2 style={{ color: "#760f08", fontWeight: "bold" }}>Contact</h2>
                    </h3>
                    <div className="brudcrums">
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}><Link to={"/"} style={{ textDecoration: "none" }}> Home &nbsp;»&nbsp;{" "}</Link></span>
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}>Contact</span>
                    </div>
                </div>
            </div>
            <br />
            <Container>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8037942492233!2d77.60184397584203!3d12.984397714596007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1663d65f53f1%3A0xc492b89e9704c3c2!2sSt.%20Mary&#39;s%20Basilica%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1698747333866!5m2!1sen!2sin"
                    width="1200"
                    height="500"
                    allowfullscreen=""
                    loading="lazy"
                    title="shrine"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 style={{ color: "#6ec1e4" }}>Parish Timing</h2>
                            <p><strong>Monday – Friday:</strong> 9am – 10pm</p>
                            <p><strong>Saturday:</strong> 10am – 8pm</p>
                        </div>
                        <div className="col-lg-6">
                            <h2 style={{ color: "#6ec1e4" }}>Mass Timing</h2>
                            <p><strong>Monday – Friday:</strong> 9am – 10pm</p>
                            <p><strong>Saturday:</strong> 10am – 8pm</p>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col xs={12} md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label><b>Name</b> <span style={{ color: "red" }}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label><b>Email</b> <span style={{ color: "red" }}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Enter Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label><b>Mobile</b> <span style={{ color: "red" }}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="mobile"
                                    placeholder="Enter Mobile Number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label><b>Message</b> <span style={{ color: "red" }}>*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Enter Your Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </Form.Group>
                            <br />
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? (
                                    <>
                                        <span className="loader">
                                            <FontAwesomeIcon icon={faSpinner} spin />
                                        </span>
                                        &nbsp;Submitting...
                                    </>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </Form>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Address:</h4>
                        <p>
                            ST. MARY’S BASILICA<br />
                            Msgr. F. Noronha Road,<br />
                            Shivaji Nagar,<br />
                            BENGALURU – 560 051<br />
                            KARNATAKA, SOUTH INDIA.<br /><br />
                            <b>Mobile : 089513 02508</b><br /><br />
                            <b>Email : shrinebasilicabangalore@gmail.com</b>
                        </p>
                        <Col xs={12} md={6}>
                            <h4>Follow Us:</h4>
                            <div>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook fa-1x mr-4"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter fa-1x mr-4"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram fa-1x mr-4"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin fa-x"></i>
                                </a>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
            <br />
            <Footer />
        </>
    )
}

export default Contact
