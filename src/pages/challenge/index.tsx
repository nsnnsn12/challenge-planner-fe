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
import { Button, Grid, Stack } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Challenge() {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Grid container sx={{minHeight:50, mb:2}}>
        <Grid item xs={8}>
          <Box sx={{ borderRadius: 2, border: 1, height:'100%', width:'95%', mx:'auto' }}>챌린지 내용</Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ borderRadius: 2, border: 1, height:'100%', width:'95%', mx:'auto' }}>완료 여부 및 남은 횟수</Box>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<RestoreIcon />}>
          탈퇴
        </Button>
        <Button variant="outlined" startIcon={<RestoreIcon />}>
          채팅방
        </Button>
        <Button variant="outlined" startIcon={<RestoreIcon />}>
          인증
        </Button>
        <Button variant="outlined" startIcon={<RestoreIcon />}>
          기록보기
        </Button>
        <Button variant="outlined" startIcon={<RestoreIcon />}>
          챌린지 수정
        </Button>
      </Stack>
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
