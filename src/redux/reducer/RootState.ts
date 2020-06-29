import { useSelector, TypedUseSelectorHook } from "react-redux";
import { ArticleReducerType } from "../../../interfaces/article";

interface RootState {
  article: ArticleReducerType;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
