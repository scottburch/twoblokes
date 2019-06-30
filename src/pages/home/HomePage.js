import React from 'react'
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import {WaterMakerCard} from "./cards/water-maker/WaterMakerCard";

export const HomePage = () => (
    <Container>
        <Row>
        <h4>
            Follow us on our C to C (Canada to Caribbean) adventure.
        </h4>
        </Row>
        <Row>
            <Col md={12} lg={4}>
            <WaterMakerCard/>
            </Col>
        </Row>
    </Container>
);