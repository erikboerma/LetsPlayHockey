import React, { useState } from "react";
import { withGlobalState } from "react-globally";
import axios from "axios";
import Calendar from "../Calendar";
// import modal from "../modal"



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

        <div class="modal fade" id="centralModalSm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">

          <!-- Change class .modal-sm to change the size of the modal -->
          <div class="modal-dialog modal-sm" role="document">


            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title w-100" id="myModalLabel">Modal title</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary btn-sm">Save changes</button>
              </div>
            </div>
          </div>
        </div>

            {/* <modal /> */}

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
