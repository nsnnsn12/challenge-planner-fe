import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export default function Challenges() {
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
    </Box>
  );
}
