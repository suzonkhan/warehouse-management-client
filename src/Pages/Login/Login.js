import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const loginSubmit = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password );
  }
  return (
    <div className="section-block bg-white">
      <Container>
        <Row>
          <Col>
            <h2>Login</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4}>
            <Form onSubmit={loginSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
              
              <Button className="w-100 my-3" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
           <p className="text-center"> or</p>  

           <SocialLogin></SocialLogin>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
