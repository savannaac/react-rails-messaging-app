import React from "react";

export default class CreateConversation extends React.Component {
    state = {
        users: [],
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        const url = ""
        e.preventDefault();
        console.log(this.state)
        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        });
        this.setState({
            username: "",
        });
    };

    render() {
        return (
            <div>
            	<h1 className="rotate">Chit</h1><h1>Chat</h1>

              <div className="create-form-card">
                <h2 className="profile">add conversation</h2>
                
                <form className="create-form" onSubmit={this.handleSubmit}>
                    <select className="users-list">
                        {this.state.users.map((user) => {
                            return <option value={user.id}>{user.username}</option>;
                        })}
                    </select>

                    <button className="signup-login-button" type="submit">add convo</button>
                </form>
              </div>

            </div>
        )
    }
}