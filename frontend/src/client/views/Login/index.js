import React from 'react';
import { render } from 'react-dom';
import '../../style/login.css';
import '../../style/bootstrap.css';
import foto from '../../img/LogoPetSafe.png'
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="modal-dialog text-center">
        <div className="col-sm-8 main">
            <div className="modal-content">

                <div className="user-img">
                    <img src={foto} className="mb-2"></img>
                </div>  

                <h1 className="h5 mb-3 inicioS">INICIO DE SESION</h1>
               <pre></pre>

                <form className="col-12">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nombre de usuario"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Contraseña"></input>
                    </div>   
                    <button type="submit" className="btn btn-primary" >Inicio sesion</button>             
                </form>

				<pre></pre>
                <div className="col-12">
                    
                    <Link to="/forgot">Olvidaste tu contraseña</Link>
                </div>
				<pre></pre>

                <div class="col-12">
                <Link to="/Register">Registrate</Link>
                   
                </div>
            </div>
        </div>
    </div>

);
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