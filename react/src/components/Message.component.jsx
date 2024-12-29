import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscring"
        })
    }
    render() {
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => asdf}>Subscribe</button>
        </div>
    }
}

export default Message;
