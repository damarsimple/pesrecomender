import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useUserStore } from "../stores/user";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#595858",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { user, setUser } = useUserStore();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#353434",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <ResponsiveAppBar />
        {user ? (
          <Component {...pageProps} />
        ) : (
          <Box
            height="100vh"
            width="100vw"
            display="flex"
            justifyContent="center"
            alignItems={"center"}
            gap={2}
            flexDirection={"column"}
          >
            <Typography variant="h3" component="h1">
              PES RECOMENDER
            </Typography>

            <TextField label="Username" variant="outlined" />
            <TextField label="Passowrd" variant="outlined" />
            <Button
              variant="contained"
              sx={{
                width: 250,
              }}
              onClick={() => setUser({})}
            >
              LOGIN
            </Button>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from "next/router";

const pages = [
  {
    name: "League",
    path: "/",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Matches",
    path: "/matches",
  },
  {
    name: "Players",
    path: "/players",
  },
];
const settings = ["Logout"];

const ResponsiveAppBar = () => {
  const { pathname, push } = useRouter();

  const { user, setUser } = useUserStore();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            FOOTBALL LINEUP DECISION SYSTEM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    push(page.path);
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      textDecoration:
                        pathname == page.path ? "underline" : undefined,
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {user &&
              pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    push(page.path);
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textDecoration:
                      pathname == page.path ? "underline" : undefined,
                  }}
                >
                  {page.name}
                </Button>
              ))}
          </Box>

          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
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
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      setUser(null);
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
