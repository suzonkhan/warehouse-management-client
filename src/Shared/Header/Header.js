import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <header className="App-header">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          
          <Link to="/" className="navbar-brand">
            DressesBD
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </Nav>
            <Nav>
              {user && (
                <Link to="/manage-inventories" className="nav-link">
                  Manage Products
                </Link>
              )}
              {user && (
                <Link to="/add-new-item" className="nav-link">
                  Add Product
                </Link>
              )}
              {user && (
                <Link to="/my-items" className="nav-link">
                  My Products
                </Link>
              )}
              {user ? (
                <Button onClick={() => signOut(auth)}> Logout </Button>
              ) : (
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
