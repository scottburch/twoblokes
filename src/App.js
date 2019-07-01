import React, {lazy, Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col} from 'react-bootstrap'
import {Header} from "./components/header/Header";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const ContactPage = lazy(() => import('./pages/contact/ContactPage'));
const HomePage = lazy(() => import('./pages/home/HomePage'));

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
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route path="/contact-us" component={ContactPage}/>
                                <Route component={HomePage}/>
                            </Switch>
                        </Suspense>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
