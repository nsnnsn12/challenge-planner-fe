import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Stack } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";

export default function ApprovedChallenges() {
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
      <Stack direction="row" spacing={2} ml={2}>
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
    </Box>
  );
}
