import React from "react";
import { createConversation } from '../../Redux/Actions/Conversation'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { MainHeader } from "../Stateless/MainHeader";
import { BackButton } from "../Stateless/BackButton";

class CreateConversation extends React.Component {
    state = {
        users: [],
        selected_user_id: '',
        name: '',
        body: ''
    };

    componentDidMount() {
        return fetch("http://localhost:3000/api/v1/users")
            .then(res => res.json())
            .then(data => {
                this.setState({ users: data })
            });
    };

    handleClick = (e) => {
        e.preventDefault();
        let route = "/profile";
        this.props.history.push(route)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createConversation({conversation: {user_id: this.props.user.id,
                                                      participant_id: this.state.selected_user_id,
                                                      name: this.state.name,
                                                      message: this.state.body }}, this.props.history)

    };

    render() {
        console.log(this.state)
        return (
            <div>
            	<MainHeader />

                <div className="app-container">
                    <div className="buttons-row">
                            <BackButton handleClick={this.handleClick} />
                    </div>

                    <h4 className="profile">add conversation</h4>
                    
                    <form className="create-form" onSubmit={this.handleSubmit}>
                        <select 
                            className="users-list"
                            value={this.state.selected_user_id}
                            name='selected_user_id'
                            onChange={this.handleChange}
                        >
                            {this.state.users.map((user) => {
                                return <option value={user.id}>{user.username}</option>;
                            })}
                        </select>
                        <input className="input-field-dark" type="text" name="name" placeholder="convo name" value={this.state.name} onChange={this.handleChange} />
                        <input className="input-field-dark" type="text" name="body" placeholder="message" value={this.state.body} onChange={this.handleChange} />

                        <button className="create-convo-button" type="submit">chat!</button>
                    </form>
              </div>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}



export default connect(mapStateToProps, {createConversation})(withRouter(CreateConversation))
