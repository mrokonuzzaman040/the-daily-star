import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';

// Logo
import logo from '../../assets/logo.svg'
import { IconButton } from '@mui/material';
import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import Link from 'next/link';

const pages = [
    {
        route: 'Home',
        pathname: '/'
    },
    {
        route: 'News',
        pathname: '/news'
    },
    {
        route: 'categories',
        pathname: '/categories'
    },
    {
        route: 'About',
        pathname: '/about'
    },
    {
        route: 'Services',
        pathname: '/services'
    },
    {
        route: 'Contact',
        pathname: '/contact'
    }
];

function Navbar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Image src={logo} alt="logo" width={150} height={50} />

                    <Box className="text-white flex items-center justify-center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button color="inherit">{item.route}</Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{
                        "& svg": {
                            color: "white",
                            fontSize: "2rem",
                            "&:hover": {
                                color: "#00acee"
                            }
                        }
                    }} className="flex justify-between">
                        <IconButton>
                            <Twitter />
                        </IconButton>

                        <IconButton>
                            <GitHub />
                        </IconButton>

                        <IconButton>
                            <LinkedIn />
                        </IconButton>

                        <IconButton>
                            <Facebook />
                        </IconButton>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Navbar;