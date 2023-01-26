import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import ChallengeItem from "./components/ChallengeItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { sagaActions as actions, sliceName, reducer, saga } from "./slices";
import { ChallengeModel } from "./models";
import { useInjectReducer, useInjectSaga } from "@nixjs23n6/redux-injectors";
import { selectors } from "./selectors";

export default function Challenges() {
  console.log('Challenges 호출');

  const dispatch = useAppDispatch();
  useInjectReducer({ key: sliceName, reducer });
  useInjectSaga({ key: sliceName, saga });

  //injector 주입은 정상적이나
  //selector가 이상하다
  console.log('뭔가 이상하다');
  const data = useAppSelector(selectors.challengesSelected);
  console.log('리턴된 값 확인:', data);
  useEffect(() => {
    console.log('useEffect호출');
    dispatch(actions.fetchChallenge());
  }, []);
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      {data.map((item: any) => {
        return (
          <ChallengeItem title={item.title} isApproved={item.isApproved} />
        );
      })}
    </Box>
  );
}
