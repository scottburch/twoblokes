import React, {createRef, useEffect} from 'react'
import {MainLayout} from "../layouts/MainLayout";
import {Container} from "react-bootstrap";

export default () => {
    const y = createRef();

    useEffect(() => {
        y.current.innerHTML = x.join('');
    });

    return (
        <MainLayout>
            <Container>
                <h4>We are always excited to hear from people. We can be reached by email at <span ref={y}></span></h4>
            </Container>
        </MainLayout>
    )
}

const x = [
    'two',
    'blokes',
    'afloat',
    '@g',
    'ma',
    'il',
    '.co',
    'm'
];