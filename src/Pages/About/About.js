import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="section-block bg-white">
        <Container>
          <Row>
            <Col>
              <h2>About</h2>
            </Col>
          </Row>
          <Row className="align-items-center">
          <Col xs={12} sm={6} md={6}>
          <img src="./assats/images/about-banner.jpg" alt="" />
          </Col>
          <Col>
            <h2>About Qinventory </h2>
            <p className="lead mt-4">
            Qinventory  is a one of the best product inventory. Using this
              inventory you can manage product stock and selling volume.{" "}
            </p>
            <p className="lead mt-4">
              {" "}
              Manage product (Add, Edit, Delete), Product Stock, Selling Qty and
              price traking is most used feature of this.{" "}
            </p>
             
          </Col>
        </Row>
        </Container>
      </div>
    );
};

export default About;