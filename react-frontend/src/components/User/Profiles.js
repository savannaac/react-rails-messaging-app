import React from "react";
// import PlusIcon from '../../'


export default class Profiles extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    return fetch("http://localhost:3000/api/v1/users/1")
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({ user: data.user, conversations: data.user.conversations })
        // console.log(this.state)
    });
  };

    handleClick = (e) => {
      e.preventDefault();
      let route = "/createprofile";
      this.props.history.push(route)
  }

  render() {
    const profiles = this.state.user
    console.log(profiles)

    return (
      <div>
        <h3 className="rotate">Chit</h3><h3>Chat</h3>

        <div className="card-container">
          <div className="profile-container">
            {/* TODO link up other users to profile cards */}
            {/* TODO profile cards open conversation page for each user onclick */}

            {/* <img className="avatar" src={profiles.avatar_url} alt="user-avatar" /> */}
              {/* main */}
              {/* <div className="profile">
                {profiles.map(profile => {
                  return (

                  );
                })} */}
                {/* <p className="profile-username">{profiles.username}</p> */}
                {/* <p className="profile-updatedAt">last active: {this.state.updatedAt}</p> */}
              {/* </div> */}
            </div>
          </div>

          // {/* TODO create user component */}
          {/* Link login component to this card, change to say create a profile instead of login */}
          <div className="profile-container">
            <div className="profile">
              <button className="add-user" onClick={this.handleClick}>+</button>
            </div>
          </div>

        </div>
    );
  }
}