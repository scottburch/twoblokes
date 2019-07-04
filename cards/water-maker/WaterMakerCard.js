import React from 'react'
import pumpImage from './pump.png'
import {Button, Card} from "react-bootstrap";

export const WaterMakerCard = () => (
    <Card>
        <Card.Img src={pumpImage}/>
        <Card.Body>
            <Card.Title>Watermaker install continuing</Card.Title>
            <Card.Text>
                The work on the watermaker is continuing.   We should have it running soon.
                We are using a Fluid Parts water maker which should produce 17gal/hour.
            </Card.Text>
        </Card.Body>
    </Card>

);