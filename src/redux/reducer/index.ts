import { combineReducers } from "redux";
import { articleReducer } from "./article";

export const rootReducer = combineReducers({
  article: articleReducer,
});