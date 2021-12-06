import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import gsLogo from './goldenShoeLogo.jpg';
import ShoppingCart from "./shoppingCart";
import {Link} from "react-router-dom";

function NavBar(props) {
    return (
        <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
          <Nav.Link as={Link} to="/" id="gsName">
          <img
            alt=""
            src={gsLogo}
            width="65"
            height="30"
            className="d-inline-block align-top"
          />{' '}
            Golden Shoe
          </Nav.Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown" text="faded">
                <NavDropdown.Item >Men</NavDropdown.Item>
                <NavDropdown.Item >Women</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Nav.Link as={Link} to="/products" id="seeAll">See all products</Nav.Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              {' '}
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
              {' '}
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
                <ShoppingCart items={props.cart} remove={props.remove}/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;