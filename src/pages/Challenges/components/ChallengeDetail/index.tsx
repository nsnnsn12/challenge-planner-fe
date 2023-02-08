import {
  Avatar,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import TocIcon from '@mui/icons-material/Toc';
import { Box, Stack } from "@mui/system";
import * as React from "react";

export interface ChallengeDetailProps {
  isOpen: boolean;
  setOpen: () => void;
}

export default function ChallengeDetail({
  isOpen,
  setOpen,
}: ChallengeDetailProps) {
  return (
    <Dialog open={isOpen} fullWidth={true} maxWidth="lg">
      <DialogTitle>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Box>챌린지 제목</Box>
          <Chip label="기간 : 2023/01/31 ~ 2023/01/31" />
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack direction={"column"} justifyContent="space-between" height={'100%'}>
              <Box>
                챌린지 내용 챌린지 내용 챌린지 내용 챌린지 내용 챌린지 내용
                챌린지 내용 챌린지 내용 챌린지 내용 챌린지 내용 챌린지 내용
                챌린지 내용 챌린지 내용 챌린지 내용 챌린지 내용 챌린지 내용
              </Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box>인증방식</Box>
                <Button variant="outlined" startIcon={<TocIcon />}>
                  글
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="row" spacing={1} justifyContent="space-between">
              <Box>참여인원</Box>
              <Chip label="4/6" />
            </Stack>
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="유저 이름" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={setOpen}>참여하기</Button>
        <Button onClick={setOpen}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
}
