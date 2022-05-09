import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
const axios = require("axios").default;
const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const { displayName, email } = user;
 
  console.log(displayName, email);
// 
  useEffect(() => { 
    axios.get(`https://vast-lowlands-94702.herokuapp.com/products?email=${email}`, {
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })

      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  
  const handleProduct = id => {
    const proceed = window.confirm("Are you sure!!");

    const deleteSuccess = (data) => {
      if (data.deletedCount > 0) {
        console.log("Deleted Successfully");
        const remeaining = products.filter((product) => product._id != id);
        setProducts(remeaining);
      }
    };
    if (proceed) {
      const url = `https://vast-lowlands-94702.herokuapp.com/product/${id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => deleteSuccess(data));
    }
  };
  return (
    <div className="section-block bg-white">
      <Container>
        <Row>
          <Col>
            <h3 className="mb-5">Showing data of : {displayName}</h3>{" "}
          </Col>
        </Row>

        <Row>
          <Col>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {products.map((product, key) => (
                  <tr key={product._id}>
                    <td>{key + 1}</td>
                    <td>
                      <div className="product-image">
                        <Link to={`/inventory/${product._id}`}>
                          <img src={product.img} alt="" />
                        </Link>
                      </div>
                    </td>
                    <td>
                      <p><Link to={`/inventory/${product._id}`}>
                        {product.name}
                      </Link></p>
                     <p> Stock: {product.stock}</p>
                    </td>
                    <td>
                      
                      <Button
                        variant="danger"
                        onClick={() => handleProduct(product._id)}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyItems;
