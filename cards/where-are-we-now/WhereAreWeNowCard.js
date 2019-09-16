import React from 'react'
import {Button, Card} from "react-bootstrap";
import dynamic from 'next/dynamic'
import {data} from "../../data";

export const WhereAreWeNowCard = () => (
    <Card>
        <Card.Body>
            <div style={{width: '100%'}}>
                <DynamicMap />
            </div>

            <Card.Title>Where are we now?</Card.Title>

            <Card.Text>
                {data.currentLocation.description}
                <div style={{fontSize: '.8em'}}>Updated On: {data.currentLocation.updatedOn}</div>
            </Card.Text>
        </Card.Body>
    </Card>

);



const DynamicMap = dynamic(() => import('../../components/map/Map'), {
    ssr: false
});





