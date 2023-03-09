import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </nav>
            <Outlet />
        </div>
    )
}
