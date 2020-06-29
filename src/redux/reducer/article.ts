import { actionTypes } from "../actions";
import { ArticleReducerType } from "../../../interfaces/article";

const initialState: ArticleReducerType = {
  articles: [],
  total: 0,
  loading: false,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLES:
      return {
        ...state,
        ...{
          loading: true,
        },
      };
    case actionTypes.GET_ARTICLES_SUCCEEDED:
      return {
        ...state,
        ...{
          articles: action.data.result.array,
          total: action.data.result.count,
          loading: false,
        },
      };
    default:
      return state;
  }
};
