import React from 'react'
import {MainLayout} from "../layouts/MainLayout";
import {Container, Row, Col} from "react-bootstrap";
import {WaterMakerCard} from "../cards/water-maker/WaterMakerCard";
import {CtoCCard} from "../cards/c-to-c/CtoCCard";
import {WhereAreWeNowCard} from "../cards/where-are-we-now/WhereAreWeNowCard";

export default () => (
    <MainLayout>
        <Container style={{paddingTop: 5, paddingBottom: 5}}>
            <Row>
                <CardSlot><CtoCCard/></CardSlot>
                <CardSlot size={2}><WhereAreWeNowCard/></CardSlot>
            </Row>
            <Row>
                <CardSlot><WaterMakerCard/></CardSlot>
            </Row>
        </Container>
    </MainLayout>
)

const CardSlot = ({children, size=3}) => (
    <Col md={12} lg={12/size}>{children}</Col>
);