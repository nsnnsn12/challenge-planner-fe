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
  const [selectedData, selectData] = useState<ChallengeModel | null>(null);

  useInjectReducer({ key: sliceName, reducer });
  useInjectSaga({ key: sliceName, saga });

  const data = useAppSelector(selectors.challengesSelected);
  
  useEffect(() => {
    dispatch(actions.fetchChallenge());
  }, []);

  const handleClickRow = (item : ChallengeModel) => {
    selectData(item);
    setOpen(true);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", 
        padding:"50px 0px"
    }}>
      {data.map((item: ChallengeModel) => {
        return (
          <ChallengeItem key={item.id} data={item} selectItem={handleClickRow} />
        );
      })}
      
      <Pagination sx={{ display:'flex', justifyContent:'center', my: '60px' }} count={10} />
      {selectedData && <ChallengeDetail isOpen={isOpen} setOpen={() => setOpen(!isOpen)} data={selectedData}></ChallengeDetail>}
    </Box>
  );
}
