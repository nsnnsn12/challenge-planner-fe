import React from "react";
import { APPROVED_CHALLENGE_LIST_URI, CHALLENGE_LIST_URI, DASHBOARD_URI } from "../../../constants/routes";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const DRAWER_WIDTH: number = 240;

export const MAIN_SIDE_BAR_ITEMS = [
  {
    primary: "Dashboard",
    index: 0,
    uri: DASHBOARD_URI,
    icon: <DashboardIcon />,
  },
  {
    primary: "챌린지 목록",
    index: 3,
    uri: CHALLENGE_LIST_URI,
    icon: <LayersIcon />,
  },
  {
    primary: "참여 중인 챌린지 목록",
    index: 1,
    uri: APPROVED_CHALLENGE_LIST_URI,
    icon: <LayersIcon />,
  },
];

export const SUB_SIDE_BAR_ITEMS = [
  {
    primary: "Current month",
    index: 2,
    uri: "",
    icon: <AssignmentIcon />,
  },
];
