import React from 'react'
import {PageLink} from "../PageLink";
import {Nav, Navbar} from "react-bootstrap";
import youtubeImage from './youtube.png'

export const HeaderLinks = () => (
    <>
        <Navbar.Toggle aria-controls="header-menu"/>
        <Navbar.Collapse id="header-menu">
            <Nav className="ml-auto">
                <Nav.Link as="span">
                    <PageLink style={{color: '#ddd'}} href="/">Home</PageLink>
                </Nav.Link>
                <Nav.Link as="span">
                    <PageLink style={{color: '#ddd'}} href="/contact-us">Contact Us</PageLink>
                </Nav.Link>
                <Nav.Link as="span">
                    <a
                        href="https://www.youtube.com/channel/UCN2MnvMFtlHsDjyP_7esXJQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: '#ddd', textDecoration: 'none'}}
                    >
                        <img src={youtubeImage} style={{height: 16}} alt="youtube"/> YouTube
                    </a>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </>
);