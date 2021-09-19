import React from "react";

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
            <div className="profile-container">

                <div className="buttons-row">
                    <button className="exit-button" onClick={this.handleClick}>x</button>
                </div>

                <img className="avatar" src={this.state.avatar} alt="user-avatar" />

                <div className="profile">
                    <p className="profile-username">{this.state.username}</p>
                    <p className="profile-createdAt">member since: {this.state.createdAt}</p>
                    <p className="profile-updatedAt">last active: {this.state.updatedAt}</p>
                </div>
              
            </div>
        );
    }
}