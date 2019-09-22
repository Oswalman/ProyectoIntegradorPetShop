import React from 'react';
import { render } from 'react-dom';
import '../../style/estilos.css';
import '../../style/fonts.css';
//import '../../style/login.css';
import foto from '../../img/LogoPetSafe.png'

const Login = () => {
	return (
		<div className="contenedor">

		<header>
		  <h1 classclassName="title">Petsafe</h1>
		  <a href="">Registrate_Falta</a>
		</header>
  
		<div className="login">
		  <article className="fondo">
			<img src={foto} alt="User"></img>
			<h3>Inicio de Sesión</h3>
			<form className="" action="index.html" method="post">

			  <span className="icon-user"></span>
			  <input class="inp" type="text" name="user" value=""></input>
			  <br></br>
			  <span className="icon-key"></span><input class="inp" type="password" name="pass" value=""></input>
			  <br></br>
			  <a href="" className="he">He olvidado mi contraseña</a>
			  <input className="boton" type="submit" name="inicio" value="Iniciar Sesión"></input>
			</form>
		  </article>
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