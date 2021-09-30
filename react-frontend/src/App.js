import React from 'react';

import Login  from './components/Login';
import Signup from './components/Signup';
import Profile from './components/User/Profile';
import CreateConversation from './components/Participation/CreateConversation';
import Messages from './components/Conversation/Messages';


import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/create_conversation" component={CreateConversation} />
        <Route exact path="/messages" component={Messages} />
      </div>
    );
  }
}

export default withRouter(App);

// React Assessment

// schedule 1-on-1 with Matthew to walk through code flow before 
// KNOW AND TALK THROUGH CODE SLOWLY - PROUD & CONFIDENTLY
// moves unused code & files into "refactor" folder to clean up 
