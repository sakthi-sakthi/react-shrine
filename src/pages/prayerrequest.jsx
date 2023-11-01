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

function Prayerrequest() {
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
        const { name, email, prayerrequest } = formData;

        if (!name) {
            toast.error('Name is required');
        } else if (name.length < 3) {
            toast.error('Name should contain at least 3 letters');
        } else if (/[^A-Za-z\s.]/.test(name)) {
            toast.error('Name should only contain letters');
        } else if (!email) {
            toast.error('Email is required');
        } else if (!/^[A-Za-z0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
            toast.error('Email is not valid');
        } else if (!prayerrequest) {
            toast.error('Prayer Request is required');
        } else {
            setLoading(true);


            const dataToSend = {
                name,
                email,
                prayerrequest,
            };

            Axios.post(`${ApiUrl}/store/contact/`, dataToSend)
                .then((response) => {
                    console.log('Form submitted with data:', formData);
                    setFormData(initialFormData);
                    toast.success('Prayer Request submitted successfully');
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
                        <h2 style={{ color: "#760f08", fontWeight: "bold" }}>Liturgy Calendar</h2>
                    </h3>
                    <div className="brudcrums">
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}><Link to={"/"} style={{ textDecoration: "none" }}> Home &nbsp;»&nbsp;{" "}</Link></span>
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}>Liturgy Calendar</span>
                    </div>
                </div>
            </div>
            <br />
            <Container>
                <h2>Online Prayer Request</h2>
                <p>All Your Prayers and petitions will be offered during the Holy Masses on Saturday at the Shrine Basilica of our Lady of Good Health. May God bless you and grant all your requests through the intercession of Blessed Mother Mary.</p>
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
                            <br/>
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
                                <Form.Label><b>Prayer Request</b> <span style={{ color: "red" }}>*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Enter Your Prayer Request"
                                    name="prayerrequest"
                                    value={formData.prayerrequest}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </Form.Group>
                            <br/>
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
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
            <br />
            <Footer />
        </>
    );
}

export default Prayerrequest;
