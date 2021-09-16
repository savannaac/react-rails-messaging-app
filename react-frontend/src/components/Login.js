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
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const jwt = data.headers.get("Authorization").split("Bearer")[1];
            localStorage.setItem("jwt", jwt)
            // localStorage.setItem("token", data.jwt)
            // // this.handleLogin(data.user)
            // // this.setUser(data)
            // this.setState({
            //     email: "",
            //     password: ""
            // })
        })
    }

    render() {
        return (
            <div>
                <h1>ChitChat</h1>

                <div className="signup-login-form-card">
                    <h2>login</h2>
        
                    <form className="signup-login-form" onSubmit={this.handleSubmit}>
                        <input className="input-field" type="text" name="email" placeholder="email" value={this.state.username} onChange={this.handleChange} />
                        <input className="input-field" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        
                        <button className="signup-login-button" type="submit">log in</button>
                    </form>
                </div>
            </div>
        );
    };
}