import React from 'react'
import {Link} from "react-router-dom";

export const PageLink = ({to, children, style = {}}) => (
    <Link to={to} style={{textDecoration: 'none', ...style}}>{children}</Link>
);