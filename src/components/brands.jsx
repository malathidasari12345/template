import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "../styles/brand.css";

const brands = [
  { name: 'Apple', products: 2, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721018564%2FQR-Apple-logo.jpg.square_social_mjt46t_xllbjl_h30nnm.jpg&w=256&q=75' },
  { name: 'Nike', products: 1, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721018601%2F33e63d5adb0da6b303a83901c8e8463a_irv4b3_yp9mfj_amdcdu_x9hk6c.jpg&w=256&q=75' },
  { name: 'Adidas', products: 1, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721018673%2Fimages_qlhjvt_yhlux0_j3jhef.png&w=256&q=75' },
  { name: 'Huawei', products: 0, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721018713%2Fhuawei-logo-huawei-icon-free-free-vector_vtlqog_gohvqd_a0yhfz.jpg&w=256&q=75' },
  { name: 'LV', products: 2, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721019118%2Flouis-vuitton-logo-design-template-78ffdfd5a7454ac656ed6782e551a9df_screen_bldeoa.jpg&w=256&q=75' },
  { name: 'Prada', products: 0, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721019916%2FPrada-Triangle-Logo-Vector-01_fyd059.jpg&w=256&q=75' },
  { name: 'Balenciaga', products: 0, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721019060%2F4130d4b75d90d8ca754391d6eb73dd8c_w9htzz.jpg&w=256&q=75' },
  { name: 'Lakers', products: 4, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721020143%2Flakers-logo-lakers-icon-transparent-free-png-fotor-bg-remover-2024071510838_lqmaaa.png&w=256&q=75' },
  { name: 'Dior', products: 0, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721020630%2Fdior-logo-png-transparent-fotor-bg-remover-20240715101324_waoan7.png&w=256&q=75' },
  { name: 'Puma', products: 1, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721020698%2Fpuma-logo-illustration-free-vector_qhjuk3.jpg&w=256&q=75' },
  { name: 'Burberry', products: 0, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721021618%2Fimages_rd7rqc.png&w=256&q=75' },
  { name: 'Reebok', products: 1, logo: 'https://nextall.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcuwtg4h1%2Fimage%2Fupload%2Fv1721022557%2Freebok_logo_icon_248669-fotor-bg-remover-20240715104721_gxq1bx.png&w=256&q=75' }
];

const Brands = () => {
  return (
    <Container className="brand-container">
      <h2 className="text-center">Brands</h2>
      <p className="text-center text-muted">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
      </p>
      <Row className="justify-content-center">
        {brands.map((brand, index) => (
          <Col xs={6} md={4} lg={2} key={index} className="mb-4">
            <Card className="text-center border-2 shadow-sm">
              <Card.Body className="d-flex align-items-center border rounded">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="mr-2"
                  style={{ width: '40px', height: '40px', marginRight: '10px' }}
                />
                <div className="text-left">
                  <Card.Title className="mb-0">{brand.name}</Card.Title>
                  <Card.Text className="text-muted">{brand.products} {brand.products === 1 ? 'Product' : 'Products'}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Brands;
