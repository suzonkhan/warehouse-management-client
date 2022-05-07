import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const loginSubmit = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password );
    signInWithEmailAndPassword(email, password);
    console.log(user);
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return ( 
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  if (user) {
    navigate(from, { replace: true });
  }
  console.log(user);
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
                Login
              </Button>
            </Form>
           <p className="text-center"> or</p>  

           <SocialLogin></SocialLogin>

           <p className="my-5">Don't have account? <Link to="/registration">Create Account</Link></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
