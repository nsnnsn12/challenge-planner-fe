import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Stack } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChatIcon from '@mui/icons-material/Chat';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';


export default function ApprovedChallenges() {
  const [value, setValue] = React.useState(0);
  const dumyArray = new Array(5).fill(null);
  return (
    <>
      {
        dumyArray.map((item, key)=>(
          <Box key={key} boxShadow={3} sx={{ width: "100%",  bgcolor: "background.paper", padding: '30px', margin:'20px' }}>
            <Grid container sx={{minHeight:50, mb:2}}>
              <Grid item xs={8}>
                <Box sx={{ borderRadius: 2, border: 1, height:'100%', width:'95%', mx:'auto', padding:'0.5em' }}>챌린지 내용</Box>
              </Grid>
              <ChallengeCount cnt={key} perpose={3} />
            </Grid>
            <Stack direction="row" spacing={2} ml={2}>
              <Button variant="outlined" startIcon={<DeleteForeverIcon />}>
                탈퇴
              </Button>
              <Button variant="outlined" startIcon={<ChatIcon />}>
                채팅방
              </Button>
              <Button variant="outlined" startIcon={<PersonIcon />}>
                인증
              </Button>
              <Button variant="outlined" startIcon={<RestoreIcon />}>
                기록보기
              </Button>
              <Button variant="outlined" startIcon={<CreateIcon />}>
                챌린지 수정
              </Button>
            </Stack>
          </Box>
        ))
      }
      <Pagination sx={{ display:'flex', justifyContent:'center', my: '60px' }} count={10} />
    </>
    
  );
}

type ChallengeCountProps = {
  cnt:number;
  perpose:number;
}

function ChallengeCount({cnt,perpose}:ChallengeCountProps){
  
  return (
    <Grid item xs={4}>
      <Box title='여부 및 남은 횟수' sx={{ borderRadius: 2, border: 1, height:'100%', width:'95%', mx:'auto', padding:'0.5em'  }}>
      {
        perpose <= cnt ? (
        <Typography color='primary' >
          완료
        </Typography>
        ):(
        <Typography color='secondary'>
          미완료
        </Typography>
        )
      }
        <Typography  color='primary' component="span" variant="h5" >
        {cnt}  <Typography  component="span" variant="h6" > / {perpose} </Typography>
        </Typography>
      </Box>
    </Grid>
  )
  
}
