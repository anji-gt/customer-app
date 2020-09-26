import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Customers from './components/Customers';
import NavBar from './components//common/NavBar';
import ModelPopUp from './components/ModelPopUp';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/customers" component={Customers} />
          <ModelPopUp />
        </div>
      </Router>
    );
  }
}

export default App;
