import { GET_ARTICLES, GET_ARTICLE_BY_ID, CLEAR_ARTICLE } from "../types";

const initialState = {
  articles: [],
  total: 0,
  article: null,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      if (!action.error) {
        return {
          ...state,
          // articles: action.payload.result.array,
          // total: action.payload.result.count,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
