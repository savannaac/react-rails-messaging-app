import React from "react";
// import PlusIcon from '../../'


export default class Profiles extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    return fetch("http://localhost:3000/api/v1/users")
        .then(res => res.json())
        .then(data => {
    // console.log(data)
            this.setState({ users: data })
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
            {this.state.users.map((user) => {
              return (
                <div className="profile-container">
                  <img className="avatar" src={user.avatar_url} alt="user-avatar" />
                  <p className="profile-username">{user.username}</p>
                  <p className="profile-updatedAt">last active: {user.updated_at}</p>
                </div>
              );
            })}
            
          {/* <div className="profile-container">
            <div className="profile">
              <button className="add-user" onClick={this.handleClick}>+</button>
            </div>
          </div> */}
        </div>

      </div>
    );
  }
} 