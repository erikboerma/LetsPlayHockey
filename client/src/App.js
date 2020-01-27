import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalControls from "./GlobalControls";
import "./App.css";
import Navbar from "components/Navbar";
import Home from "components/Containers/Home";
import Login from "components/Containers/Login";
import Register from "components/Containers/Register";
import Dashboard from "components/Containers/Dashboard";
import Games from "components/Containers/Games";

const App = () => (
  <>
    <GlobalControls>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/Login">
            <Navbar />
            <Login />
          </Route>
          <Route exact path="/Register">
            <Navbar />
            <Register />
          </Route>
          <Route exact path="/Dashboard">
            <Navbar />
            <Dashboard />
          </Route>
          <Route exact path="/Games">
            <Navbar />
            <Games />
          </Route>
        </Switch>
      </Router>
    </GlobalControls>
  </>
);

export default App;
