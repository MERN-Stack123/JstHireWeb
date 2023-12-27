import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/images/logo.png";
import { createTheme, ThemeProvider } from "@mui/material";

import { Stack } from "@mui/system";
import { NavLink, useNavigate } from "react-router-dom";
import { navCustomStyle } from "../../customstyle/navCustomStyle";

const employer = ["Post Jobs"];
const login = ["Login"];
const register = ["Register"];

const Navbar = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });
  const navigate = useNavigate();
  const [handleNav, setHandleNav] = useState(null);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setHandleNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setHandleNav(null);
    //setAnchorElNav(null);
  };

  const handleNavLogin = () => {
    navigate("/employee/loginp");
  };

  const handleNavRegister = () => {
    navigate("/employee/register");
  };

  const handleNavEmployer = () => {
    navigate("/employee/employer");
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#FFFFFF", elevation: 0.1 }}>
      <Container maxWidth="full">
        <ThemeProvider theme={theme}>
          <Toolbar disableGutters>
            <Typography noWrap href="/" sx={navCustomStyle.sxTypoBrandOne}>
              <Box component="img" height={"full"} alt="brand_img" src={Logo} />
            </Typography>

            <Box sx={{ flexGrow: 1 }}></Box>

            <Typography href="/" sx={navCustomStyle.sxTypoBrandTwo}>
              <Box
                component="img"
                height={"full"}
                alt="Your logo."
                src={Logo}
              />
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Button onClick={handleNavLogin} sx={navCustomStyle.sxLogin}>
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textTransform: "capitalize",
                  }}
                >
                  {login}
                </NavLink>
              </Button>

              <Button
                onClick={handleNavRegister}
                sx={navCustomStyle.sxRegister}
              >
                <NavLink
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textTransform: "capitalize",
                  }}
                >
                  {register}
                </NavLink>
              </Button>

              <Button
                onClick={handleNavEmployer}
                sx={navCustomStyle.sxEmployer}
              >
                <NavLink
                  to="/employer"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textTransform: "capitalize",
                  }}
                >
                  {employer}
                </NavLink>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              {/* menu icon */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={navCustomStyle.sxMenuIcon} />
              </IconButton>

              {/* menu */}
              <Menu
                id="menu-appbar"
                anchorEl={handleNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(handleNav)}
                onClose={handleCloseNavMenu}
                sx={navCustomStyle.sxMenu}
              >
                <MenuItem>
                  <Stack>
                    <Typography
                      textAlign="left"
                      onClick={handleNavLogin}
                      py={1}
                    >
                      <NavLink
                        to="/loginp"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          textTransform: "capitalize",
                        }}
                      >
                        {login}
                      </NavLink>
                    </Typography>

                    <Typography
                      textAlign="left"
                      onClick={handleNavRegister}
                      py={1}
                    >
                      <NavLink
                        to="/register"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          textTransform: "capitalize",
                        }}
                      >
                        {register}
                      </NavLink>
                    </Typography>

                    <Typography
                      textAlign="left"
                      onClick={handleNavEmployer}
                      py={1}
                    >
                      <NavLink
                        to="/employer"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          textTransform: "capitalize",
                        }}
                      >
                        {employer}
                      </NavLink>
                    </Typography>
                  </Stack>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </ThemeProvider>
      </Container>
    </AppBar>
  );
};
export default Navbar;
