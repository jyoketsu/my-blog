import { GET_ARTICLES, GET_ARTICLE_BY_ID, CLEAR_ARTICLE } from "../types";

const initialState = {
  articles: [],
  total: 0,
  article: null,
};

export const articleReducer= (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.lastUpdate,
      };
    default:
      return state;
  }
}