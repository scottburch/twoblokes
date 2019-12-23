import React from 'react'
import {Button, Card} from "react-bootstrap";
import circuitBuilderImage from './circuit-builder.png'
import {YouTubeLink} from "../../components/youTubeLink/YouTubeLink";

export const CircuitBuilderCard = () => (
    <Card>
        <Card.Body>
            <Card.Img src={circuitBuilderImage} />
            <Card.Title>
                The circuit builder app is out
            </Card.Title>
            <Card.Text>
                Scott has released a free app to help boaters design electrical systems or document existing ones
            </Card.Text>

            <Button href="/circuit-builder" target="_blank" variant="primary">Check it out</Button>
        </Card.Body>
    </Card>
);