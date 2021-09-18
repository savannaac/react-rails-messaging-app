import React from "react";

export default class Messages extends React.Component {
    state = [
        {
            userId: "no-name says:",
            body: "testing - 1, 2, 3"
        },
        {
            userId: "yes-name says:",
            body: "pls work pls work pls work"
        },
        {
            userId: "user-3 says:",
            body: "OH MY GAWD"
        }
    ]

    // state = {
    //     body: ""
    // }

    // handleClick = (e) => {
    //     e.preventDefault();
    //     let route = "/conversations";
    //     history.push(route)
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.body]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        fetch("", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        });
        this.setState({
            body: ""
        });
    };

    render() {
        const messages = this.state;

        return (
            <div className="app-container">
                <ul className="message-list">

                    <div className="buttons-row">
                        <button className="back-button" onClick={this.handleClick}>⇠</button>
                    </div>

                       <div className="participants">
                            {messages.map(message => {
                                return (
                                    <li>
                                        <div className="message-sender-list">{message.userId}</div>
                                    </li>
                                );
                            })}
                        </div>

                    {messages.map(message => {
                        return (
                            <li>
                                <div className="message-sender">{message.userId}</div>

                                <div className="message-body">{message.body}</div>
                            </li>
                        );
                    })}
                </ul>

                <div className="message-submit-container">
                    <form onSubmit={this.handleSubmit}>
                        <input className="message-input-field" type="text" name="body" placeholder="" value={this.state.body} onChange={this.handleChange} />
        
                        <button className="message-send-button" type="submit">⇢</button>
                    </form>
                </div>
            </div>
        );
    };
}