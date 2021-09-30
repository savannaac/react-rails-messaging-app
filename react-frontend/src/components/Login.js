import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { login } from "../Redux/Actions/User";
import { MainHeader} from "../components/Stateless/MainHeader"

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "guest",
            password: "guest",
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
        this.props.login(this.state, this.props.history);
    }

    render() {
        return (
            <div>
                <MainHeader />

                <div className="create-form-card">
                    <h2>login</h2>
        
                    <form className="create-form" onSubmit={this.handleSubmit}>
                        <input className="input-field" type="text" name="email" placeholder="email" value={this.state.username} onChange={this.handleChange} />
                        <input className="input-field" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        
                        <button className="signup-login-button" type="submit">log in</button>

                        <p className="sign-up">or <a className="sign-up" href="/signup">SIGN UP</a></p>
                    </form>
                </div>
            </div>
        );
    };
}

export default connect(null, {login})(withRouter(Login))