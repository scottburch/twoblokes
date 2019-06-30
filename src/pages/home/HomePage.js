import React from 'react'
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import {WaterMakerCard} from "./cards/water-maker/WaterMakerCard";
import {CtoCCard} from "./cards/c-to-c/CtoCCard";

export const HomePage = () => (
    <Container style={{paddingTop: 5, paddingBottom: 5}}>
        <Row>
            <Col md={12} lg={4}>
                <CtoCCard/>
            </Col>
            <Col md={12} lg={4}>
                <WaterMakerCard/>
            </Col>
        </Row>
    </Container>
);