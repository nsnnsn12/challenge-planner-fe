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
  //리듀서와 사가를 주입하면서 컴포넌트가 한 번 더 실행된다.
  console.log('Challenges 호출');

  const dispatch = useAppDispatch();
  useInjectReducer({ key: sliceName, reducer });
  useInjectSaga({ key: sliceName, saga });

  console.log('useSelector 동작 과정 확인1');
  //useSelector는 처음 렌더링될 때 그리고 액션이 디스패치될 때 실행된다.
  //useSelector를 이용해서 가져올 때 해당 값이 any면 유지보수하기 힘들어지지 않는가?
  const data = useAppSelector(selectors.challengesSelected);
  console.log('useSelector 동작 과정 확인2');
  useEffect(() => {
    console.log('useEffect호출');
    dispatch(actions.fetchChallenge());
  }, []);

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      {data.map((item: ChallengeModel) => {
        return (
          <ChallengeItem title={item.title} isApproved={item.isApproved} context={item.context} />
        );
      })}
    </Box>
  );
}
