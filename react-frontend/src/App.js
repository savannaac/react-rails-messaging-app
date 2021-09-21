import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateProfile from './components/User/CreateProfile';
import Profiles from './components/User/Profiles';
import CreateConversation from './components/Participation/CreateConversation';
import Conversations from './components/Participation/Conversations';
import Messages from './components/Conversation/Messages';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './App.css';

class App extends React.Component {
  // state = {}

  // componentDidMount() {
  //   return fetch("http://localhost:3000/api/v1/users/1")
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data)
  //       this.setState({ user: data.user, conversations: data.user.conversations })
  //       // console.log(this.state)
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/createprofile" component={CreateProfile} />
        <Route exact path="/" component={Profiles} />
        {/* <Route exact path={"/conversations"} component={() => (<Conversations conversations={this.state.conversations} />)} /> */}
        {/* do same for profile */}
        <Route exact path="/createconversation" component={CreateConversation} />
        <Route exact path="/conversations" component={Conversations} />
        <Route exact path="/messages" component={Messages} />
      </div>
    );
  }
}

export default App;
