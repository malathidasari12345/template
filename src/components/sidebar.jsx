import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const SidebarCarousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarItems = [
    { src: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1720359672%2Flogo_xve8m1.png&w=1920&q=75', title: 'Busy Mart' },
    { src: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721026536%2F3e7b3de38aae120166de3f23d2b59173_hgdasg.jpg&w=1920&q=75', title: 'Luxury Emporium' },
    { src: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721027409%2Fpngtree-shop-logo-vector-template-design-illustration-png-image_860078_p3nuel.jpg&w=1920&q=75', title: 'Elite Boutique' },
    { src: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721028367%2F1533-768x591_cdjsww.png&w=1920&q=75', title: 'Tech & Trend' },
    { src: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1722081505%2FLWScreenShot_2024-01-21_at_6.55.39_PM_ler5iy.png&w=1920&q=75', title: 'Best Cart' }
  ];

  return (
    <Container>
      <Row>
        {!isMobile && (
          <Col md={3} xs={12} style={{ padding: '8px' }}>
            {/* Sidebar */}
            <div style={{
              border: '1px solid lightgray',
              borderRadius: '20px',
              maxHeight: '500px',  
              overflow: 'hidden',  
            }}>
              <div style={{
                maxHeight: '500px',  
                overflowY: 'scroll',  
                marginRight: '-15px', 
                paddingRight: '15px', 
              }}>
                {sidebarItems.map((item, index) => (
                  <Row
                    key={index}
                    style={{
                      borderBottom: '1px solid lightgray',
                      padding: '10px', 
                    }}
                  >
                    <Col style={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src={item.src}
                        alt={item.title}
                        style={{
                          width: '30px', 
                          height: '30px',
                          marginRight: '30px', 
                          border: '1px solid gray',
                          borderRadius: '50%',
                        }}
                      />
                      <span style={{ fontSize: '15px' }}>{item.title}</span>
                    </Col>
                  </Row>
                ))}
                <Row>
                  <span style={{ backgroundColor: "pink", textAlign: "center", padding: "10px" }}>View All</span>
                </Row>
              </div>
            </div>
          </Col>
        )}

        {/* Main Carousel */}
        <Col md={isMobile ? 12 : 9} xs={12}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://nextall.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-banner.dc50218b.png&w=1200&q=75"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://nextall.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-banner-2.6a8cebfd.png&w=1200&q=75"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default SidebarCarousel;
