import { combineReducers } from "redux";
import { articleReducer } from "./article";
import { commonReducer } from "./common";

export const rootReducer = combineReducers({
  article: articleReducer,
  common: commonReducer,
});