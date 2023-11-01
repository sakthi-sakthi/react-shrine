import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useEffect, useState } from "react";
import ApiUrl from '../components/API/Api';
import { Link } from 'react-router-dom';


function Gallery() {
    const [galleryData, setGalleryData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const fatchGallery = () => {
        fetch(`${ApiUrl}/get/gallery_images`)
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setGalleryData(resp.data);
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    useEffect(() => {
        fatchGallery();
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
                        <h2 style={{ color: "#760f08", fontWeight: "bold" }}>Gallery</h2>
                    </h3>
                    <div className="brudcrums">
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}><Link to={"/"} style={{ textDecoration: "none" }}> Home &nbsp;»&nbsp;{" "}</Link></span>
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}>Gallery</span>
                    </div>
                </div>
            </div>
            <div className="container subpage">
                <div className="row">
                </div>
                <div className="container">
                    <div className="row">
                        {galleryData?.map((item) => (
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
                                        <p>
                                            <b>{item.title || "Image"}</b>
                                        </p>
                                        <p>
                                            <b>{item.date}</b>
                                        </p>
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

export default Gallery
