import React from "react";
import "./Toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

const Toggle: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);
  const { toggle } = state;
  const { toggleHandler } = bindActionCreators(actionCreators, dispatch);
  const handleClick = () => {
    toggleHandler();
  };
  return (
    <div className="t" onClick={handleClick}>
      <img src={Sun} alt="sun-img" className="t-icon" />
      <img src={Moon} alt="moon-img" className="t-icon" />
      <div className="t-button" style={{ 'transition': "all 0.5s ease", left: toggle.data ? 0 : 25 }}></div>
    </div>
  );
};
export default Toggle;
