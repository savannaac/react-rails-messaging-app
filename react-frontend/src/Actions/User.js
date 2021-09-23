// import { useReducer } from "react";
// import { Types } from "../Constants/Types";

import { userConstants } from "../Constants/UserConstants";
import { userService} from "../Services/UserService"
import { Alerts } from "./Alerts";

export const User = {
    login,
    logout,
    getAll
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user))
                    this.props.history.push("/")
                },
                error => {
                    dispatch(failure(error))
                    dispatch(Alerts.error(error))
                }
            );

    };
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => { 
                    dispatch(failure(error))
                    dispatch(Alerts.error(error))
                }
            );
    };
    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

// export const ActionCreators = {
//     loadingUser: (user) => ({ type: Types.LOADING_USER, payload: { user } }),
//     setUser: (user) => ({ type: Types.SET_USER, payload: { user } }),
//     addUser: (user) => ({ type: Types.ADD_USER, payload: { user } }),
//     updateAvatar: (avatar) => ({ type: Types.UPDATE_AVATAR, payload: { avatar } }),
//     formSubmissionStatus: (status) => ({ type: Types.FORM_SUBMISSION_STATUS, payload: { status } }),
//     login: (user) => ({ type: Types.LOGIN, payload: { user } }) 
// }

// export const currentUser = () => {
//     const token = localStorage.token;
//     const userObject = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//         }
//     };
//     return dispatch => {
//         dispatch({ type: "LOADING_USER" });
//             return fetch("http://localhost:3000/api/v1/users", userObject)
//                 .then(res => res.json())
//                 .then(user => {
//                     dispatch({ type: "SET_USER", user: user.user })
//                     this.props.history.push("/")
//                 });
//     };
// }

// export const loginUser = (user) => {
//     return (dispatch) => {
//         dispatch({ type: "LOGIN" });
//         return fetch("http://localhost:3000/api/v1/users", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({ user: {
//                 email: user.email,
//                 password: user.password
//             } })
//         })
//         .then(res => res.json())
//         .then(data => {
//             dispatch({ type: "LOGIN", user: data.user })
//         })
//     };
// }

// export const addUser = (user) => {
//     const userObj = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             user: {
//                 username: user.username,
//                 email: user.email,
//                 password: user.password,
//                 avatar_url: user.avatar_url
//             }
//         })
//     };
//     return dispatch => {
//         dispatch({ type: "ADD_USER"});
//             return fetch("http://localhost:3000/api/v1/users", userObj)
//                 .then(res => res.json())
//                 .then(data => {
//                     localStorage.token = data.jwt;
//                     dispatch
//                 })
//     }
// }