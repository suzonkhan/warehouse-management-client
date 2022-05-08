import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import "./ManageInventories.css";
const ManageInventories = () => {
  const [products, setProducts] = useProducts();

  const handleUser = (id) => {
    const proceed = window.confirm("Are you sure!!");

    const deleteSuccess = (data) => {
      if (data.deletedCount > 0) {
        console.log("Deleted Successfully");
        const remeaining = products.filter((product) => product._id != id);
        setProducts(remeaining);
      }
    };
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => deleteSuccess(data));
    }
  };
  return (
    <div className="section-block bg-white">
      <Container>
        <Row> 
        <Col className="text-end"> <Link className="btn btn-info mb-5" to='/add-new-item'>add new item</Link> </Col>
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
                      {/* <Link className="btn btn-info mx-4" to={`/update-user/${user._id}`}>Update</Link> */}
                      <Button
                        variant="danger"
                        onClick={() => handleUser(product._id)}
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

export default ManageInventories;
