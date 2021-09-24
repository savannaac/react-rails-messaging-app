export const ConversationPreview = props => {
    const handleClick = (e, id) => {
        e.preventDefault();
        this.props.getConversation(id, this.props.history)
    }

    const conversationTitle = conversation => {
		return conversation.name ? conversation.name : conversation.other_participants.join(" & ")
	}

    return (
        <li>
            <a className="conversation" onClick={(e) => this.handleClick(e, props.conversation.id)}>
                <div className="conversation-list"><a className="conversations">{this.conversationTitle(props.conversation)}</a></div>
                <div className="message-preview">{props.conversation.messages[props.conversation.messages.length - 1].body}</div>
            </a>
        </li>
    );
}