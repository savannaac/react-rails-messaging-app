import { combineReducers } from "redux";
import { alert } from "./Alert";
import { authentication } from "./Authentication";
import { users } from "./Users";

export const rootReducer = combineReducers({
    alert: alert,
    authentication: authentication, 
    users: users
})