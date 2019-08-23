import React from "react";
import {Navbar, NavbarBrand} from "react-bootstrap";
import {HeaderLinks} from "./HeaderLinks";
import logo from './logo.png'

export const Header = () => (
    <Navbar  collapseOnSelect expand="lg">
        <NavbarBrand>
            <img src={logo} height={60} alt="two blokes afloat - logo"/>
        </NavbarBrand>
        <HeaderLinks/>
    </Navbar>
);

