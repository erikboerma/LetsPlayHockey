import React, { Component } from 'react';
import { withGlobalState } from 'react-globally';

class GlobalControls extends Component {
  setAuthToken = (token) => {
    this.props.setGlobalState({
      authToken: token
    });
  };

  clearAuthToken = () => {
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