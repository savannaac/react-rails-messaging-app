import logo from './logo.svg';
import ReactDOM from 'react-dom';
import React from 'react';

import { Login }  from './components/Login';
import Signup from './components/Signup';
import CreateProfile from './components/User/CreateProfile';
import Profiles from './components/User/Profiles';
import CreateConversation from './components/Participation/CreateConversation';
import Conversations from './components/Participation/Conversations';
import Messages from './components/Conversation/Messages';

import { BroserRouter, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import './App.css';
import { history } from './Helpers/history';
import { Alerts } from './Actions/Alerts';

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

  // componentDidMount() {
  //   if(localStorage.getItem("token")) {
  //     fetch("http://127.0.0.1:3000/api/v1/login", {
  //       headers: {
  //         "Authenticate": localStorage.token
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(user => {
  //       setUser(user)
  //     })
  //   }
  // }
//   constructor(props) {
//     super(props);

//     const { dispatch } = this.props;
//     history.listen((location, action) => {
//         // clear alert on location change
//         dispatch(Alerts.clear());
//     });
// }

  render() {
    return (
      <div className="App">
        <Route exact path="/signup" component={Signup} />
        {/* <Router history={history}> */}
          {/* <div> */}
            <Route exact path="/login" component={Login} />
          {/* </div> */}
        {/* </Router> */}
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

export default withRouter(App);
