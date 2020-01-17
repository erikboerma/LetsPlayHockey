import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTabs from "./components/NavTab";
import Home from "./components/Containers/Home";
import Login from "./components/Containers/Login";
import Register from "./components/Containers/Register";
import CreateProfile from './components/Containers/CreateProfile';
import Dashboard from "./components/Containers/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/CreateProfile" component={CreateProfile}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
        
      </div>
    </Router>
  );
}

export default App;
