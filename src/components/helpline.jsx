import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShippingFast, FaHeadset, FaRedo, FaLock, FaUsers } from 'react-icons/fa';

const FeatureSection = () => {
  const features = [
    {
      icon: <FaShippingFast size={40} style={{ color: '#F50057' }} />,
      title: 'Free Shipping',
      subtitle: 'When you spend $100+',
    },
    {
      icon: <FaUsers size={40} style={{ color: '#F50057' }} />,
      title: 'Feedbacks',
      subtitle: '100% Customer',
    },
    {
      icon: <FaRedo size={40} style={{ color: '#F50057' }} />,
      title: 'Free Return',
      subtitle: '30 Day Returns Policy',
    },
    {
      icon: <FaLock size={40} style={{ color: '#F50057' }} />,
      title: 'Secure System',
      subtitle: '100% Secure Guarantee',
    },
    {
      icon: <FaHeadset size={40} style={{ color: '#F50057' }} />,
      title: 'Online Supports',
      subtitle: '24/7 Support',
    },
  ];

  return (
    <div className="d-none d-md-block"> {/* Add this div to control visibility */}
      <Container className="mt-5 p-3 border rounded h-100" style={{ backgroundColor: '#fff' }}>
        <Row className="text-center justify-content-between align-items-center h-100">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} md={2} className="d-flex justify-content-center mb-4 mb-md-0">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="mb-2">{feature.icon}</div>
                <h6 className="font-weight-bold mb-0">{feature.title}</h6>
                <p className="text-muted mb-0" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {feature.subtitle}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeatureSection;
