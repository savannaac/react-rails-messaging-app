import { Authorization } from "../Helpers/Authorization";

export const userService = {
    login, 
    getAll,
    logout
}; 

function login(email, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
        // body: JSON.stringify({
        //     user: {
        //         email: user.email,
        //         password: user.password,
        //     }
        // })
    };
    return fetch("http://localhost:3000/api/v1/login", requestOptions)
        .then(res => res.json())
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        });
}

function getAll() {
    const requestOptions = {
        method: "GET",
        headers: Authorization()
    };
    return fetch("http://localhost:3000/api/v1/users", requestOptions).then(res => res.json());
}

function logout() {
    localStorage.removeItem("user");
}