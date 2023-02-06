import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SideBar from "./components/sideBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import AppBar from "./components/appBar";
import Toolbar from "@mui/material/Toolbar";
import { MAIN_SIDE_BAR_ITEMS } from "./constant";

const mdTheme = createTheme();

export default function MainLayout() {
  const [open, setOpen] = useState(true);
  const [appBarNm, setAppBarNm] = useState(MAIN_SIDE_BAR_ITEMS[0].primary);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} toggleDrawer={toggleDrawer} appBarNm={appBarNm} />
        <SideBar open={open} toggleDrawer={toggleDrawer} setAppBarNm={setAppBarNm} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Outlet />
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
