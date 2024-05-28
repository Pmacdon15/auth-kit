import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { getUser, getSignInUrl, signOut } from '@workos-inc/authkit-nextjs';
import middleware from '../middleware';
import Link from 'next/link'

import SignInButton from './signInButton';

export default async function ButtonAppBar() {
    const { user } = await getUser();
    const signInUrl = await getSignInUrl();


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {user ? (<form action={async () => {
                        'use server';
                        await signOut();
                    }}><Button type="submit" color="inherit">Logout</Button></form>) : (<SignInButton signInUrl={signInUrl} />)}
                </Toolbar>
            </AppBar>
        </Box >
    );
}