import { userConstants } from "../Constants/UserConstants";

const initialState = {
    user: {
        id: "",
        username: "",
        email: "",
        avatar_url: ""
    } 
};

export default function user(state = initialState, action) {
    switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
            loggingIn: true,
        };
    case userConstants.LOGIN_SUCCESS:
        return {
            id: action.user.id,
            username: action.user.username,
            avatar_url: action.user.avatar_url,
            email: action.user.email
        };
    case 'USER_SET':
        return {
            id: action.user.id,
            username: action.user.username,
            avatar_url: action.user.avatar_url,
            email: action.user.email
        };
    default:
        return state;
    }
}