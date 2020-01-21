import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalControls from "./GlobalControls";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Containers/Home";
import Login from "./components/Containers/Login";
import Register from "./components/Containers/Register";
import CreateProfile from "./components/Containers/CreateProfile";
import Dashboard from "./components/Containers/Dashboard";


const App = () => (
  <>
    <GlobalControls>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/CreateProfile" component={CreateProfile} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </GlobalControls>
  </>
);

export default App;
