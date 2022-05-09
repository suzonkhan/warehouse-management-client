import { signOut } from "firebase/auth";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Footer = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="section-block bg-dark main-footer">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="widget">
              <h4>Contact</h4>
              <p>
                Address: House:2, Road: 2, Mirpur-2, Dhaka-1200, Bangladesh.
              </p>
              <ul>
                <li>Mobile: 01941 586974</li> 
                <li>Email: contact@qinventory.com </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="widget">
              <h4>User Menu</h4>
              {!user && <p>Other menu will be vissible after login</p>}

              <ul>
                {user && (
                  <li>
                    {" "}
                    <Link to="/manage-inventories">Manage Products</Link>
                  </li>
                )}
                {user && (
                  <li>
                    {" "}
                    <Link to="/add-new-item">Add Product</Link>{" "}
                  </li>
                )}
                {user && (
                  <li>
                    {" "}
                    <Link to="/my-items">My Products</Link>{" "}
                  </li>
                )}

                {user ? (
                  <li>
                    <a href="#" onClick={() => signOut(auth)}>
                      Logout
                    </a>
                  </li>
                ) : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="widget">
              <h4>Menu</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        
      </Container>
      <Container fluid>
      <Row className="pt-4 mt-5 copyright">
          <Col>
            <p className="text-center">
              &copy; Copyright 2022. All right reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
