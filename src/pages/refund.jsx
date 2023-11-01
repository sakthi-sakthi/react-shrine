import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'

function Refund() {
    return (
        <>
            <Header />
            <div className="home-mother">
                <div className="container" style={{ padding: "30px" }}>
                    <h3 className="entry-title motherhouse">
                        <h2 style={{ color: "#760f08", fontWeight: "bold" }}>Refund & Cancellation</h2>
                    </h3>
                    <div className="brudcrums">
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}><Link to={"/"} style={{ textDecoration: "none" }}> Home &nbsp;»&nbsp;{" "}</Link></span>
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}>Refund & Cancellation</span>
                    </div>
                </div>
            </div>
            <br />
            <div className="container" style={{ maxWidth: "1300px" }}>
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <div className="M-flex">
                                <div
                                    style={{ marginTop: "20px" }}
                                />
                                <p>We, Bosco Soft Technologies Pvt Ltd in no way take the responsibility for your financial transactions refund and cancellations. You need to contact the respective St.Mary’s Basilica Bangalore for all your queries related to the cancellation and refunds of your transaction with the details.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Refund
