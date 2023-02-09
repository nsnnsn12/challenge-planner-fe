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
import DescriptionIcon from '@mui/icons-material/Description';
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import DoneIcon from '@mui/icons-material/Done';
import { Box, Stack } from "@mui/system";
import * as React from "react";
import { ChallengeModel } from "../../models";

export interface ChallengeDetailProps {
  isOpen: boolean;
  setOpen: () => void;
  data: ChallengeModel;
}

const AuthenticationType = Object.freeze({
  Picture:'picture',
  Writing: 'writing',
  Video: 'video',
  Check: 'check',
});

function getAuthenticationType(authenticationType : string | undefined) {
  switch (authenticationType) {
    case AuthenticationType.Picture:
      return (<Button variant="outlined" startIcon={<CollectionsIcon />}>사진</Button>);
    case AuthenticationType.Writing:
      return (<Button variant="outlined" startIcon={<DescriptionIcon />}>글</Button>);
    case AuthenticationType.Video:
      return (<Button variant="outlined" startIcon={<VideocamIcon />}>동영상</Button>);
    case AuthenticationType.Check:
      return (<Button variant="outlined" startIcon={<DoneIcon />}>체크</Button>);
    default:
      break;
  }
};

export default function ChallengeDetail({
  isOpen,
  setOpen,
  data,
}: ChallengeDetailProps) {
  const {title, context, startDate, endDate, maximumPerson, participatingUsers, authenticationType} = data;
  const isApproved = () =>{
    if(maximumPerson <= participatingUsers.length) return false;
    return true;
  }
  return (
    <Dialog open={isOpen} fullWidth={true} maxWidth="lg">
      <DialogTitle>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Box>{title}</Box>
          <Chip label={`기간 : ${startDate} ~ ${endDate}`} />
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack
              direction={"column"}
              justifyContent="space-between"
              height={"100%"}
            >
              <Box>{context}</Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box>인증방식</Box>
                {getAuthenticationType(authenticationType)}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="row" spacing={1} justifyContent="space-between">
              <Box>참여인원</Box>
              <Chip
                label={`${participatingUsers.length}/${maximumPerson}`}
              />
            </Stack>
            <List component="nav" aria-label="mailbox folders">
              {participatingUsers.map((item: any) => {
                return (
                  <>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.userName} />
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={setOpen} disabled={!isApproved()}>참여하기</Button>
        <Button onClick={setOpen}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
}
