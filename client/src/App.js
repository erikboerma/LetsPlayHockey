import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Containers/Home";
import Login from "./components/Containers/Login";
import Register from "./components/Containers/Register";
import CreateProfile from './components/forms/CreateProfile/CreateProfile';
import Dashboard from "./components/Containers/Dashboard";
import GlobalControls from './GlobalControls';
import Calendar from "./components/pages/Calendar";


const App = () => (
  <>
    <GlobalControls>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/CreateProfile" component={CreateProfile} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Calendar" component={Calendar} />
      </Router>
    </GlobalControls>
  </>
);

export default App;
