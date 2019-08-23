import React from 'react'
import patreonImage from './patreon.png'

export const PatreonLink = () => (
    <a
        href="https://www.patreon.com/twoblokesafloat"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration: 'none'}}
    >
        <img src={patreonImage} style={{height: 16}} alt="patreon"/> Patreon
    </a>
);