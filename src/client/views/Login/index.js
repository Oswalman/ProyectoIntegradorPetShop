import React from 'react';
import { render } from 'react-dom';

import '../../style/login.css';

const Login = () => {
	return (
<div class="form-container sign-up-container">
	<form action="#">
		<h1>¡Crea tu cuenta!</h1>
		<div class="social-container">
			<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
			<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
			<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
		</div>
		<span>o usa un correo electronico</span>
		<input type="text" placeholder="Name" />
		<input type="email" placeholder="Email" />
		<input type="password" placeholder="Password" />
		<button>CREAR</button>
	</form>
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