import React from 'react'
import {MainLayout} from "../layouts/MainLayout";
import {Container, Row, Col} from "react-bootstrap";
import {WaterMakerCard} from "../cards/water-maker/WaterMakerCard";
import {CtoCCard} from "../cards/c-to-c/CtoCCard";
import {WhereAreWeNowCard} from "../cards/where-are-we-now/WhereAreWeNowCard";
import {CircuitBuilderCard} from "../cards/circuit-builder/CircuitBuilderCard";

export default () => (
    <MainLayout>
        <table>
            <tr>
                <TD width="30%">
                    <Padding><CtoCCard/></Padding>
                    <Padding><CircuitBuilderCard/></Padding>
                    <Padding><WaterMakerCard/></Padding>
                </TD>
                <TD width="70%">
                    <Padding><WhereAreWeNowCard/></Padding>
                </TD>
            </tr>
        </table>
    </MainLayout>
)

const TD = ({children, width}) => (
    <td style={{width, border: 'none', padding: 5}} valign="top">
        {children}
    </td>
);

const Padding = ({children}) => (
    <div style={{marginBottom: 5}}>
        {children}
    </div>
)

