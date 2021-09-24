// import { Authorization } from "../Helpers/Authorization";

// export const userService = {
//     login, 
//     getAll,
//     logout
// }; 

// function login(data, dispatch) {
//     const requestOptions = {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             user: {
//                 email: user.email,
//                 password: user.password,
//             }
//         })
//     };
//     return fetch("http://localhost:3000/api/v1/login", requestOptions)
//         .then(res => res.json())
//         .then(user => {
            
//         });
// }

// function getAll() {
//     const requestOptions = {
//         method: "GET",
//         headers: Authorization()
//     };
//     return fetch("http://localhost:3000/api/v1/users", requestOptions).then(res => res.json());
// }

// function logout() {
//     localStorage.removeItem("user");
// }