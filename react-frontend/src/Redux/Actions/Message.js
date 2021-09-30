export function createMessage(data) {
    return dispatch => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };

        return fetch("http://localhost:3000/api/v1/messages", requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const conversation = data.conversation
                dispatch({ type: 'MESSAGE_CREATED', conversation })
            });
    };
}