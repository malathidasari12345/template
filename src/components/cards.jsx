import React from 'react';
import "../styles/card.css"

const Card = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* First Card */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm border-0 position-relative">
            <img
              src="https://nextall.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-1.b70b1232.png&w=1920&q=75"
              className="img-fluid"
              alt="product"
            />
            <div className="card-body position-absolute top-0 start-0 p-4 text-light card-overlay">
              <h5 className="card-title ">Shop the latest<br></br> from top brands</h5>
              <p className="card-text">Fully Comfortable and Smooth Product</p>
              <button className="btn btn-danger mt-3 styled-button">View Collection</button>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm border-0 position-relative">
            <img
              src="https://nextall.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-2.b3777bbb.png&w=1920&q=75"
              className="img-fluid"
              alt="product"
            />
            <div className="card-body position-absolute top-0 start-0 p-4 text-light card-overlay">
              <h5 className="card-title">Shop the latest <br></br> from top brands</h5>
              <p className="card-text">Fully Comfortable and Smooth Product</p>
              <button className="btn btn-primary mt-3 styled-button">View Collection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
