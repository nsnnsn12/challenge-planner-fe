import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar, Chip, Grid, Stack, Tooltip } from "@mui/material";
import Button from "@mui/material/Button/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { textAlign } from "@mui/system";

interface ChallengeItemProps {
  title: string;
  context?: string;
  isApproved: boolean;
}

export default function ChallengeItem({
  title,
  context = "",
  isApproved,
}: ChallengeItemProps) {
  return (
    <Grid container sx={{ minHeight: 50, mb: 2 }}>
      <Grid item xs={9}>
        <Stack
          sx={{
            borderRadius: 2,
            border: 1,
            height: "100%",
            width: "95%",
            mx: "auto",
            alignItems: "center",
            px: 2,
          }}
          direction={"row"}
          spacing={2}
        >
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
          <Tooltip title={context} sx={{flexGrow:1}}>
            <Box>{title}</Box>
          </Tooltip>
          <Chip label="20230131 ~ 20230213" />
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Button
          disabled={isApproved}
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
