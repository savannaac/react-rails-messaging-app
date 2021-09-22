import { Types } from "../Constants/Types";

const initialState = {
    user: {
        username: "",
        email: "",
        avatar: ""
    } 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN:
            console.log("login", action.payload.user)
            return {
                ...state, 
                user: action.payload.user
            };
        case Types.ADD_USER:
            return {
                ...state,
                user: action.payload.user
            };
        case Types.UPDATE_USER:
            return {
                ...state,
                user: action.payload.user
            };
        case Types.UPDATE_AVATAR:
            return {
                ...state,
                user: {
                    ...state.user,
                    avatar: action.payload.avatar
                }
            };
        default: 
            return state;
    }
}

export default reducer