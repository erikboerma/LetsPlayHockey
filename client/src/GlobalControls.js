import React, { Component } from 'react';
import { withGlobalState } from 'react-globally';

class GlobalControls extends Component {
  setJwt = (token) => {
    this.props.setGlobalState({
      authToken: token
    });
  };

  clearJwt = () => {
    this.props.setGlobalState({
      authToken: ""
    });
  };

  render() {
    return (
      <>
        {this.props.children}
      </>
    )
  }
};


export default withGlobalState(GlobalControls);