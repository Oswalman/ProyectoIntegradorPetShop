import React, { Component } from 'react'
import '.././style/chat.css';

export default class chat extends Component {
    constructor(props) {
        super(props);
        this.state = {boolean: true
        
        };
        this.toggleSidenav=this.toggleSidenav.bind(this)
    }

    toggleSidenav() {
        this.setState({boolean: !this.state.boolean} )
    }

    render() {
        return (
            <div className="container-fluid" id={this.state.boolean? 'chat-container-open':'chat'}  >
                <h1 onClick={this.toggleSidenav}>Chat</h1>
                
                <div className="container-fluid bg-light" id="chat-window">
                    <div className="container-fluid" id="output"></div>
                    <div className="container-fluid" id="actions"></div>
                </div>
                <input type="text" className="form-control"  id="message" placeholder="Message"></input>
                <button className="btn bg-primary" id="send">Send</button>
                <button type="button" className="btn cancel bg-danger" onClick={this.toggleSidenav}>Close</button>
                
            </div>
        )
    }
}
