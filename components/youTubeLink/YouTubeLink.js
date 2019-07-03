import React from 'react'
import youtubeImage from "./youtube.png";

export const YouTubeLink = ({style}) => (
    <a
        href="https://www.youtube.com/channel/UCN2MnvMFtlHsDjyP_7esXJQ"
        target="_blank"
        rel="noopener noreferrer"
        style={{color: '#ddd', textDecoration: 'none', ...style}}
    >
        <img src={youtubeImage} style={{height: 16}} alt="youtube"/> YouTube
    </a>
);