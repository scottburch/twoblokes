import React, {useEffect, createRef} from 'react'
import {Map, View, Feature} from 'ol'
import {OSM} from 'ol/source'
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer'
import {fromLonLat} from 'ol/proj'
import 'ol/ol.css'
import {Vector as VectorSource} from 'ol/source'
import {Point} from 'ol/geom'
import boatIcon from './boat-icon.png'
import {Icon, Style} from 'ol/style.js';
import {data} from "../../data";

const latOrLonToDecimal = (latOrLon) => {
    let [degrees, minutes] = latOrLon.split(':');
    degrees = parseInt(degrees);
    minutes = parseFloat(minutes);
    return degrees + (minutes/60);
};

export default () => {
    const lonLat = [
        latOrLonToDecimal(data.currentLocation.lon),
        latOrLonToDecimal(data.currentLocation.lat)
    ];

    const mapRef = createRef();

    useEffect(() => {
            const map = new Map({
                target: mapRef.current,
                layers: [
                    new TileLayer({
                        source: new OSM()
                    }),
                    new VectorLayer({
                        source: new VectorSource({
                            features: [
                                new Feature({
                                    type: 'icon',
                                    geometry: new Point(fromLonLat(lonLat)),
                                })
                            ]
                        }),
                        style: new Style({
                            image: new Icon({
                                src: boatIcon
                            })
                        })

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
            <div ref={mapRef} />
        </>
    )
};