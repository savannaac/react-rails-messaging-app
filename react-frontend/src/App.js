import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  );
}

export default App;
