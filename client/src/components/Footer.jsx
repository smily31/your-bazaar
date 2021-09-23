import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col className = "text-center">
                            <span>Copywrite &copy; Your Bazaar</span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
