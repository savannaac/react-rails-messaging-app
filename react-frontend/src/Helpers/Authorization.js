// return http authorization header w/jwt of current user from local storage

export function Authorization() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
        return { "Authorization": "Bearer" + user.token };
    } else {
        return {};
    }
}