import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
const Registration = () => {
  const [loginError, setLoginError] = useState(false)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const registrationSubmit = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password );
    createUserWithEmailAndPassword(email, password);
    if (error) {
      setLoginError(true);
      // console.log(error);
     }
  }
  
  if (loading) {
    return (
      <div className="section-block bg-white text-center">
       <Spinner className="m-auto" animation="border" variant="primary" />
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="section-block bg-white">
      <Container>
        <Row>
          <Col>
            <h2>Registration</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4}>
          
          {loginError && <Alert variant="danger">{error.message}</Alert>}
            <Form onSubmit={registrationSubmit}>
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
                Create Account
              </Button>
            </Form>
            

         
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
