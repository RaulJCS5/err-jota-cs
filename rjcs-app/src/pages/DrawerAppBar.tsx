import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BottomNavigation, BottomNavigationAction, Paper, Theme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Outlet, useNavigate } from 'react-router';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { SocialIcon } from 'react-social-icons';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from 'react';
import ThumbUp from '@mui/icons-material/ThumbUp';

export const changeBG = () => localStorage.getItem("theme") === 'light' ? '#fff' : '#121212'
export const changeFG = () => localStorage.getItem("theme") === 'light' ? '#121212' : '#fff'

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    toggleColorMode: () => void,
    theme: Theme,
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Projects'];

export default function DrawerAppBar(props: Props) {
    const { toggleColorMode, theme, window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [thumbsUp, setThumbsUp] = useState(false);
    const [thumbsDown, setThumbsDown] = useState(false);
    const navigate = useNavigate()
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                RJCS
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={(e) => {
                            e.preventDefault()
                            const itemLower = item.toLowerCase()
                            navigate(itemLower === 'home' ? '/' : itemLower)
                        }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <Box component="main" sx={{ paddingTop: '32px', paddingBottom: '64px' }}>
                <CssBaseline />
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <RocketLaunchIcon sx={{ cursor: 'pointer' }} onClick={() => { navigate('/') }}></RocketLaunchIcon>
                        <Typography sx={{ cursor: 'pointer' }} onClick={() => { navigate('/') }}>RJCS</Typography>
                        <Box
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        ></Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }} onClick={(e) => {
                                    e.preventDefault()
                                    const itemLower = item.toLowerCase()
                                    navigate(itemLower === 'home' ? '/' : itemLower)
                                }}>
                                    {item}
                                </Button>
                            ))}
                            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box sx={{ marginTop: '64px' }}>
                    <Outlet></Outlet>
                </Box>
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation showLabels>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
                        <Typography variant='body2' sx={{ color: 'text.secondary' }}>Are you enjoying?</Typography>
                        <Box sx={{ marginLeft: 1 }}>
                            <IconButton size='small' onClick={() => { setThumbsUp(!thumbsUp); setThumbsDown(false) }}>
                                <ThumbUpIcon color={!thumbsUp ? undefined : 'success'} fontSize='small'></ThumbUpIcon>
                            </IconButton>
                            <IconButton size='small' onClick={() => { setThumbsDown(!thumbsDown); setThumbsUp(false) }}>
                                <ThumbDownIcon color={!thumbsDown ? undefined : 'error'} fontSize='small'></ThumbDownIcon>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}></Box>
                    <Box sx={{ marginRight: 2 }}>
                        <SocialIcon fgColor={changeFG()} bgColor={changeBG()} url='https://github.com/RaulJCS5'></SocialIcon>
                        <SocialIcon fgColor={changeFG()} bgColor={changeBG()} url='https://www.linkedin.com/in/rauljosecsantos/'></SocialIcon>
                        <SocialIcon fgColor={changeFG()} bgColor={changeBG()} url='https://twitter.com/rauljosesan'></SocialIcon>
                        <SocialIcon fgColor={changeFG()} bgColor={changeBG()} url='https://www.instagram.com/rauljcsantos'></SocialIcon>
                        <SocialIcon fgColor={changeFG()} bgColor={changeBG()} url='https://www.facebook.com/raul.jose.35/'></SocialIcon>
                    </Box>
                </BottomNavigation>
            </Paper>
        </Box>
    );
}