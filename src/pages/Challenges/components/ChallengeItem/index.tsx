import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar, Chip, Grid, Stack, Tooltip } from "@mui/material";
import Button from "@mui/material/Button/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ChallengeModel } from "../../models";

interface ChallengeItemProps {
  selectItem: (item : ChallengeModel) => void;
  data: ChallengeModel;
}

export default function ChallengeItem({ selectItem, data }: ChallengeItemProps) {
  const {title, context, startDate, endDate, maximumPerson, participatingUsers} = data;
  const onClick = () => {
    selectItem(data);
  };

  const isApproved = () =>{
    if(maximumPerson <= participatingUsers.length) return false;
    return true;
  }
  return (
    <Grid container sx={{ minHeight: 50, mb: 2, my: "10px" }}>
      <Grid item xs={9} onClick={onClick}>
        <Stack
          boxShadow={2}
          sx={{
            borderRadius: 2,
            height: "100%",
            width: "95%",
            mx: "auto",
            alignItems: "center",
            pl: 2,
            padding: "10px",
          }}
          direction={"row"}
          spacing={2}
        >
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
          <Tooltip title={context} sx={{ flexGrow: 1 }}>
            <Box>{title}</Box>
          </Tooltip>
          <Chip label={`${startDate} ~ ${endDate}`} />
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Button
          disabled={!isApproved()}
          sx={{
            borderRadius: 2,
            border: 1,
            height: "100%",
            width: "95%",
            mx: "auto",
          }}
        >
          참여
        </Button>
      </Grid>
    </Grid>
  );
}
