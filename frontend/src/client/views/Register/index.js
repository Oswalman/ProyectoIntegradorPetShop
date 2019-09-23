import React from 'react';
import { render } from 'react-dom';
import '../../style/login.css';
import foto from '../../img/LogoPetSafe.png'
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="modal-dialog text-center">
        <div className="col-sm-8 main">
            <div className="modal-content">

                <div className="user-img">
                    <img src={foto} className="mb-2"></img>
                </div>  

                <h1 className="h3 mb-3 font-weight-normal inicioS">Registro de Usuario</h1>
               <pre></pre>

                <form className="col-12">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nombre de usuario"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="E-mail"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Dirección"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Contraseña"></input>
                    </div> 
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirmar Contraseña"></input>
                    </div>  
                    <button type="submit" className="btn btn-primary" >Registrarse</button>             
                </form>

				<pre></pre>
                <div className="col-12">
                   
                    <Link to="/login" className="nav-link">Iniciar Sesion</Link>
                </div>
				<pre></pre>

               
            </div>
        </div>
    </div>

);
  };


export default Register;
  

























  
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