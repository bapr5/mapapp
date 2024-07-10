import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'

export default function Users() {
    return (
        <>
            <h3>Поиск</h3>
            <Container>
                <Row>
                    <Col> <Form.Control type="email" placeholder="Enter email" /></Col>
                    <Col>  <Form.Control type="email" placeholder="Enter email" /></Col>
                </Row>
                <Row>
                    <Col> <Form.Control type="email" placeholder="Enter email" /></Col>
                    <Col>  <Form.Control type="email" placeholder="Enter email" /></Col>
                </Row>
            </Container>
        </>
    )
}
