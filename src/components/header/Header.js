import React from "react";
import {Navbar, NavbarBrand} from "react-bootstrap";
import {HeaderLinks} from "./HeaderLinks";

export const Header = () => (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <NavbarBrand>
            <h4>Two Blokes Afloat</h4>
            <h6>(in a boat)</h6>
        </NavbarBrand>
        <HeaderLinks/>
    </Navbar>
);

