import React from 'react'
import youtubeImage from "./youtube.png";

export const YouTubeLink = () => (
    <a
        href="https://www.youtube.com/channel/UCN2MnvMFtlHsDjyP_7esXJQ"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration: 'none'}}
    >
        <img src={youtubeImage} style={{height: 16}} alt="youtube"/> YouTube
    </a>
);