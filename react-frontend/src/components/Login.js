import React from "react";

export default class Login extends React {
    render() {
        return (
            <div>
                <h1>login</h1>
                
                <form>
                    <input type="text" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" />

                    <button type="submit">log in</button>
                </form>
            </div>
        )
    }
}