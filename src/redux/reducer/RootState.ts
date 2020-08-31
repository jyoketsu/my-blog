import { useSelector, TypedUseSelectorHook } from "react-redux";
import { ArticleReducerType } from "../../../interfaces/article";
import { CommonReducerType } from "../../../interfaces/common";

interface RootState {
  article: ArticleReducerType;
  common: CommonReducerType;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
