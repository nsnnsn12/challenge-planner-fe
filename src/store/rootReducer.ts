import { combineReducers } from "@reduxjs/toolkit";
import { Reducer } from "redux";

function createReducer(injectedReducers: {[key: string]: Reducer} = {}){
  return combineReducers({
    ...injectedReducers,
  });
}

export default createReducer;