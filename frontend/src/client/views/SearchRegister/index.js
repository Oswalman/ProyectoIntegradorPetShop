import React from 'react';
import { render } from 'react-dom';
import '../../style/login.css';
import foto from '../../img/LogoPetSafe.png'
import { Link } from 'react-router-dom';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Nom_User: '',
        Direccion: '',
        Nom_Pet: '',
        Description:'',
        foto_pet: null,
        errors:''
     };
   
     this.onChange=this.onChange.bind(this);
     this.performLogin=this.performLogin.bind(this);
    }
    performLogin(elem){
        elem.preventDefault()
        var url = 'http://localhost:4000/api/lostPet/';

        let data = {Nom_User: this.state.Nom_User,
                    Direccion: this.state.Direccion,
                    Nom_Pet:this.state.Nom_Pet,
                    Description: this.state.Description,
                    foto_pet: this.state.foto_pet}
                    console.log(data);
      
            fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), 
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Errors:', error))
            .then(response => {
                console.log('Success:', response)
                if(response['status'] == 1){
                    console.log("Registró")
                    console.log(response['status'])
                    window.location.href='/home'
                }
                else{
                    let errors={};
                    console.log("Algo Salio mal")
                    errors.status="Upss!!! Algo salio mal"
                    console.log(response['status'])
                   this.setState({errors:errors})
                }

            });

    }

    onChange(elem) {
        this.setState({[elem.target.name] : elem.target.value})
    }
  
    
    render(){
	return (
		<div className="text-center">
        <div className="col-sm-8 main">
            <div className="modal-content">

                <div className="user-img">
                    <img src={foto} className="mb-2"></img>
                </div>  

                <h1 className="h3 mb-3 font-weight-normal inicioS">Registro de Mascota Perdida</h1>
               <pre></pre>

                <form onSubmit={this.performLogin} className="col-12">

                    <div className="form-group">
                    <span className="help-block">{this.state.errors.Nom_User}</span>
                        <input type="text" className="form-control" onChange={this.onChange} name="Nom_User" placeholder="Propietario" required></input>
                    </div>

                    <div className="form-group">
                    <span className="help-block">{this.state.errors.Direccion}</span>
                        <input type="text" className="form-control" onChange={this.onChange} name="Direccion" placeholder="Nombre Completo"></input>
                    </div>
                    
                    <div className="form-group">
                    <span className="help-block">{this.state.errors.Nom_Pet}</span>
                        <input type="text" className="form-control" onChange={this.onChange} name="Nom_Pet" placeholder="Nombre Completo"></input>
                    </div>

                    <div className="form-group">
                    <span className="help-block">{this.state.errors.Description}</span>
                        <textarea className="form-control" onChange={this.onChange} name="Description" placeholder="Descripcion"></textarea>
                    </div>

                    <div className="form-group">
                    <span className="help-block">{this.state.errors.foto_pet}</span>
                        <h6>Foto de la mascota</h6>
                        <input type="file" onChange={this.onChange} name="foto_pet"></input>
                    </div>

                    <button type="submit"  className="btn btn-primary" >Registrar Perdida</button>             
                </form>
				<pre></pre>    
                <div className="col-12">                   
                    <Link to="/home" className="nav-link">Home</Link>
                </div>        
                <pre></pre>       
            </div>
        </div>
    </div>

);}
  };


export default Register;
  

























  
