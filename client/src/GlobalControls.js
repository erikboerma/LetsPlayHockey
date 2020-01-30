import React from "react";
import { withGlobalState } from "react-globally";

const GlobalControls = props => {
  return <div>{props.children}</div>;
};

export default withGlobalState(GlobalControls);
