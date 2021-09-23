import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="primary" className="navbar-dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Your Bazaar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#cart">
            <i class="fas fa-shopping-cart"></i>
            &nbsp; Cart</Nav.Link>
        <Nav.Link href="#signin">
            <i class="fas fa-user"></i>
            &nbsp; SignIn</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}
