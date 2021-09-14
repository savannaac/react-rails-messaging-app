import React from "react";

export default class Login extends React.Component {
    state = {
        email: "",
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
        return fetch("http://127.0.0.1:3000/api/v1/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <div>
                <h1>App Name</h1>
                    <h2>login</h2>
        
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="email" value={this.state.username} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        
                    <button type="submit">log in</button>
                </form>
            </div>
        );
    };
}