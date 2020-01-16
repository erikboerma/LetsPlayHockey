import React, { useState } from "react";
import { withGlobalState } from "react-globally";
import axios from "axios";

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
            <h1>
              <u>Player Profile</u>
            </h1>

            <ul>
              <li>
                Name:
              </li>
              <li>Position:</li>
              <li>Skill Level:</li>
              <li>Availability:</li>
              <li>Notice Needed:</li>
            </ul>

            <br />
            <button>Edit My Profile</button>
          </div>
          <div className="col">
            <h1>
              <u>Available Games</u>
            </h1>

            <br />
            <button id="editProfile">Edit my profile</button>
            <div id="myModal" className="modal">
              <div className="modal-content">
                <span className="close">&times;</span>
              </div>
            </div>
          </div>
          <div className="col">
            <h1>
              <u>Available games</u>
            </h1>
          </div>
        </div>
      </div>
    );
  }

};

export default withGlobalState(Dashboard);
