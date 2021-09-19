import React from "react";

export default class Profile extends React.Component {
    state = {
        username: "Sav",
        createdAt: "today"
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

                <div className="profile">
                    <div className="profile-username">{this.state.username}</div>
                    <div className="profile-createdAt">member since: {this.state.createdAt}</div>
                </div>
              
            </div>
        );
    }
}