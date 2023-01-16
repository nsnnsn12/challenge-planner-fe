import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button/Button";

interface ChallengeItemProps {
  title: string;
  context?: string;
  isApproved: boolean;
}

export default function ChallengeItem({
    title,
    context = '',
    isApproved,
  }: ChallengeItemProps) {
  return (
    <Grid container sx={{ minHeight: 50, mb: 2 }}>
      <Grid item xs={9}>
        <Box
          sx={{
            borderRadius: 2,
            border: 1,
            height: "100%",
            width: "95%",
            mx: "auto",
          }}
        >
          {title}
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Button disabled={isApproved}
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
