import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { User } from "../Actions/User";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(User.login(email, password));
        }
    }

    render() {
        // const { loggingIn } = this.props;
        // const { email, password, submitted } = this.state;
        return (
            <div>
                <h1 className="rotate">Chit</h1><h1>Chat</h1>

                <div className="create-form-card">
                    <h2>login</h2>
        
                    <form className="create-form" onSubmit={this.handleSubmit}>
                        <input className="input-field" type="text" name="email" placeholder="email" value={this.state.username} onChange={this.handleChange} />
                        <input className="input-field" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        
                        <button className="signup-login-button" type="submit">log in</button>
                    </form>
                </div>
            </div>
        );
    };
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
// export default connect(null, mapStateToProps)(withRouter(Login));

const connectedLogin = connect(mapStateToProps)(withRouter(Login));
export { connectedLogin as Login }; 