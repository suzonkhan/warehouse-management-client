import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="section-block bg-white">
      <Container>
        <Row>
          <Col>
            <h2>Not Found</h2>
          </Col>
        </Row>
        <Row>
          <Col className="not-found">
             <h2>4<span>0</span>4</h2>
             <p className="lead">This page is not found.</p>  
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
