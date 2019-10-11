import React, { Component } from 'react'
import '.././style/chat.css';
import openSocket from 'socket.io-client';
import jwt_decode from 'jwt-decode';
import Message from './message'
import { Link } from 'react-router-dom';
const socket = openSocket('http://localhost:4000');

export default class chat extends Component {
    constructor(props) {
        super(props);
        this.state = {boolean: true,
            message:'',
            request:'',
            item:[]
        
        };
        this.toggleSidenav=this.toggleSidenav.bind(this);
        this.sendSocketIO=this.sendSocketIO.bind(this);
        this.SendMessage=this.SendMessage.bind(this);
        this.requeSocketIo=this.requeSocketIo.bind(this);
    }
    sendSocketIO() {
        const decoded = jwt_decode(localStorage.usertoken)
        console.log("Envio mensaje")
        socket.emit('chat:message',
        {message:this.state.message,
        username:decoded['NombreCliente']
    });
    this.requeSocketIo();
    }
    requeSocketIo(){
     
       
        socket.on('chat:message', (data)=>{
            
            const item=this.state.item
            const user=data["username"]
            const message=data["message"]
            item.push({user,message})
          
            this.setState({request:data})
            console.log(this.state.request);
            console.log(item);
            
        })
    }

    toggleSidenav() {
        this.setState({boolean: !this.state.boolean} )
    }
    SendMessage(elem) {
        this.setState({[elem.target.name] : elem.target.value})
    }

    render() {
        const logueado=(<div className="container-fluid bg-light" id="chat-window">
            <div className="container-fluid" id="output">
            {this.state.item.map((item)=>{
                return(
                    <Message
                    usuario={item.user}
                    message={item.message}
                    ></Message>
                    
                )

            })}
           
           </div>
        <div className="container-fluid" id="actions"></div>
        <input type="text" className="form-control" onChange={e=>this.SendMessage(e)} name="message"  id="message" placeholder="Message"></input>
        <button className="btn bg-primary" onClick={this.sendSocketIO}    id="send">Send</button>
        </div>)

    const notLogueado=(<Link to="login">Iniciar sesión</Link>)
        return (
            <div className="container-fluid" id={this.state.boolean? 'chat-container-open':'chat'}  >
                <h1 onClick={this.toggleSidenav}>Chat</h1>
                
                {localStorage.usertoken?logueado:notLogueado}
                
                
             
                <button type="button" className="btn cancel bg-danger" onClick={this.toggleSidenav}>Close</button>
                
            </div>
        )
    }
}
