import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';



import heartLogo from '../assest/heartlogo.avif'; // Update the path as necessary
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <div>
      <Navbar id="newnav"expand="lg" className="bg-body-tertiary">
        <Container >
          <Navbar.Brand href="/home">
            <img
              src={heartLogo}
              alt="Heart Guard Logo"
              style={{ height: '50px', width: '50px',background:"transparent" }} // Adjust the height as needed
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="newnav" className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/About">About Us</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       {/* Carousel Section */}
       
      {/* <header className="header-bg text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">HeartGuard</h1>
          <p className="lead">Predict Your Heart Health</p>
          <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </header> */}

      {/* Call-to-Action Section */}
      
    </div>
  );
}

export default NavBar;