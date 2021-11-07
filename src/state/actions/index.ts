import { ActionType } from "../action-types/index";
import { Dispatch } from "redux";
import { ToggleAction } from "../actions-interfaces";
export const toggleHandler = () => {
  return (dispatch: Dispatch<ToggleAction>) => {
    dispatch({
      type: ActionType.TOGGLE
    });
  };
};
