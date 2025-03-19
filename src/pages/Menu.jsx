import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import menuData from "../data/menu.json";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Thực Đơn</h2>
      <Row>
        {menuItems.map((item) => (
          <Col md={4} sm={6} xs={12} key={item.id} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img 
                variant="top" 
                src={item.image} 
                alt={item.name}
                onError={(e) => { e.target.src = "/src/assets/image-placeholder.png"; }} 
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <h5 className="text-primary">{item.price} VND</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;