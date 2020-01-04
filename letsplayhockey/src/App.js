import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTabs from "./components/NavTab";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
