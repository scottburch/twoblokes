import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col} from 'react-bootstrap'
import {Header} from "./components/header/Header";

function App() {
  return (
    <Container fluid style={{padding: 0}}>
        <Row>
            <Col>
                <Header/>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
