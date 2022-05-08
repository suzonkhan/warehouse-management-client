import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name, img, decs, price, stock, supplier} = product;
    return (
        <Col xs={12} sm={6} md={4}>
            <div className="product-box">
              <div className="product-img">
                <img src={img} alt="" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p>Supplier: {supplier} </p>
                <p className="product-desc">
                  {decs}
                </p>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="product-price">Price: {price} Taka</p>
                  </div>
                  <div> 
                    <p className="product-qty">Stock Quantity : {stock} </p>
                  </div>
                </div>
                <div className="text-center">
                  {/* <Button variant="info">Manage Stock</Button> */}
                  <Link className='btn btn-info' to={`/inventory/${_id}`}>Manage Stock</Link>
                </div>
              </div>
            </div>
          </Col>
    );
};

export default Product;