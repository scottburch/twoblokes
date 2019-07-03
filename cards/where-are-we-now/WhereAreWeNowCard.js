import React from 'react'
import {Button, Card} from "react-bootstrap";
import dynamic from 'next/dynamic'

export const WhereAreWeNowCard = () => (
    <Card>
            <div style={{height: 200, width: '100%'}}>
                <DynamicMap />
            </div>
        <Card.Body>

            <Card.Title>Where are we now</Card.Title>
            <Card.Text>
                Where are we now
            </Card.Text>
            <Button variant="primary">Expand</Button>
        </Card.Body>
    </Card>

);



const DynamicMap = dynamic(() => import('../../components/map/Map'), {
    ssr: false
});





