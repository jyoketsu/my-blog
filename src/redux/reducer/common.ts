import { actionTypes } from "../actions";
import { CommonReducerType } from "../../../interfaces/common";

const initialState: CommonReducerType = {
  themeType: "dark",
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME_TYPE:
      return {
        ...state,
        themeType: state.themeType === "dark" ? "light" : "dark",
      };
    default:
      return state;
  }
};
