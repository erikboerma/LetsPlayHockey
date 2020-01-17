import React, { useState } from "react";
import { withGlobalState } from "react-globally";
import axios from "axios";
import Calendar from "../Calendar";

class Dashboard extends React.Component {
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [email, setEmail] = useState();
  // const [username, setUsername] = useState();

  constructor(props) {
    super(props);
  }


  componentDidMount = () => {
    console.log(this.props.globalState.jwt)
    const jwt = this.props.globalState.jwt
    axios.post(
      'findUser', {
      jwt
    }
    ).then(resp => {
      console.log(resp);
    });
  };

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h1><u>Player Profile</u></h1>

            <ul>
              <li>Name:</li>
              <li>Position:</li>
              <li>Skill Level:</li>
              <li>Availability:</li>
              <li>Notice Needed:</li>
            </ul>

            <br />
            <button>Edit My Profile</button>
          </div>


        <div class="column">
          <h1><u>Available games</u></h1>
          <Calendar />
          <br />
          <h1><u>Selected games</u></h1>
          <Calendar />

        </div>
      </div>
        </div>

    );
  }

};

export default withGlobalState(Dashboard);
