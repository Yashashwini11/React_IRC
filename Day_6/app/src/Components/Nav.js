import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Rocket from '@mui/icons-material/RocketLaunch';
import Account from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Nav() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
   

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleAbout = () => {
        navigate('/about');
    };
    const handleHome = () => {
        navigate('/home');
    };
    const handleContact = () => {
        navigate('/contact');
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Rocket sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            ROCKET
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end', gap: '1rem' } }}>
                            <Button
                                onClick={handleHome}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                HOME
                            </Button>
                            <Button
                                onClick={handleAbout}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                ABOUT
                            </Button>
                            <Button
                                onClick={handleContact}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                CONTACT
                            </Button>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Login">
                                <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                                    <Account sx={{ display: { xs: 'none', md: 'flex', color: '#fff' }, mr: 1 }} />
                                </IconButton>

                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text i n a modal
                    </Typography>
                    <TextField id='outlined-basic' label='username' variant='outlined' color='secondary' sx={{ my: 1, width: '100%' }}/>
                    <TextField id='outlined-basic' label='password' variant='outlined' color='secondary' sx={{ my: 1, width: '100%' }}/>
                    <Button variant='contained' sx={{ my: 1, width: '100%', backgroundColor: 'blueviolet' }}>Login</Button>
                </Box>
            </Modal>
        </>
    );
}
export default Nav;
