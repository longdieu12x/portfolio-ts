import { ActionType } from "../action-types";
import { ToggleAction } from "../actions-interfaces";

const initialState: { data: boolean } = {
  data: false
};

type Action = ToggleAction;

const bankReducer = (
  state: { data: boolean } = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.TOGGLE:
      return {
        ...state,
        data: !state.data
      };
    default:
      return state;
  }
};

export default bankReducer;
