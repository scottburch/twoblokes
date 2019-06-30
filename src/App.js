import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col} from 'react-bootstrap'
import {Header} from "./components/header/Header";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomePage} from "./pages/home/HomePage";
import {ContactPage} from "./pages/contact/ContactPage";

function App() {
  return (
      <BrowserRouter>
    <Container fluid style={{padding: 0}}>
        <Row>
            <Col>
                <Header/>
            </Col>
        </Row>
        <Row>
            <Col>
                <Switch>
                    <Route path="/contact-us" component={ContactPage} />
                    <Route component={HomePage} />
                </Switch>
            </Col>
        </Row>
    </Container>
      </BrowserRouter>
  );
}

export default App;
