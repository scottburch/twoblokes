import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Header} from "../components/header/Header";
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

export const MainLayout =  ({children}) => (
    <>
        <Head>
            <title>Two Blokes Afloat</title>
        </Head>
    <Container fluid style={{padding: 0}}>
        <Row>
            <Col>
                <Header/>
            </Col>
        </Row>
        <Row>
            <Col>
                {children}
            </Col>
        </Row>
    </Container>
</>
    )