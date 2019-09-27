import React from 'react';
import { render } from 'react-dom';
import '../../style/login.css';
import foto from '../../img/LogoPetSafe.png'
import { Link } from 'react-router-dom';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {CorreoCliente: '',
        ClaveCliente: '',
        DirecciónCliente:'',
        SexoCliente:'',
        TipoUsuario:1
     };
     this.compar=this.compar.bind(this);
    }
    performLogin(elem){
        elem.preventDefault()
        var url = 'http://localhost:4000/api/users/';

        let data = this.state;
      
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
    compar(elem)
    {
        if(elem.target.value!==this.ClaveCliente){
            return false;
        }

        else {
            return true;
        }

    }
    
    render(){
	return (
		<div className="modal-dialog text-center">
        <div className="col-sm-8 main">
            <div className="modal-content">

                <div className="user-img">
                    <img src={foto} className="mb-2"></img>
                </div>  

                <h1 className="h3 mb-3 font-weight-normal inicioS">Registro de Usuario</h1>
               <pre></pre>

                <form onSubmit={this.performLogin} className="col-12">
                    <div className="form-group">
                        <input type="text" className="form-control" name="CorreoCliente" placeholder="E-mail"></input>
                    </div>
                    <div className="form-group">
                        <select name="SexoCliente" class="custom-select mr-sm-2" id="inlineFormCustomSelect" >
                        <option value="1">Masculino</option> 
                         <option value="2">Femenino</option> 
                        </select>
                       
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="DireccionCliente" placeholder="Dirección"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="ClaveCliente" placeholder="Contraseña"></input>
                    </div> 
                    <div className="form-group">
                        <input type="password" className="form-control" onChange={this.compar} placeholder="Confirmar Contraseña"></input>
                    </div>  
                    <button type="submit" disabled={this.compar} className="btn btn-primary" >Registrarse</button>             
                </form>

				<pre></pre>
                <div className="col-12">
                   
                    <Link to="/login" className="nav-link">Iniciar Sesion</Link>
                </div>
				<pre></pre>

               
            </div>
        </div>
    </div>

);}
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