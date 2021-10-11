import React from "react";

export default class Search extends React.Component {
    
    state = {
        searchInput: "",
        conversations: []
    };

    componentDidMount() {
        const token = localStorage.token;
        const reqObj = {
            method: "GET",
            headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      };
        return fetch("http://localhost:3000/api/v1/profile", reqObj)
            .then(res => res.json())
            .then(data => {
                this.setState({ user: data.user, conversations: data.user.conversations })
                // console.log(this.state)
        });
    };

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value });
    }
    
    filteredResults = () => {
        const conversations = this.state.conversations
        console.log(conversations)
        const messages = this.state.conversations.flatMap(conversation => {
            return conversation.messages
        })
        console.log(messages)
        const bodies = messages.flatMap(message => {
            return message.body
        })
        console.log(bodies)

        // debugger;
       
        // return conversations.filter((conversation) => {
        //     return conversation.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        // });
    }

    render() {
        console.log(this.state)
        console.log(this.filteredResults())
        // const filteredConversations = this.filteredResults();
        // console.log(filteredConversations)

        // const filteredConversations = 
        // conversations.filter((conversation) => {
        //     return conversation.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        // }
        return (
            <div className="search-bar">
                <input 
                className="search-bar-input" 
                type="text" 
                placeholder="🔍 search !" 
                value={this.state.searchInput} 
                onChange={this.handleChange} 
                />

               {/* {filteredConversations.map(conversation => {
                   return (
                       conversation.name
                   )
               })} */}
            </div>
            // <div>
            //     {conversations.map(conversation => {
            //         return conversation.name
            //     })}
            // </div>
        )
    }
}