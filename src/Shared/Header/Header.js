import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
         
 
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/manage-inventories" className="nav-link">Manage Product</Link>
            
             
          </Nav>
          <Nav>
            <Link to="/login" className="nav-link">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};

export default Header;
