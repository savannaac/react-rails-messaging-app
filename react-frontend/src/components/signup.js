// import React, { useState } from "react";
import React from "react";

export default class Signup extends React.Component {
    state = {
        username: "",
        email: "",
        avatar_url: "",
        password: ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        fetch("http://127.0.0.1:3000/api/v1/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        });
        this.setState({
            username: "",
            email: "",
            avatar_url: "",
            password: ""
        });
        this.props.history.push('/')
    };

    render() {
        return (
            <div>
            	<h1 className="rotate">Chit</h1><h1>Chat</h1>
              <div className="create-form-card">
                <h2>sign up</h2>
                <form className="create-form" onSubmit={this.handleSubmit}>
                    <input className="input-field" type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                    <input className="input-field" type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <input className="input-field" type="text" name="avatar_url" placeholder="avatar url" value={this.state.avatar_url} onChange={this.handleChange} />
                    <input className="input-field" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />

                    <button className="signup-login-button" type="submit">sign up</button>
                </form>
              </div>
            </div>
        )
    }
}