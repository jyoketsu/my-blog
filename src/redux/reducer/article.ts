import { actionTypes } from "../actions";

const initialState = {
  articles: [],
  total: 0,
  article: null,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLES_SUCCEEDED:
      return {
        ...state,
        ...{
          articles: action.data.result.array,
          total: action.data.result.count,
        },
      };
    default:
      return state;
  }
};
