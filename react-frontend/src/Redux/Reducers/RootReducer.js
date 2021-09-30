import { combineReducers } from "redux";
import user from "./User";
import conversations from "./Conversations";
import currentConversation from "./CurrentConversation";

export const rootReducer = combineReducers({
    user: user,
    conversations: conversations,
    currentConversation: currentConversation
})