import React from 'react'
import {Button, Card} from "react-bootstrap";
import dynamic from 'next/dynamic'

export const WhereAreWeNowCard = () => (
    <Card>
        <Card.Body>
            <div style={{width: '100%'}}>
                <DynamicMap />
            </div>

            <Card.Title>Where are we now?</Card.Title>

            <Card.Text>
                In Gibsons, BC.  Getting ready.
            </Card.Text>
        </Card.Body>
    </Card>

);



const DynamicMap = dynamic(() => import('../../components/map/Map'), {
    ssr: false
});





