import React from 'react'
import Link from 'next/link'

export const PageLink = ({children, style = {}, href}) => (
    <Link href={href}><a style={{textDecoration: 'none', ...style}}>{children}</a></Link>
);