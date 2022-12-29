import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Details = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Team A </Form.Label>
              <Form.Control type="text" placeholder="Insert Name here" />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Team B </Form.Label>
              <Form.Control type="text" placeholder="Insert Name here" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
