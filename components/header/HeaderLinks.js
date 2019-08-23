import React from 'react'
import {PageLink} from "../PageLink";
import {Nav, Navbar} from "react-bootstrap";
import {YouTubeLink} from "../youTubeLink/YouTubeLink";
import {PatreonLink} from "../patreonLink/PatreonLink";


export const HeaderLinks = () => (
    <>
        <Navbar.Toggle aria-controls="header-menu"/>
        <Navbar.Collapse id="header-menu">
            <Nav className="ml-auto">
                <Nav.Link as="span">
                    <PageLink  href="/">Home</PageLink>
                </Nav.Link>
                <Nav.Link as="span">
                    <PageLink href="/contact-us">Contact Us</PageLink>
                </Nav.Link>
                <Nav.Link as="span">
                    <YouTubeLink/>
                </Nav.Link>
                <Nav.Link as="span">
                    <PatreonLink />
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </>
);