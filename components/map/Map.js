import React, {useEffect, createRef} from 'react'
import {Map, View} from 'ol'
import {OSM} from 'ol/source'
import {Tile as TileLayer} from 'ol/layer'
import {fromLonLat} from 'ol/proj'
import 'ol/ol.css'

const lonLat = [-123.5, 49.5];

export default () => {
    const mapRef = createRef();

    useEffect(() => {
            const map = new Map({
                target: 'where-are-we-now-map',
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    center: fromLonLat(lonLat),
                    zoom: 6
                })
            });
    });

    return (
        <>
            <div id="where-are-we-now-map" ref={mapRef} />
        </>
    )
};