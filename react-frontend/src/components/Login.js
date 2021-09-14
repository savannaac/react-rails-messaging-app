import React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>App Name</h1>
                    <h2>login</h2>
        
                <form>
                    <input type="text" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" />
        
                    <button type="submit">log in</button>
                </form>
            </div>
        );
    };
}