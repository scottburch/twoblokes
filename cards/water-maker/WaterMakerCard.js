import React from 'react'
import pumpImage from './pump.png'
import {Button, Card} from "react-bootstrap";

export const WaterMakerCard = () => (
    <Card>
        <Card.Img src={pumpImage}/>
        <Card.Body>
            <Card.Title>Watermaker install done</Card.Title>
            <Card.Text>
                The watermaker install is done!!!  Now we can convert sea water into drinking water.
                We will be doing a video on the watermaker soon.
            </Card.Text>
        </Card.Body>
    </Card>

);