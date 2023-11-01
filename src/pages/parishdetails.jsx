import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ApiUrl from '../components/API/Api';
import { Link } from 'react-router-dom';

function Parishdetails() {
    const [parishData, setParishData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const fatchParish = () => {
        fetch(`${ApiUrl}/get/post/4`)
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setParishData(resp.data);
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    useEffect(() => {
        fatchParish();
    }, []);
    const openImagePopup = (image) => {
        setSelectedImage(image);
    };

    const closeImagePopup = () => {
        setSelectedImage(null);
    };
    return (
        <>
            <Header />
            <div className="home-mother">
                <div className="container" style={{ padding: "30px" }}>
                    <h3 className="entry-title motherhouse">
                        <h2 style={{ color: "#760f08", fontWeight: "bold" }}>Parish Details</h2>
                    </h3>
                    <div className="brudcrums">
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}><Link to={"/"} style={{ textDecoration: "none" }}> Home &nbsp;»&nbsp;{" "}</Link></span>
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}>Parish Details</span>
                    </div>
                </div>
            </div>
            <div className="container subpage">
                <div className="row">
                </div>
                <div className="container">
                    <div className="row">
                        {parishData?.map((item) => (
                            <div key={item.id} className="col-lg-4">
                                <div className="gallery-item">
                                    <img
                                        src={item.image}
                                        style={{
                                            width: "auto",
                                            height: "250px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => openImagePopup(item.image)}
                                        alt={item.alt_tag || "Image"}
                                    />
                                    <div className="image-details">
                                        <h5>
                                            <b>{item.title || "Image"}</b>
                                        </h5>
                                        <h6>
                                            <b dangerouslySetInnerHTML={{ __html: item.content }}></b>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {selectedImage && (
                        <div className="image-popup-overlay">
                            <span className="close-icon" onClick={closeImagePopup}>
                                &times;
                            </span>
                            <div className="image-popup">
                                <img src={selectedImage} alt="Popup" style={{
                                    width: "auto",
                                    height: "250px",
                                    cursor: "pointer",
                                }} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Parishdetails
