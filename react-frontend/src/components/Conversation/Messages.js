import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { createMessage } from "../../Redux/Actions/Message"
import { deleteConversation } from "../../Redux/Actions/Conversation";
import { Header } from "../Stateless/Header";
import { BackButton } from "../Stateless/BackButton";
import { DeleteConvoButton } from "../Stateless/DeleteConvoButton";

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

    handleDelete = () => {
        this.props.deleteConversation();
        let route = "/profile";
        this.props.history.push(route)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                < Header />

                <div className="app-container">
                        <div className="buttons-row">
                            <BackButton handleClick={this.handleClick} />
                            <DeleteConvoButton handleDelete={this.handleDelete} />
                        </div>

                        <div className="participants-avatars">
                            {this.props.conversation.messages.slice(0, 2).map(message => {
                                return (
                                    <img className="sender-avatar" src={message.sender_avatar} alt="message-sender-avatar" />
                                );
                            })}
                        </div>

                        {/* <div className="participants">
                            {this.props.conversation.messages.map(message => {
                                return (
                                    <li>
                                        <div className="message-sender-list">{message.other_participants}</div>
                                    </li>
                                );
                            })}
                        </div> */}
                    <ul className="message-list">
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

export default connect(mapStateToProps, {createMessage, deleteConversation})(withRouter(Messages))