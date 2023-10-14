import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "./logo.png";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './navbar.css'

const pages = [
  "Flights",
  "My Bookings",
  "Experience",
  "Explore",
  "Flight Status",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const appBarStyle = {
    background: "transparent", // Set the background to transparent
    boxShadow: "none", // Remove the box shadow
  };

  return (
    <AppBar position="static" sx={appBarStyle}>
       
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Un responsive Icon */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img
            src={Logo}
            alt="Ural Logo"
            className="logo-image"
          />

          {/* Unresponsive Icon ends  */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" },mt:1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* Responsive Menu bar  */}
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* unresponsive menu bar ends  */}

          {/* Responsive Logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          <img
            src={Logo}
            alt="Ural Logo"
            className="mobile-logo-image"
          />
          </Typography>
          {/* Responsive logo ends and unresponsive menu starts*/}

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 36,mt:3 }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,ml:1.5, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/*  unresponsive menu ends*/}

          {/* Settings Scenes */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">

              {/* <p sx={{mt:100}}className="nav-sign">login | sign up</p> */}
              <div className="login-signup">
                <AccountCircleOutlinedIcon/>
              <p> login | Sign up</p>
              <p><KeyboardArrowDownOutlinedIcon /></p>
              </div>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
