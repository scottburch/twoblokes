import React from 'react'
import {PageLink} from "../PageLink";
import {Nav, Navbar} from "react-bootstrap";
import {YouTubeLink} from "../youTubeLink/YouTubeLink";
import {PatreonLink} from "../patreonLink/PatreonLink";
import {TwitterLink} from "../twitterLink/TwitterLink";
import {FacebookLink} from "../facebookLink/FacebookLink";
import {InstagramLink} from "../instagramLink/InstagramLink";


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
                    <InstagramLink/>
                </Nav.Link>
                <Nav.Link as="span">
                    <FacebookLink/>
                </Nav.Link>
                <Nav.Link as="span">
                    <TwitterLink/>
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