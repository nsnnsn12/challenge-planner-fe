import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import ChallengeItem from "./components/ChallengeItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { sagaActions as actions, sliceName, reducer, saga } from "./slices";
import { ChallengeModel } from "./models";
import { useInjectReducer, useInjectSaga } from "@nixjs23n6/redux-injectors";
import { selectors } from "./selectors";
import Pagination from '@mui/material/Pagination';
import ChallengeDetail from "./components/ChallengeDetail";

export default function Challenges() {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  useInjectReducer({ key: sliceName, reducer });
  useInjectSaga({ key: sliceName, saga });

  const data = useAppSelector(selectors.challengesSelected);
  
  useEffect(() => {
    dispatch(actions.fetchChallenge());
  }, []);

  const handleClickRow = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", 
        padding:"50px 0px"
    }}>
      {data.map((item: ChallengeModel) => {
        return (
          <ChallengeItem key={item.id} title={item.title} isApproved={item.isApproved} context={item.context} startDate={item.startDate} endDate={item.endDate} onClick={handleClickRow} />
        );
      })}
      
      <Pagination sx={{ display:'flex', justifyContent:'center', my: '60px' }} count={10} />
      {<ChallengeDetail isOpen={isOpen} setOpen={() => setOpen(!isOpen)}></ChallengeDetail>}
    </Box>
  );
}
