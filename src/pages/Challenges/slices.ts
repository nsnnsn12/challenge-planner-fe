import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSliceSaga, SagaType } from "redux-toolkit-saga";
import { ChallengeModel } from "./models";
import { call, put } from "redux-saga/effects";
import { getChallenges } from "./apis";
import { AppState } from "../../store/store";

interface ChallengeState {
  data: ChallengeModel[];
}

const sliceName = 'challenge';
const initialState: ChallengeState = {
  data: [],
};

//reducer
const reducers = {
  fetchChallengeSuccess: (
    state: ChallengeState,
    action: PayloadAction<any>
  ) => ({
    ...state,
    data: action.payload,
  }),
};

const sliceOption = {
  name: sliceName,
  initialState,
  reducers,
};

interface SearchParam {
  title?: string;
  content?: string;
}

const slice = createSlice(sliceOption);
console.log(slice);
const { reducer, actions: reducerActions } = slice;

//saga
const sliceSaga = createSliceSaga({
  name: sliceName,
  sagaType: SagaType.TakeLatest,
  caseSagas: {
    *fetchChallenge(action: PayloadAction<SearchParam | undefined>): any {
      try {
        const response = yield call(getChallenges, action.payload);
        const challenges = ChallengeModel.toClass(response) as ChallengeModel[];

        yield put(slice.actions.fetchChallengeSuccess(challenges));
      } catch (err) {
        //todo err process
      }
    },
  },
});

const { saga, actions: sagaActions } = sliceSaga;

export {
  initialState,
  sliceName,
  reducer,
  saga,
  reducerActions,
  sagaActions,
};
