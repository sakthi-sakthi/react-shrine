import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'

function Privacy() {
    return (
        <>
            <Header />
            <div className="home-mother">
                <div className="container" style={{ padding: "30px" }}>
                    <h3 className="entry-title motherhouse">
                        <h2 style={{ color: "#760f08", fontWeight: "bold" }}>Privacy Policy</h2>
                    </h3>
                    <div className="brudcrums">
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}><Link to={"/"} style={{ textDecoration: "none" }}> Home &nbsp;»&nbsp;{" "}</Link></span>
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}>Privacy Policy</span>
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
                                <p><b>Who we are</b><br/>
                                    Our website address is: <b>https://shrinebasilicabangalore.org/</b><br /><br />

                                    What personal data we collect and why we collect it<br /><br />

                                    <b>Comments</b><br />
                                    When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.<br /><br />

                                    An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.<br /><br />

                                    <b>Media</b><br />
                                    If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.<br /><br />

                                    <b>Contact forms Cookies</b><br />

                                    If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.<br /><br />

                                    If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.<br /><br />

                                    When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.<br /><br />

                                    If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.<br /><br />

                                    <b>Embedded content from other websites</b><br />
                                    Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.<br /><br />

                                    These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.<br /><br />

                                    <b>Analytics</b><br />
                                    Who we share your data with
                                    How long we retain your data
                                    If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.<br /><br />

                                    For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.<br /><br />

                                    What rights you have over your data
                                    If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.<br /><br />

                                    Where we send your data
                                    Visitor comments may be checked through an automated spam detection service.<br /><br />

                                    Your contact information<br />
                                    Additional information<br />
                                    How we protect your data<br />
                                    What data breach procedures we have in place<br />
                                    What third parties we receive data from<br />
                                    What automated decision making and/or profiling we do with user data<br />
                                    Industry regulatory disclosure requirements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Privacy
