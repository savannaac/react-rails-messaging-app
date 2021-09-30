export function createConversation(data, history) {
    return dispatch => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };

        return fetch("http://localhost:3000/api/v1/conversations", requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const user = data.user
                dispatch({ type: 'CONVERSATION_CREATED', user })
                // history.push(`/conversation/${user.conversations[user.conversations.length - 1].id}`)
                history.push("/messages")
            });
    };
}

export function getConversation(id, history) {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/conversations/${id}`)
            .then(res => res.json())
            .then(data => {
                const conversation = data.conversation;
                dispatch({ type: 'CONVERSATION_SET', conversation })
                history.push('/messages')
            });
    }
}