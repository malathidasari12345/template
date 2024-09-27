import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { CiStar } from "react-icons/ci";
import '../styles/bestselling.css';

const CardLayout = () => {
  const products = [
    {
      id: 1,
      title: 'LV Trainer Sneaker',
      price: '$247.00',
      percentage: -1,
      rating: 5.0,
      imageUrl: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721105274%2Flouis-vuitton--BP9U6PGC26_PM2_Front_view_dtxifa.avif&w=1920&q=75'
    },
    {
      id: 2,
      title: 'NBA LOS ANGELES LAKERS',
      price: '$58.00',
      percentage: -3,
      rating: 0,
      imageUrl: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721207000%2FBLL4515750-YEL_2_bpt1rq.webp&w=256&q=75'
    },
    {
      id: 3,
      title: 'Nike Air Jordan 4 Retro',
      price: '$257.00 ',
      percentage: -1,
      rating: 0,
      imageUrl: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721106056%2Fair-jordan-4-red-metallic-release-date_oq3c0n.webp&w=256&q=75'
    },
    {
      id: 4,
      title: "Gucci White Oversize T-Shirt",
      price: '$98.00 ',
      percentage: -18,
      rating: 0,
      imageUrl: "https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1720373848%2Flg_Do0unp0pziV9Nm5uhATiDNU8mmkk4KiYap65pVl2_fmlslu_qroum7_1_usffpf.webp&w=96&q=75"
    }
  ];

  return (
    <Container>
      {/* Header Section */}
      <Row className="d-flex align-items-center mb-4 justify-content-between">
        <Col xs={12} className="text-center text-md-start">
          <h1 className="text-center text-md-start" style={{ fontWeight: "bold" }}>
            Best Selling Products
          </h1>
          <h6 className="text-center text-md-start text-muted">
            Special products in this month
          </h6>
        </Col>
        
        {/* "View More" button for large devices */}
        <Col className="d-none d-lg-flex justify-content-end">
          <button className='buttonstyle'>
            View More
          </button>
        </Col>
      </Row>

      {/* Products Section */}
      <Row className="mt-4">
        {products.map((product) => (
          <Col key={product.id} xs={6} sm={6} md={3} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                
                {/* Rating Section */}
                <div className="d-flex align-items-center mb-2">
                  <CiStar />
                  <span className="ms-2">{product.rating}</span>
                </div>

                {/* Price and Percentage Section */}
                <div className="d-flex align-items-center">
                  <b>{product.price}</b>
                  <span className="ms-2" style={{ color: "#e9436c" }}>
                    ({product.percentage}%)
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* "View More" button for medium and smaller devices */}
      <center className="d-lg-none">
        <button className="view-more">View More</button>
      </center>
    </Container>
  );
};

export default CardLayout;
