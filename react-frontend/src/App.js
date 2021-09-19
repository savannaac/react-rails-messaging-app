import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/User/Profile';
import Conversations from './components/Participation/Conversations';
import Messages from './components/Conversation/Messages';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/conversations" component={Conversations} />
      <Route exact path="/messages" component={Messages} />
    </div>
  );
}

export default App;
