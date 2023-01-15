import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Divider, IconButton, List, Toolbar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { DRAWER_WIDTH, MAIN_SIDE_BAR_ITEMS, SUB_SIDE_BAR_ITEMS } from "../constant";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

interface SidebarProps{
  selectedIndex: number;
  handleClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    appBarName: string
  ) => void;
}

interface SidebarItemProps extends SidebarProps{
  primary: string;
  index: number;
  uri: string;
  icon: any;
}

function SidebarItem({
  primary,
  index,
  uri,
  icon,
  selectedIndex,
  handleClick,
}: SidebarItemProps) {
  return (
    <Link to={uri}>
      <ListItemButton
        selected={selectedIndex === index}
        onClick={(event) => handleClick(event, index, primary)}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </Link>
  );
}

export function MainSideBar({selectedIndex, handleClick}:SidebarProps) {
  return (
    <>
      {MAIN_SIDE_BAR_ITEMS.map((item) => (
        <SidebarItem
          handleClick={handleClick}
          icon={item.icon}
          index={item.index}
          primary={item.primary}
          selectedIndex={selectedIndex}
          key={item.index}
          uri={item.uri}
        />
      ))}
    </>
  );
}

export function SubSideBar({selectedIndex, handleClick}:SidebarProps) {
  return (
    <>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      {SUB_SIDE_BAR_ITEMS.map((item) => (
        <SidebarItem
          handleClick={handleClick}
          icon={item.icon}
          index={item.index}
          primary={item.primary}
          selectedIndex={selectedIndex}
          key={item.index}
          uri={item.uri}
        />
      ))}
    </>
  );
}

interface SideBarProps {
  toggleDrawer: () => void;
  open: boolean;
  setAppBarNm: any;
}

export default function SideBar({ toggleDrawer, open, setAppBarNm }: SideBarProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    appBarName: string
  ) => {
    setSelectedIndex(index);
    setAppBarNm(appBarName);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <MainSideBar selectedIndex={selectedIndex} handleClick={handleListItemClick}/>
        <Divider sx={{ my: 1 }} />
        <SubSideBar selectedIndex={selectedIndex} handleClick={handleListItemClick}/>
      </List>
    </Drawer>
  );
}
