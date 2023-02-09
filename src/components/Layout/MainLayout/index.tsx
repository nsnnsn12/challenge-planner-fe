import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SideBar from "./components/sideBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer";
import AppBar from "./components/appBar";
import Toolbar from "@mui/material/Toolbar";
import { MAIN_SIDE_BAR_ITEMS, MenuItem, SUB_SIDE_BAR_ITEMS } from "./constant";

const mdTheme = createTheme();

function getSelectedSideBar(url : string) {
  let menuItem = MAIN_SIDE_BAR_ITEMS[0];
  MAIN_SIDE_BAR_ITEMS.forEach(item => {
    if(item.uri === url){
      menuItem = item;
      return;
    }
  })

  SUB_SIDE_BAR_ITEMS.forEach(item => {
    if(item.uri === url){
      menuItem = item;
      return;
    }
  })
  return menuItem;
}

export default function MainLayout() {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [seletedMenu, selectMenu] = useState<MenuItem>(getSelectedSideBar(location.pathname));
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} toggleDrawer={toggleDrawer} appBarNm={seletedMenu?.primary} />
        <SideBar open={open} toggleDrawer={toggleDrawer} selectMenu={selectMenu} selectedMenuItem={seletedMenu} />
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