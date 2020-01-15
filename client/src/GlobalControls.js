import React, { Component } from 'react';
import { withGlobalState } from 'react-globally';

class GlobalControls extends Component {
  setJwt = (token) => {
    this.props.setGlobalState({
      jwt: token
    });
  };

  clearJwt = () => {
    this.props.setGlobalState({
      jwt: ""
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