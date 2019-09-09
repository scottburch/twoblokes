import React from 'react'
import twitterImage from "./twitter.png";

export const TwitterLink = () => (
    <a
        href="https://twitter.com/TwoBlokesAfloat"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration: 'none'}}
    >
        <img src={twitterImage} style={{height: 16}} alt="twitter"/> Twitter
    </a>
);