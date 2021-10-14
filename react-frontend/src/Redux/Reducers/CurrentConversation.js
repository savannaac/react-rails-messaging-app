export default function currentConversation(state = {}, action) {
    switch (action.type) {
    case 'CONVERSATION_SET':
        return action.conversation
    case 'MESSAGE_CREATED':
        return action.conversation
    case "CONVERSATION_DELETE":
        return action.conversation.filter(({ id }) => id !== action.payload)
    default:
        return state;
    }
}