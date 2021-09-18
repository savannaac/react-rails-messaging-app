import React from "react";

export default class Conversations extends React.Component {
    state = [
        {
            userId: "Ziggy",
            name: "<3",
            preview: "I love you. I miss you. I can't wait to see you",
            updatedAt: "everyday"
        },
        {
            userId: "shawn",
            name: "title",
            preview: "frends frends frends",
            updatedAt: "2day"
        },
        {
            userId: "amanda",
            name: "title",
            preview: "friends friends friends",
            updatedAt: "today"
        }
    ]

    render() {
        const conversations = this.state;

        return (
            <div className="app-container">
                <ul className="conversations-list">

                <div className="buttons-row">
                    <button className="back-button" onClick={this.handleClick}>⇠</button>
                    <button className="add-convo-button">+</button>
                </div>

                {conversations.map(conversation => {
                    return (
                        <li>
                            <div className="conversation">
                                <div className="conversation-list"><a className="conversations" href="">{conversation.userId}</a></div>
                                <div className="message-preview">{conversation.preview}</div>
                                <div className="message-preview-date">{conversation.updatedAt}</div>
                            </div>
                        </li>
                    );
                })}
                </ul>
            </div>
        );
    }
}