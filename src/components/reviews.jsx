import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import "../styles/review.css";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="image-section">
        <div className="overlay-content">
          <h1>Let's explore customer sentiments towards our offerings</h1>
          <h6 className="text-muted">Discover what customers are saying about our products. Dive into the feedback on the quality and performance of our offerings. Gain insights into how our customers perceive our products and their overall satisfaction. Your opinions matter, and we're here to listen.</h6>
          <div className="arrow-icons">
            <FaArrowLeft className=" arrow-icon" />
            <FaArrowRight className=" arrow-icon" />
          </div>
        </div>
      </div>
      <div className="review-card">
        <div className="stars-section">
          <CiStar className="star-icon" />
          <CiStar className="star-icon" />
          <CiStar className="star-icon" />
          <CiStar className="star-icon" />
          <CiStar className="star-icon" />
        
        </div>
        <h6>Exceptional shopping experience! The user-friendly interface and seamless navigation make finding and purchasing products a breeze. As a Marketing Manager, I appreciate the...</h6>
        <img 
          src="https://nextall.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.8522c4f5.png&w=128&q=75" 
          alt="logo"
          className="avatar"
        />
        <h4>Jhon Thompson</h4>
        <h6 className='text-muted'>Web Developer</h6>
      </div>
    </div>
  );
}

export default Reviews;
