import React, { Component } from "react"


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        rememberMe: "off"
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
    */

    if (this.state.rememberMe === "on") {
        localStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
            this.props.history.push("/")


    } else {
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
            this.props.history.push("/")


    }}

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail">Email address</label>
                    <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" /></fieldset>
                <fieldset>
                    <label htmlFor="inputPassword">Password</label>
                    <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" /></fieldset>
                <fieldset>
                    <label>Remember Me</label>
                    <input type="checkbox" onChange={this.handleFieldChange}
                            id="rememberMe"></input>
                </fieldset>
                <fieldset>
                    <button type="submit">Sign in</button></fieldset>
            </form>
        )
    }
}