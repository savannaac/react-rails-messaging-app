import { userConstants } from "../Constants/UserConstants";

export default function conversation(state = [], action) {
    switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
        return action.user.conversations
    case "CONVERSATION_CREATED":
        return action.user.conversations
    case 'USER_SET':
        return action.user.conversations
    default:
        return state;
    }
}