import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { CiStar } from "react-icons/ci";
import '../styles/bestselling.css';
import StoreCard from './storecard';
 

const CardLayout5 = () => {
  {/* card */}
  const stores = [
    { name: 'Busy Mart', followers: 2, totalProducts: 4 },
    { name: 'Luxury Emporium', followers: 0, totalProducts: 9 },
    { name: 'Elite Boutique', followers: 0, totalProducts: 5 },
    { name: 'Tech & Trend', followers: 0, totalProducts: 3 },
    { name: 'Bestcart', followers: 1, totalProducts: 3 },
];

  return (
    <Container>
      {/* Header Section */}
      <Row className="d-flex align-items-center mb-4 justify-content-between">
        <Col>
          <h1 style={{ fontWeight: "bold" }}>Best Shops</h1>
          <h6 className='text-muted'>Our Highest Rated Shops Where You Can Find What You Are Looking For</h6>
        </Col>
        
        <Col className="d-none d-lg-flex justify-content-end">
          <button className='buttonstyle'>
            View More
          </button>
        </Col>
      </Row>
    
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {stores.map((store, index) => (
                <StoreCard
                    key={index}
                    storeName={store.name}
                    followers={store.followers}
                    totalProducts={store.totalProducts}
                    index={index} 
                />
            ))}
        </div>
    </Container>
  );
};

export default CardLayout5;
