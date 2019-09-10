import React from 'react';
import { render } from 'react-dom';

import '../../style/login.css';

const Login = () => {
	return 
  };
  
  render(
	<Login/>,
	document.getElementById('container')
  )

const signUpButton = document.getElementById('registro');
const signInButton = document.getElementById('inicio');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});