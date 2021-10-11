import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Header } from '../Stateless/Header'
import { AddConvoButton } from "../Stateless/AddConvoButton";
import { LogoutButton } from "../Stateless/LogoutButton";
import { currentUser, logout } from '../../Redux/Actions/User'
import { getConversation } from '../../Redux/Actions/Conversation'
// import { ConversationPreview } from "../Stateless/ConversationPreview"


class Profile extends React.Component {

    state = {
        searchInput: "",
        // filteredConversations: [this.props.conversations]
    }

	handleClick = (e, id) => {
        e.preventDefault();
        this.props.getConversation(id, this.props.history)
    }

    handleAdd = (e) => {
        e.preventDefault();
        let route = "/create_conversation";
        this.props.history.push(route)  
    }

    handleLogOut = () => {
        this.props.logout();
        let route = "/";
        this.props.history.push(route)
    }
    
    handleSearch = (e) => {
        this.setState({ searchInput: e.target.value });
    }
    
    filteredResults = () => {
        const conversations = this.props.conversations
        console.log(conversations)
        conversations.filter((conversation) => {
            return conversation.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        });
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
    // const filteredConversations =
    //     this.props.conversations.map((conversation) => {
    //         return conversation.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
    //     });

    console.log(this.state)
    console.log(this.filteredResults())
    return (
        <div>
            <Header />
            <div className="app-container">

                    <div className="buttons-row">
                        <AddConvoButton handleAdd={this.handleAdd} />
                        <LogoutButton handleLogOut={this.handleLogOut} />
                    </div>


                    <img className="avatar-icon" src={this.props.user.avatar_url} alt="user-avatar" />
                    <p className="profile-username">{this.props.user.username}</p>


                    <div className="search-bar">
                        <input 
                        className="search-bar-input" 
                        type="text" 
                        placeholder="🔍 search !" 
                        value={this.state.searchInput} 
                        onChange={this.handleSearch} 
                        />
                    </div>

                    <div>
                        {this.props.conversations.map(conversation => {
                            return (
                                this.filteredResults(conversation)
                            );
                        })}
                    </div>

                    <ul className="conversations-list">
                        {this.props.conversations.map(conversation => {
                        // <ConversationPreview conversation={conversation}/>
                            return (
                                <li className="conversation">
                                    <a onClick={(e) => this.handleClick(e, conversation.id)}>
                                        <div className="conversation-list"><a className="conversations">{this.conversationTitle(conversation)}</a></div>
                                            <div className="message-preview-details">
                                            <img className="message-avatar" src={conversation.messages[conversation.messages.length -1].sender_avatar} alt="user-avatar" />
                                            <div className="message-preview">{conversation.messages[conversation.messages.length - 1].body}</div>
                                            <div className="message-preview-date">{conversation.messages[conversation.messages.length - 1].created_at}</div>
                                        </div>
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



export default connect(mapStateToProps, {currentUser, getConversation, logout})(withRouter(Profile))
