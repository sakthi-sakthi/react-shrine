import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import ApiUrl from '../components/API/Api';
import { Link } from 'react-router-dom';

function About() {
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        axios.get(`${ApiUrl}/get/Pages`)
            .then(response => {
                setAboutData(response?.data?.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Header />
            <div className="home-mother">
                <div className="container" style={{ padding: "30px" }}>
                    <h3 className="entry-title motherhouse">
                        <h2 style={{ color: "#760f08", fontWeight: "bold" }}>About Us</h2>
                    </h3>
                    <div className="brudcrums">
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}><Link to={"/"} style={{ textDecoration: "none" }}> Home &nbsp;»&nbsp;{" "}</Link></span>
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}>About Us</span>
                    </div>
                </div>
            </div>
            <div className="container" style={{ maxWidth: "1300px" }}>
                <div className="row">
                    {aboutData?.map((page, index) => (
                        <div key={index} className="col-lg-12">
                            <div>
                                <div className="M-flex">
                                    <div
                                        style={{ marginTop: "20px" }}
                                        dangerouslySetInnerHTML={{ __html: page.content }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
