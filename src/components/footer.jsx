import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import nextall from "../images/nextall.png";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row className="justify-content-between">
        {/* Info */}
        <Col md={3} className="footer-info text-center">
          <img src={nextall} alt="Logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <CiLocationOn className="text-pink" /> <span > Ohio St. South gate, CA 90280</span><br></br>
          <CiMail className="text-pink"/><span > john@yahoo.com</span><br></br>
          <MdLocalPhone className="text-pink"/> <span > +1 386-688-3295</ span>
        </Col>

        {/* Resources */}
        <Col md={2} className="footer-links">
          <h1>Resources</h1>
          {['Contact Us', 'Products', 'Shops', 'Campaigns'].map((item, index) => (
            <p key={index} className="hover-pink">{item}</p>
          ))}
        </Col>

        {/* About Us */}
        <Col md={2} className="footer-links">
          <h1>About Us</h1>
          {['About Us', 'Privacy Policy', 'Terms and Conditions', 'Refund Policy'].map((item, index) => (
            <p key={index} className="hover-pink">{item}</p>
          ))}
        </Col>

        {/* Newsletter */}
        <Col md={3} className="footer-newsletter">
          <h1>Join our Newsletter</h1>
          <Form>
  <Form.Group className="d-flex">
    <Form.Control type="email" placeholder="Enter your Email" className="me-2" />
    <Button variant="pink" className="btn-pink">Subscribe</Button>
  </Form.Group>
</Form>

          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
        </Col>
      </Row>
      <hr></hr>
      <h6 className='text-center' style={{padding:"10px"}}>2024 Nextall. All rights reserved</h6>
    </Container>
  );
};

export default Footer;
