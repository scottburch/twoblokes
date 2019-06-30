import React from 'react'
import {Button, Card} from "react-bootstrap";
import ctocImage from './ctoc.jpeg'

export const CtoCCard = () => (
    <Card>
        <Card.Body>
            <Card.Img src={ctocImage} />
            <Card.Title>
                Join us for our C to C adventure
            </Card.Title>
            <Card.Text>
                We are sailing from BC, Canada to the Caribbean in September.
            </Card.Text>
            <Button variant="primary">Join us</Button>
        </Card.Body>
    </Card>

);