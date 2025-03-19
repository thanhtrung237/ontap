import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ!");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Liên Hệ</h2>
      <Form onSubmit={handleSubmit} className="mx-auto w-50">
        <Form.Group className="mb-3">
          <Form.Label>Họ và Tên</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tin nhắn</Form.Label>
          <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} required />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">Gửi</Button>
      </Form>
    </Container>
  );
}

export default Contact;