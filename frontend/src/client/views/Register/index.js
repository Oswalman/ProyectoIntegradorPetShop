import React from 'react';
import { render } from 'react-dom';
import '../../style/login.css';
import foto from '../../img/LogoPetSafe.png'
import { Link } from 'react-router-dom';
import validateInput from '../../validations/register';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {CorreoCliente: '',
        ClaveCliente: '',
        ClaveClienteConfirmation: '',
        NombreCliente:'',
        DireccionCliente:'',
        SexoCliente:'',
        TipoUsuario:1,
        errors:''
     };
   
     this.onChange=this.onChange.bind(this);
     this.isValid=this.isValid.bind(this);
     this.performLogin=this.performLogin.bind(this);
    }
    isValid(){
        const {errors, isValid}= validateInput(this.state);
        this.setState({errors: errors})
        return isValid;
    }
    performLogin(elem){
        elem.preventDefault()
        if(this.isValid()){
        var url = 'http://localhost:4000/api/users/';

        let data = {CorreoCliente: this.state.CorreoCliente,
                    ClaveCliente: this.state.ClaveCliente,
                    NombreCliente:this.state.NombreCliente,
                    DireccionCliente: this.state.DireccionCliente,
                    SexoCliente: this.state.SexoCliente,
                    TipoUsuario: this.state.TipoUsuario}
                    console.log(data);
      
            fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Errors:', error))
            .then(response => {
                console.log('Success:', response)
                if(response['status']==1){
                    console.log("Registró")
                    console.log(response['status'])
                    //this.setState({errors:response.status})
                    window.location.href='/login'
                }
                else{
                    let errors={};
                    console.log("Ya existe")
                    errors.status="Ya existe este correo"
                    console.log(response['status'])
                   this.setState({errors:errors})
                }

            }); }

    }

    onChange(elem) {
        this.setState({[elem.target.name] : elem.target.value})
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
                    <span className="help-block">{this.state.errors.CorreoCliente}</span>
                        <input type="text" className="form-control" onChange={this.onChange} name="CorreoCliente" placeholder="E-mail" required></input>
                    </div>
                    <div className="form-group">
                    <span className="help-block">{this.state.errors.NombreCliente}</span>
                        <input type="text" className="form-control" onChange={this.onChange} name="NombreCliente" placeholder="Nombre Completo"></input>
                    </div>
                    <div className="form-group">
                        <select name="SexoCliente" onChange={this.onChange} className="custom-select mr-sm-2" id="inlineFormCustomSelect" >
                        <option value="1">Masculino</option> 
                         <option value="2">Femenino</option> 
                        </select>
                       
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={this.onChange} name="DireccionCliente" placeholder="Dirección"></input>
                    </div>
                    <div className="form-group">
                    <span className="help-block">{this.state.errors.ClaveCliente}</span>
                        <input type="password" className="form-control" onChange={this.onChange}  name="ClaveCliente" placeholder="Contraseña" required></input>
                    </div> 
                    <div className="form-group">
                    <span className="help-block">{this.state.errors.ClaveClienteConfirmation}</span>
                        <input type="password" className="form-control" onChange={this.onChange} name="ClaveClienteConfirmation" placeholder="Confirmar Contraseña" required></input>
                    </div>  
                    
                    <button type="submit"  className="btn btn-primary" >Registrarse</button>             
                </form>
                <span className="help-block">{this.state.errors.status}</span>
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
  

























  
