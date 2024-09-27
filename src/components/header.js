import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../styles/header.css";
import { CiGrid41 } from "react-icons/ci";

const MyNavbar = () => {
  return (
    <div className="hide">
    <Navbar expand="lg" className="p-1 custom-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="category-button">
            <CiGrid41 className="me-2" />
           <span>Categories</span> 
          </div>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="text-white">Home</Nav.Link>
          <Nav.Link href="#products" className="text-white">Products</Nav.Link>
          <Nav.Link href="#shops" className="text-white">Shops</Nav.Link>
          <Nav.Link href="#campaigns" className="text-white">Campaigns</Nav.Link>
          <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          <Nav.Link href="#about" className="text-white">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default MyNavbar;
