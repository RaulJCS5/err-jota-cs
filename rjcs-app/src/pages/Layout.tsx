import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Theme } from '@mui/material';


export const Layout = ({toggleColorMode,theme}:{toggleColorMode:()=>void,theme:Theme}) => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </nav>
            <Outlet />
        </div>
    )
}
