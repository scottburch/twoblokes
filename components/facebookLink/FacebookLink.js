import React from 'react'
import facebookImage from "./facebook.png";

export const FacebookLink = () => (
    <a
        href="https://www.facebook.com/twoblokesafloat/"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration: 'none'}}
    >
        <img src={facebookImage} style={{height: 17}} alt="facebook"/> Facebook
    </a>
);