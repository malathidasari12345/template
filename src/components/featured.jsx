import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { CiStar } from "react-icons/ci";
import '../styles/bestselling.css';

const CardLayout2 = () => {
  const products = [
    {
      id: 1,
      title: 'Gucci White Oversize T-shirt',
      price: '$98.0',
      percentage: -18,
      rating: 0,
      imageUrl: "https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1720373848%2Flg_Do0unp0pziV9Nm5uhATiDNU8mmkk4KiYap65pVl2_fmlslu_qroum7_1_usffpf.webp&w=256&q=75"
    },
    {
      id: 2,
      title: 'IPhone 15',
      price: '$996.00',
      percentage: -0,
      rating: 4.0,
      imageUrl:"https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721059025%2FREGEN-iPhone11-Backfront-Purple-Pakistan_yzfjxt_n9ajp9_at7ea1.webp&w=750&q=75"
    },
    {
      id: 3,
      title: 'IPhone 11',
      price: '$395.0 ',
      percentage: -1,
      rating: 0,
      imageUrl: "https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721059020%2Fiphone-11-965232_zkxiio_ngtrxe_ss4sqs.webp&w=256&q=75"
    },
    {
      id: 4,
      title: 'Puma Unisex Metal Cat Cap ',
      price: '$19.0 ',
      percentage: -14,
      rating: 0,
      imageUrl: "https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721059514%2FxJoX84ssC1xdC0VNqLtr06kDJwiGNFUm_v0dur9.jpg&w=256&q=75"
    }
    ];

  return (
    <Container>
      {/* Header Section */}
      <Row className="d-flex align-items-center mb-4 justify-content-between">
        <Col>
          <h1 style={{ fontWeight: "bold" }}>Featured Products</h1>
          <h6 className='text-muted'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</h6>
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

export default CardLayout2;
