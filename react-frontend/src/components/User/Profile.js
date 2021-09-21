import React from "react";
// import PlusIcon from '../../'


export default class Profile extends React.Component {
  state = {
      username: "Sav",
      avatar: "https://i.ibb.co/kXC4Z2R/65136031766-8-BA4-B1-A2-1-C09-492-D-945-B-736-F9-AC31200.jpg",
      createdAt: "today",
      updatedAt: "also today"
  };

    // handleClick = (e) => {
  //     e.preventDefault();
  //     let route = "/conversations";
  //     history.push(route)
  // }

  render() {
    return (
      <div>
          <h3 className="rotate">Chit</h3><h3>Chat</h3>
        <div className="card-container">
          <div className="profile-container">
            {/* <div className="buttons-row">
              <button className="exit-button" onClick={this.handleClick}>x</button>
            </div> */}
            {/* TODO link up other users to profile cards */}
            {/* TODO profile cards open conversation page for each user onclick */}
            <img className="avatar" src={this.state.avatar} alt="user-avatar" />
              {/* Savanna */}
              <div className="profile">
                <p className="profile-username">{this.state.username}</p>
                <p className="profile-createdAt">member since: {this.state.createdAt}</p>
                <p className="profile-updatedAt">last active: {this.state.updatedAt}</p>
              </div>
            </div>

          <div className="profile-container">
            {/* <div className="buttons-row">
              <button className="exit-button" onClick={this.handleClick}>x</button>
            </div> */}

            <img className="avatar" src={this.state.avatar} alt="user-avatar" />

            <div className="profile">
              <p className="profile-username">User 2</p>
              <p className="profile-createdAt">member since: {this.state.createdAt}</p>
              <p className="profile-updatedAt">last active: {this.state.updatedAt}</p>
            </div>
          </div>

          <div className="profile-container">
            {/* <div className="buttons-row">
              <button className="exit-button" onClick={this.handleClick}>x</button>
            </div> */}

            <img className="avatar" src={this.state.avatar} alt="user-avatar" />

            <div className="profile">
              <p className="profile-username">User 3</p>
              <p className="profile-createdAt">member since: {this.state.createdAt}</p>
              <p className="profile-updatedAt">last active: {this.state.updatedAt}</p>
            </div>
          </div>

          <div className="profile-container">
            {/* <div className="buttons-row">
              <button className="exit-button" onClick={this.handleClick}>x</button>
            </div> */}

            <img className="avatar" src={this.state.avatar} alt="user-avatar" />

            <div className="profile">
              <p className="profile-username">User 4</p>
              <p className="profile-createdAt">member since: {this.state.createdAt}</p>
              <p className="profile-updatedAt">last active: {this.state.updatedAt}</p>
            </div>
          </div>

          {/* TODO create user component */}
          {/* Link login component to this card, change to say create a profile instead of login */}
          <div className="profile-container">
            <div className="profile">
              <span className="add-user">+</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}