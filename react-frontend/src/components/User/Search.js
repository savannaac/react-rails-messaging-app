import React from "react";
// import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom'
// import { currentUser } from '../../Redux/Actions/User'
import { Header } from "../Stateless/Header";
import { BackButton } from "../Stateless/BackButton";
import user from "../../Redux/Reducers/User";

export default class Search extends React.Component {
    
    state = {
        user: [],
        searchInput: "",
        conversations: []
    };

    componentDidMount() {
        const token = localStorage.token;
        const reqObj = {
            method: "GET",
            headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      };
        return fetch("http://localhost:3000/api/v1/profile", reqObj)
            .then(res => res.json())
            .then(data => {
                this.setState({ user: data.user, conversations: data.user.conversations })
        });
    };

    handleClick = (e) => {
        e.preventDefault();
        let route = "/profile";
        this.props.history.push(route)
    }

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value });
    }
    
    filteredResults = () => {
        const conversations = this.state.conversations;
        console.log(conversations)
        const messages = this.state.conversations.flatMap(conversation => {
            return conversation.messages;
        });
        console.log(messages)
        const bodies = messages.map(message => {
            return message.body;
        });
        console.log(bodies)

        // debugger;
       
        return bodies.filter((body) => {
            return body.toLowerCase().includes(this.state.searchInput.toLowerCase());
        });
    }

    render() {
        console.log(this.state)
        console.log(this.filteredResults())
        const searchResults = this.filteredResults();
        const user = this.state.user
        console.log(user)
        return (
            <div>
                <Header />

                <div className="app-container">

                    <div className="buttons-row">
                            <BackButton handleClick={this.handleClick} />
                    </div>

                    <img className="avatar-icon" src={user.avatar_url} alt="user-avatar" />
                    <p className="profile-username">{user.username}</p>

                    <div className="search-bar">
                        <input 
                        className="search-bar-input" 
                        type="text" 
                        placeholder="🔍 search messages !" 
                        value={this.state.searchInput} 
                        onChange={this.handleChange} 
                        />
                    </div>

                    <div className="results">
                        {searchResults.map(result => {
                            return (
                                <ul className="message-list">
                                    <li className="filtered-message">
                                        {result}
                                    </li> 
                                </ul>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}