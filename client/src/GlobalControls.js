import React from "react";
import { withGlobalState } from "react-globally";

const GlobalControls = props => {
  const setUserSession = ({ token, userId }) => {
    props.setGlobalState({
      authToken: token,
      userId
    });
  };

  const clearUserSession = () => {
    props.setGlobalState({
      authToken: "",
      userId: null
    });
  };

  return <div clearUserSession={clearUserSession}>{props.children} </div>;
};

export default withGlobalState(GlobalControls);
