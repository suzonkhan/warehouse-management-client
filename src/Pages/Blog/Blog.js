import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="section-block bg-white">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-5">Blog</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="mt-5">
              Question: Difference between javascript and nodejs
            </h4>
            <p>
              Answer: Difference between javascript and nodejs are given below.
            </p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Javascript</th>
                  <th>Nodejs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>
                    JavaScript is a simple programming language that runs in any
                    browser JavaScript Engine.
                  </td>
                  <td>
                    Node JS is a running environment for a JavaScript
                    programming language.
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>It is used on the client-side</td>
                  <td>Mostly it is used on the server-side.</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Javascript can only be run in the browsers.</td>
                  <td>
                    We can run Javascript outside the browser with the help of
                    NodeJS.
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>
                    Into Javascript we can add HTML and play with the DOM.{" "}
                  </td>
                  <td>Into Nodejs we can't add HTML tags.</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Javascript is used in frontend development.</td>
                  <td>Nodejs is used in server-side development.</td>
                </tr>
              </tbody>
            </Table>
            <h4 className="mt-5">
              Question: When should you use nodejs and when should you use
              mongodb?
            </h4>
            <p>
              <strong>Nodejs:</strong> If your server side code requires very
              few cpu cycles. In other world you are doing non blocking
              operation and does not have heavy algorithm/Job which consumes
              lots of CPU cycles.
            </p>
            <p>
              <strong>MongoDB:</strong> MongoDB are a good choice when your data
              is document-centric.{" "}
            </p>
            <h4 className="mt-5">
              Differences between sql and nosql databases.
            </h4>
            <p>Differences between sql and nosql databases are give below</p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>SQL </th>
                  <th>NoSQL </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>SQL databases are vertically scalable</td>
                  <td>NoSQL databases are horizontally scalable.</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>SQL databases are table-based</td>
                  <td>
                    {" "}
                    NoSQL databases are document, key-value, graph, or
                    wide-column stores.
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>SQL databases are better for multi-row transactions.</td>
                  <td>
                    NoSQL is better for unstructured data like documents or
                    JSON.
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>SQL databases are relational</td>
                  <td>NoSQL databases are non-relational.</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>
                    SQL databases use structured query language and have a
                    predefined schema.
                  </td>
                  <td>
                    NoSQL databases have dynamic schemas for unstructured data.
                  </td>
                </tr>
              </tbody>
            </Table>
            <h4 className="mt-5">
              What is the purpose of jwt and how does it work?
            </h4>
            <p> <strong>Purpose: </strong>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims.
            </p>
            <p><strong>It work process:</strong>
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
