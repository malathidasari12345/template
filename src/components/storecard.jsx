import React from 'react';
import { Card } from 'react-bootstrap';
import { CiShop } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../styles/store.css';

const StoreCard = ({ storeName, followers, totalProducts, index }) => {
    const img = [
        "https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1720359615%2Flovepik-taobao-tmall-e-commerce-banner-background-image_500699718_zslnfm.jpg&w=256&q=5",
        "https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721030144%2Fimage_40_mqzuz7.png&w=256&q=5",
        "https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1722081509%2FLWScreenShot_2024-01-21_at_6.56.05_PM_q5muzt.png&w=256&q=5",
        "https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1720359615%2Flovepik-taobao-tmall-e-commerce-banner-background-image_500699718_zslnfm.jpg&w=256&q=5",
        "https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721030144%2Fimage_40_mqzuz7.png&w=256&q=5"
    ];

    const sidebarItems = [
        { src: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1720359672%2Flogo_xve8m1.png&w=1920&q=75', title: 'Busy Mart' },
        { src: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721026536%2F3e7b3de38aae120166de3f23d2b59173_hgdasg.jpg&w=1920&q=75', title: 'Luxury Emporium' },
        { src: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721027409%2Fpngtree-shop-logo-vector-template-design-illustration-png-image_860078_p3nuel.jpg&w=1920&q=75', title: 'Elite Boutique' },
        { src: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721028367%2F1533-768x591_cdjsww.png&w=1920&q=75', title: 'Tech & Trend' },
        { src: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1722081505%2FLWScreenShot_2024-01-21_at_6.55.39_PM_ler5iy.png&w=1920&q=75', title: 'Best Cart' }
    ];

    const selectedImage = img[index % img.length]; 
    const sidebarImage = sidebarItems[index % sidebarItems.length]?.src;

    return (
        <Card style={{ width: '18rem', margin: '10px', borderRadius: '25px', position: 'relative' }}>
            <Card.Img variant="top" src={selectedImage} style={{ borderTopLeftRadius: "25px", borderTopRightRadius: "25px" , height:"100px" }} />

            {/* Sidebar image overlapping the main image */}
            {sidebarImage && (
                <img 
                    src={sidebarImage} 
                    alt={`Sidebar image for ${storeName}`} 
                    style={{ 
                        position: 'absolute',
                        top: '30%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)',
                        height: '70px', 
                        width: '70px', 
                        borderRadius: '50%', 
                        border: '2px solid white',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
                    }} 
                />
            )}

            <Card.Body>
                <br></br>
                <center>
                    <Card.Title className="store-name">{storeName}</Card.Title>
                </center>
                <div className="button-container">
                    <button className="view-store-button" aria-label={`View store ${storeName}`}>
                        <CiShop className="icon" /> View Store
                    </button>
                    <button className="follow-button" aria-label={`Follow ${storeName}`}>
                        <FaUser className="icon" /> Follow
                    </button>
                </div>
                <hr style={{ margin: '10px 0', border: '1px solid #ddd' }} />

                <div className="metrics">
                    <div className="metric">
                        <span className="metric-label">Followers</span>
                        <span className="metric-value">{followers}</span>
                    </div>
                    <div className="metric">
                        <span className="metric-label">Total Products</span>
                        <span className="metric-value">{totalProducts}</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default StoreCard;
