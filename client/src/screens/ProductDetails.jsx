import React from "react";
import { products } from "../products";
import {
  Row,
  Col,
  ListGroup,
  Image,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

export default function ProductDetails({ match }) {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div>
      <Link to="/" className="btn btn-secondary my-1">
        <i class="fas fa-arrow-left"></i>
        &nbsp; GO BACK
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={1}></Col>
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

          <Row>
            <ListGroupItem>
              <Row>
                <Col md={3}>Status :</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className="btn-block" type="button">
                Add to Cart
              </Button>
            </ListGroupItem>
          </Row>
        </Col>
        {/* <Col md={3}>
                </Col> */}
      </Row>
    </div>
  );
}
