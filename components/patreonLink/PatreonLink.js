import React from 'react'
import patreonImage from './patreon.png'

export const PatreonLink = ({style}) => (
    <a
        href="https://www.patreon.com/twoblokesafloat"
        target="_blank"
        rel="noopener noreferrer"
        style={{color: '#ddd', textDecoration: 'none', ...style}}
    >
        <img src={patreonImage} style={{height: 16}} alt="patreon"/> Patreon
    </a>
);