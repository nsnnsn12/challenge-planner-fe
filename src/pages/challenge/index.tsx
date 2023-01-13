import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Grid } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Challenge() {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ListItemText primary="챌린지 내용" />
        </Grid>
        <Grid item xs={4}>
          <ListItemText primary="완료 여부 및 남은 횟수" />
        </Grid>
      </Grid>
      <Grid item xs={4}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="탈퇴" icon={<RestoreIcon />} />
            <BottomNavigationAction label="채팅방" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="인증" icon={<LocationOnIcon />} />
            <BottomNavigationAction
              label="기록보기"
              icon={<LocationOnIcon />}
            />
            <BottomNavigationAction
              label="챌린지 수정"
              icon={<LocationOnIcon />}
            />
          </BottomNavigation>
        </Grid>
      {/* <nav aria-label="main mailbox folders">
        <List>
          <ListItem divider>
            <Box width={"100%"}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <ListItemText primary="챌린지 내용" />
                </Grid>
                <Grid item xs={4}>
                  <ListItemText primary="완료 여부 및 남은 횟수" />
                </Grid>
                <Grid item xs={4}>
                  <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <BottomNavigationAction
                      label="탈퇴"
                      icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                      label="채팅방"
                      icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                      label="인증"
                      icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                      label="기록보기"
                      icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                      label="챌린지 수정"
                      icon={<LocationOnIcon />}
                    />
                  </BottomNavigation>
                </Grid>
              </Grid>
            </Box>
          </ListItem>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav> */}
    </Box>
  );
}
