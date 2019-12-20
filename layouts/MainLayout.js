import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Header} from "../components/header/Header";
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

const ga = `
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-154870658-1');
        </script>
`;

export const MainLayout =  ({children}) => (
    <>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154870658-1"></script>
            <script dangerouslySetInnerHTML={{__html: ga}} />
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