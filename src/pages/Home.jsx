import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-4 fw-bold">Chào mừng đến với Nhà hàng của chúng tôi!</h1>
          <p className="lead">Thưởng thức những món ăn ngon và dịch vụ tuyệt vời.</p>
          <Button variant="primary" href="/menu">
            Xem Menu
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;