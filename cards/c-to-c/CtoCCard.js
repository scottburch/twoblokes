import React from 'react'
import {Button, Card} from "react-bootstrap";
import ctocImage from './ctoc.jpeg'
import {YouTubeLink} from "../../components/youTubeLink/YouTubeLink";

export const CtoCCard = () => (
    <Card>
        <Card.Body>
            <Card.Img src={ctocImage} />
            <Card.Title>
                Join us for our C to C adventure
            </Card.Title>
            <Card.Text>
                <p>We are sailing from BC, Canada to the Caribbean in September. </p>
                <p>Follow along on <YouTubeLink style={{color: 'black'}}/></p>
            </Card.Text>

            <Button href="https://www.youtube.com/channel/UCN2MnvMFtlHsDjyP_7esXJQ" target="_blank" variant="primary">Join us</Button>
        </Card.Body>
    </Card>

);