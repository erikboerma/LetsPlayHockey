import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
<<<<<<< HEAD
import NavTabs from "./components/NavTab";
=======
import Navbar from "./components/Navbar/Navbar";
>>>>>>> origin
import Home from "./components/Containers/Home";
import Login from "./components/Containers/Login";
import Register from "./components/Containers/Register";
import CreateProfile from './components/Containers/CreateProfile';
import Dashboard from "./components/Containers/Dashboard";
<<<<<<< HEAD
=======
import GlobalControls from './GlobalControls';

>>>>>>> origin

const App = () => (
  <>
    <GlobalControls>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
<<<<<<< HEAD
        <Route exact path="/CreateProfile" component={CreateProfile}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
        
      </div>
    </Router>
  );
}
=======
        <Route exact path="/CreateProfile" component={CreateProfile} />
        <Route exact path="/Dashboard" component={Dashboard} />
      </Router>
    </GlobalControls>
  </>
);
>>>>>>> origin

export default App;
