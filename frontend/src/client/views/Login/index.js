import React from 'react';
import '../../style/login.css';
import '../../style/bootstrap.css';
import foto from '../../img/LogoPetSafe.png'
import { Link } from 'react-router-dom';

/*
const getList = () => {
    fetch('http://localhost:4000/api/users/login')
    .then(res => res.json())
    .then(list => console.log({ list }))
  }*/


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {CorreoCliente: '',
        ClaveCliente: '' };
        this.performLogin= this.performLogin.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    performLogin(elem){
        elem.preventDefault()
        var url = 'http://localhost:4000/api/users/login';

        let data = this.state;
        console.log(data);
        console.log(JSON.stringify(data));
            fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response)); 

    }

    onChange(elem) {
        this.setState({[elem.target.name] : elem.target.value})
    }

    render()
    {
	return (
		<div className="modal-dialog text-center">
        <div className="col-sm-8 main">
            <div className="modal-content">

                <div className="user-img">
                    <img src={foto} className="mb-2"></img>
                </div>  

                <h1 className="h5 mb-3 inicioS">INICIO DE SESION</h1>
               <pre></pre>

                <form onSubmit={this.performLogin} className="col-12">
                    <div className="form-group">
                        <input type="text" className="form-control" name="CorreoCliente" onChange={this.onChange} placeholder="Nombre de usuario"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="ClaveCliente" onChange={this.onChange} placeholder="Contraseña"></input>
                    </div>   
                    <button type="submit" className="btn btn-primary" >Inicio sesion</button>        
                </form>
                

				<pre></pre>
                <div className="col-12">
                    
                    <Link to="/forgot">Olvidaste tu contraseña</Link>
                </div>
				<pre></pre>

                <div className="col-12">
                <Link to="/Register">Registrate</Link>
                   
                </div>
            </div>
        </div>
    </div>

);}
  };


export default Login;
  

























  
/*
const signUpButton = document.getElementById('registro');
const signInButton = document.getElementById('inicio');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});*/