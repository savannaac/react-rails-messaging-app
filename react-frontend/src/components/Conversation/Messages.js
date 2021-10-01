import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { createMessage } from "../../Redux/Actions/Message"
import { BackButton } from "../Stateless/BackButton";

class Messages extends React.Component {

    state = {
        body: ""
    }

    handleClick = (e) => {
        e.preventDefault();
        let route = "/profile";
        this.props.history.push(route)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMessage({message: {
            user_id: this.props.user.id,
            conversation_id: this.props.conversation.id,
            body: this.state.body }})
        this.setState({
            body: ""
        });
    };

    render() {
        console.log(this.state)
        return (
            <div>
                <h3 className="rotate">Chit</h3><h3>Chat</h3>

                <div className="app-container">
                    <ul className="message-list">

                        <div className="buttons-row">
                            <BackButton handleClick={this.handleClick} />
                        </div>

                        <img className="messages-icon" src="https://i.ibb.co/dWCs0Sg/Screen-Shot-2021-09-19-at-1-00-42-AM.png" alt="messages-icon" />

                        <div className="participants">
                            {this.props.conversation.messages.map(message => {
                                return (
                                    <li>
                                        <div className="message-sender-list">{message.other_participants}</div>
                                    </li>
                                );
                            })}
                        </div>

                        {this.props.conversation.messages.map(message => {
                            return (
                                <li>
                                    <div className="message-sender">{message.screen_name}</div>
                                    <div className="message-body">{message.body}</div>
                                    <div className="message-timestamp">{message.created_at}</div>
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
                </div>
        );
    };
}

const mapStateToProps = state => {
    return{
        conversation: state.currentConversation,
        user: state.user
    }
}

export default connect(mapStateToProps, {createMessage})(withRouter(Messages))