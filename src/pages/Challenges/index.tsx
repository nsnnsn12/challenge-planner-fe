import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ChallengeItem from "./components/ChallengeItem";

const items= [
  {
    title: '새벽 깨우기',
    context: '정해진 시간 내 일찍 일어나 사진 인증',
    isApproved: false,
  },
  {
    title: '스터디',
    context: '주 3회 이상 개인 스터디 인증',
    isApproved: true,
  }
]
export default function Challenges() {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      {items.map(item => {
        return <ChallengeItem title={item.title} isApproved={item.isApproved} />
      })}
    </Box>
  );
}
