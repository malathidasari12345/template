import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import "../styles/navbar.css"; 
import nextall from "../images/nextall.png";
import { FaSearch } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";

const NavbarComponent = () => {
  return (
    <div className='hide'>
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <img alt="Logo" src={nextall} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex search-bar">
            <FormControl
              type="search"
              placeholder="Search..."
              className="mr-2"
              aria-label="Search"
            />
            <span className="search-icon">
              <FaSearch />
            </span>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="icon-link">
              <span className="icon-container">
                <MdCurrencyExchange />
              </span>
            </Nav.Link>
            <Nav.Link href="#darkmode" className="icon-link">
              <span className="icon-container">
                <CiDark />
              </span>
            </Nav.Link>
            <Nav.Link href="#wishlist" className="icon-link">
              <span className="icon-container">
                <FaRegHeart />
              </span>
              <span className="icon-text-container">
                <span className="icon-text">Wishlist</span>
                <span className="item-count">0 Items</span>
              </span>
            </Nav.Link>
            <Nav.Link href="#compare" className="icon-link">
              <span className="icon-container">
                <FaCodeCompare />
              </span>
              <span className="icon-text-container">
                <span className="icon-text">Compare</span>
                <span className="item-count">0 Items</span>
              </span>
            </Nav.Link>
            <Nav.Link href="#cart" className="icon-link">
              <span className="icon-container">
                <BsCart2 />
              </span>
              <span className="icon-text-container">
                <span className="icon-text">Cart</span>
                <span className="item-count">$0.0</span>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarComponent;