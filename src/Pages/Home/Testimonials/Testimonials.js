import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div className="section-block">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-5">Testimonials</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={12} lg={8}>
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="testimonial-content">
                  <div className="user-info">
                    <img
                      src="https://res.cloudinary.com/demo/image/upload/w_200,h_200,c_thumb,g_face,r_max/face_left.png"
                      alt=""
                    />
                    <h4> Saniya </h4>
                  </div>
                  <p>
                    I am using this software last few days. Its working fine for
                    me and my business. Now i can manage my product and its
                    stock quantity without hassal within a click. Qinventory
                    makees easy my life now.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial-content">
                  <div className="user-info">
                    <img
                      src="https://simg.nicepng.com/png/small/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
                      alt=""
                    />
                    <h4> Sofiya </h4>
                  </div>
                  <p>
                    Thank you Qinventory developer team for such a good product.
                    Its working fine for me and did not get any bug for it. You
                    guys, make easy my my daily life. Thanks again and wish for
                    good luck.
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
