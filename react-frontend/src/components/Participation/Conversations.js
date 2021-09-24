import React from "react";

export default class Conversations extends React.Component {
    // replace fake data with real data, then do same with profile (pass user )
    state = {
        conversations: []
    }
    
    componentDidMount() {
        return fetch("http://localhost:3000/api/v1/users/1")
            .then(res => res.json())
            .then(data => {
        // console.log(data)
                this.setState({ user: data.user, conversations: data.user.conversations })
        // console.log(this.state)
        });
    };

    handleClick = (e) => {
        e.preventDefault();
        let route = "/";
        this.props.history.push(route)
    }

    handleAdd = (e) => {
        e.preventDefault();
        let route = "/createconversation";
        this.props.history.push(route)  

    
    render() {
        // console.log(this.props.conversations)
        // console.log(this.state)
        const conversations = this.state.conversations
        console.log(conversations)
        const messages = conversations.messages
        console.log(messages)

        return (
            <div>
                <h3 className="rotate">Chit</h3><h3>Chat</h3>
                <div className="app-container">
                    <ul className="conversations-list">

                        <div className="buttons-row">
                            <button className="back-button" onClick={this.handleClick}>⇠</button>
                            <button className="add-convo-button" onClick={this.handleAdd}>+</button>
                        </div>

                        <img className="convo-icon" src="https://i.ibb.co/RH8B5Qk/Screen-Shot-2021-09-19-at-1-24-24-AM.png" alt="conversation-icon" />

                        {/* {conversations.map(conversation => {
                            <ConversationPreview conversation={conversation} />
                        })} */}
                        
                        {conversations.map(conversation => {
                            return (
                                <li>
                                    <div className="conversation">
                                        <div className="conversation-list"><a className="conversations" href="">{conversation.name}</a></div>
                                        <div className="message-preview">{conversation.messages[-1].body}</div> */}
                                        <div className="message-preview-date">{conversation}</div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}