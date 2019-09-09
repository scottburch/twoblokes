import React from 'react'
import instagramImage from "./instagram.png";

export const InstagramLink = () => (
    <a
        href="https://www.instagram.com/_twoblokesafloat/"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration: 'none'}}
    >
        <img src={instagramImage} style={{height: 17}} alt="instagram"/> Instagram
    </a>
);