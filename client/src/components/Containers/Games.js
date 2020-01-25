import React, { useState, useEffect, Fragment } from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import axios from "axios";

const FindGames = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    if (!response) {
      axios.get("/api/findGame").then(response => {
        console.log(response.data);
        setResponse(response.data);
      });
    }
    axios.post("/api/findGame/:id").then(response => {
      setResponse(!response);
    });
  });

  const toggle = event => {
    event.preventDefault();
    console.log("click");
  };
  
  return (
    <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th>Team Name</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {response &&
          response.map(function(game) {
            return (
              <Fragment>
                <tr>
                  <td>{game.id}</td>
                  <td>{game.location}</td>
                  <td>{game.date}</td>
                  <td>{game.time}</td>
                  <MDBBtn
                    tag="a"
                    onClick={toggle}
                    size="lg"
                    floating
                    gradient="morpheus-den"
                  >
                    <MDBIcon icon="bolt" />
                  </MDBBtn>
                </tr>
              </Fragment>
            );
          })}
      </MDBTableBody>
    </MDBTable>
  );
};

export default FindGames;
