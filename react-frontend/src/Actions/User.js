export function login(data, history) {
    return dispatch => {
        dispatch({type: "USERS_LOGIN_REQUEST"});
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: {
                    email: data.email,
                    password: data.password,
                }
            })
        };

        return fetch("http://localhost:3000/api/v1/login", requestOptions)
            .then(res => res.json())
            .then(data => {
                const user = data.user
                localStorage.token = data.jwt
                dispatch({type: 'USERS_LOGIN_SUCCESS', user})
                history.push('/profile')
            });
    }
}

export function currentUser(history){
    const token = localStorage.token
    const reqObj = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      };
      return dispatch => {
        return fetch("http://localhost:3000/api/v1/profile", reqObj)
          .then(res => res.json())
          .then(data => {
            const user = data.user
            dispatch({ type: "USER_SET", user: user });
            history.push("/profile");
          })
          .catch(error => {
            alert("Please Provide Valid Credentials");
            history.push("/login");
          });
      };
}
