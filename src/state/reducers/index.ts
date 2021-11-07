import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
const reducers = combineReducers({
  toggle: toggleReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
