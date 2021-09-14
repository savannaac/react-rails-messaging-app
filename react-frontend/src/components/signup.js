// import React, { useState } from "react";
import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStoreHook, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import { connect } from "react-redux";
// import { fetchUsers } from "/actions/fetchUsers"

export default class Signup extends React.Component {
    state = {
        username: "",
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
        fetch("http://127.0.0.1:3000/api/v1/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        });
        this.setState({
            username: "",
            email: "",
            password: ""
        });
    };

    render() {
        return (
            <div>
                <h1>App Name</h1>
              <div className="signup-form-card">
                <h2>sign up</h2>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <input className="input-field" type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                    <input className="input-field" type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <input className="input-field" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />

                    <button className="signup-button" type="submit">sign up</button>
                </form>
              </div>
            </div>
        )
    }
}

// function signup(props) {
//     const [state, setState] = useState({
//         username: "",
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setState(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//     }

//     return (
//         <div>
//             <form>
//                 <input type="text" name="username" placeholder="username" />
//                 <input type="text" name="email" placeholder="email" />
//                 <input type="password" name="password" placeholder="password" />

//                 <button type="submit">sign up</button>
//             </form>
//         </div>
//     )
// }