//selector

import { AppState } from "../../store/store";
import { initialState, sliceName } from "./slices";

const challengesSelected = (state: AppState) => {
  if(!state[sliceName]) return initialState.data;
  const dataSelected = state[sliceName];
  return dataSelected.data;
};

export const selectors = {
  challengesSelected,
};
