import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="primary" className="navbar-dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Your Bazaar</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link href="#cart">
                  <i class="fas fa-shopping-cart"></i>
                  &nbsp; Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signin">
                <Nav.Link href="#signin">
                  <i class="fas fa-user"></i>
                  &nbsp; SignIn
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
