import React from 'react';
import "../styles/categories.css";

const TopCategories = () => {
  return (
    <>
      <div className="top-categories">
        <h1>Top Categories</h1>
        <button className="view-more-button">View More</button>
      </div>
      <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>

      <div className='images'>
        <div className='image-item'>
          <img src="https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721032291%2Ff96f71d05e4b0e826aa4d03dd396df99_mmuxvr.jpg&w=750&q=5" alt="EyeWears" />
          <p className="image-label">EyeWears</p>
        </div>
        <div className='image-item'>
          <img src="https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721031925%2F035b600c93b37df75e8b1d409ee51a25_dyb2x1_anem9z_i9yb8b.webp&w=750&q=5" alt="Shirts" />
          <p className="image-label">Shirts</p>
        </div>
        <div className='image-item'>
          <img src="https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721031859%2F6514ed14b66fe0035a30234c-zkccnuk-cargo-pants-for-men-solid-casual_aplpso.jpg&w=750&q=5" alt="Pants" />
          <p className="image-label">Pants</p>
        </div>
        <div className='image-item'>
          <img src="https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721031355%2FGrey-Hyper-Bolt-Running-Shoes-for-Men-2_g7j9zh.jpg&w=750&q=5" alt="Shoes" />
          <p className="image-label">Shoes</p>
        </div>
        <div className='image-item'>
          <img src="https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721031231%2F23_A_Caps_FAC23-035_1_lws8ar.webp&w=750&q=5" alt="Caps" />
          <p className="image-label">Caps</p>
        </div>
        <div className='image-item'>
          <img src="https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721031156%2Fsamsung_galaxy_a52_kuwait_blue_1_jnjg4q_sbppbn_ro9nd0.jpg&w=750&q=5" alt="Mobile" />
          <p className="image-label">Mobile</p>
        </div>

       
      </div>
       {/* View More button visible only on mobile devices */}
       <center>
          <button className="view-more" >View More</button>
        </center>
    </>
  );
};

export default TopCategories;
