import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">Nhà hàng ABC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Trang Chủ</Nav.Link>
            <Nav.Link href="/menu">Thực Đơn</Nav.Link>
            <Nav.Link href="/contact">Liên Hệ</Nav.Link>
            <Nav.Link href="/book-table">Book</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;