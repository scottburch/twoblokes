import React from 'react'
import {MainLayout} from "../layouts/MainLayout";
import {Container, Row, Col} from "react-bootstrap";
import {WaterMakerCard} from "../cards/water-maker/WaterMakerCard";
import {CtoCCard} from "../cards/c-to-c/CtoCCard";
import {WhereAreWeNowCard} from "../cards/where-are-we-now/WhereAreWeNowCard";
import {CircuitBuilderCard} from "../cards/circuit-builder/CircuitBuilderCard";

export default () => (
    <MainLayout>
        <Container style={{paddingTop: 5, paddingBottom: 5}}>
            <Row>
                <CardSlot size={4}><CtoCCard/></CardSlot>
                <CardSlot size={8}><WhereAreWeNowCard/></CardSlot>
            </Row>
            <Row>
                <CardSlot><CircuitBuilderCard/></CardSlot>
            </Row>
            <Row>
                <CardSlot><WaterMakerCard/></CardSlot>
            </Row>
        </Container>
    </MainLayout>
)

const CardSlot = ({children, size=4}) => (
    <Col md={12} lg={size}>{children}</Col>
);