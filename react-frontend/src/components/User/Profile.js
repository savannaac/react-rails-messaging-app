import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Header } from '../Stateless/Header'
import { AddConvoButton } from "../Stateless/ConvoButton";
import { currentUser } from '../../Redux/Actions/User'
import { getConversation } from '../../Redux/Actions/Conversation'
import { ConversationPreview } from "../Stateless/ConversationPreview"


class Profile extends React.Component {

	handleClick = (e, id) => {
        e.preventDefault();
        this.props.getConversation(id, this.props.history)
    }

    handleAdd = (e) => {
        e.preventDefault();
        let route = "/create_conversation";
        this.props.history.push(route)  
    }

	conversationTitle = conversation => {
		return conversation.name ? conversation.name : conversation.other_participants.join(" & ")
	}
    
    componentDidMount(){
        if (localStorage.token === undefined || localStorage.token === 'undefined'){
            return null
        }else{
            this.props.currentUser(this.props.history)
        }    
    }

  render() {
    return (
        <div>
            <Header />
            <div className="app-container">
                <ul className="conversations-list">

                    <AddConvoButton handleAdd={this.handleAdd}/>
                    {/* <div className="buttons-row">
                        <button className="add-convo-button" onClick={this.handleAdd}>+</button>
                    </div> */}

                    <img className="convo-icon" src={this.props.user.avatar_url} alt="user-avatar" />
                    <p className="profile-username">{this.props.user.username}</p>


                    {this.props.conversations.map(conversation => {
                        // <ConversationPreview conversation={conversation}/>
                        return (
                            <li>
                                <a className="conversation" onClick={(e) => this.handleClick(e, conversation.id)}>
                                    <div className="conversation-list"><a className="conversations">{this.conversationTitle(conversation)}</a></div>
                                    <div className="message-preview">{conversation.messages[conversation.messages.length - 1].body}</div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return{
        conversations: state.conversations,
        user: state.user
    }
}



export default connect(mapStateToProps, {currentUser, getConversation})(withRouter(Profile))
