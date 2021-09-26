import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productAction";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import {
  Row,
  Col,
  ListGroup,
  Image,
  ListGroupItem,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

export default function ProductDetails({ history,match }) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);


  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="primary">{error}</Message>
      ) : (
        <div>
         <Link to="/" className="btn btn-secondary my-1">
            <i className="fas fa-arrow-left"></i>
            &nbsp; GO BACK
          </Link>
          <Row>
            <Col md={4}>
              <Image src={product.image} alt={product.name} style={{height:"400px", weight:"800px", paddingLeft:"30px"}} fluid />
            </Col>
            <Col md={4}>
              <Row>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <h3>{product.name}</h3>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} Reviews`}
                    />
                  </ListGroupItem>
                  <ListGroupItem>Price : ${product.price}</ListGroupItem>
                  <ListGroupItem>{product.description}</ListGroupItem>
                </ListGroup>
              </Row>
            </Col>
            <Col md={1}></Col>
            <Col md={3}>
            <Card>

                <ListGroupItem variant="flush">
                  <Row>
                    <Col>Status :</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroupItem>
                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <Row variant="info">
                      <Col>Qty</Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1} className="bg-info">
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Row>
                  </ListGroupItem>
                )}
                <ListGroupItem>
                  <Button className="btn-block" type="button" onClick={addToCartHandler}>
                    Add to Cart
                  </Button>
                </ListGroupItem>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
