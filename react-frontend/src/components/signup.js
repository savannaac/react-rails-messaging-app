// import React, { useState } from "react";
import React from "react";
// import { connect } from "react-redux";
// import { fetchUsers } from "/actions/fetchUsers"

export default class Signup extends React {
    state = {
        username: "",
        email: "",
        password: ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />

                    <button type="submit">sign up</button>
                </form>
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