import React from 'react';
import { render } from 'react-dom';
import '../../style/login.css';
import foto from '../../img/LogoPetSafe.png'
import { Link } from 'react-router-dom';
import Mapa from '../../components/map';

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
     this.RegistrarPet=this.RegistrarPet.bind(this);
     this.onChangeUpload=this.onChangeUpload.bind(this);
    }

    RegistrarPet(elem){
        elem.preventDefault()
        var url = 'http://localhost:4000/api/lostPet/';

            const formData = new FormData()
           
            
            formData.append('foto_pet',this.state.foto_pet, this.state.foto_pet.name)
            formData.append("Nom_User",this.state.Nom_User)
            formData.append("Direccion", this.state.Direccion)
            formData.append("Nom_Pet", this.state.Nom_Pet)
            formData.append("Description", this.state.Description)
            console.log(this.state.foto_pet)
            console.log(formData)
      
            const options={
                method: 'POST',
                body:formData, 
               
                }
        
            fetch(url + 'upload', options).then(res => 
                {
                    console.log(res)
                    window.location.href='/search'
                
            }).catch(error => console.error('Errors:', error))

    }

    onChange(elem) {
        this.setState({[elem.target.name] : elem.target.value})
    }
    onChangeUpload(elem){
        this.setState({foto_pet: elem.target.files[0]})
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

                <form onSubmit={this.RegistrarPet}  className="col-12">

                    <div className="form-group">
                    <span className="help-block">{this.state.errors.Nom_User}</span>
                        <input type="text" className="form-control" onChange={this.onChange} name="Nom_User" placeholder="Propietario" required></input>
                    </div>

                    <div className="form-group">
                    <span className="help-block">{this.state.errors.Direccion}</span>
                        <input type="text" className="form-control" onChange={this.onChange} name="Direccion" placeholder="Direccion"></input>
                    </div>
                    
                    <div className="form-group">
                    <span className="help-block">{this.state.errors.Nom_Pet}</span>
                        <input type="text" className="form-control" onChange={this.onChange} name="Nom_Pet" placeholder="Nombre de la mascota"></input>
                    </div>

                    <div className="form-group">
                    <span className="help-block">{this.state.errors.Description}</span>
                        <textarea className="form-control" onChange={this.onChange} name="Description" placeholder="Descripcion"></textarea>
                    </div>

                    <div className="form-group">
                    <span className="help-block">{this.state.errors.foto_pet}</span>
                        <h6>Foto de la mascota</h6>
                        <input type="file"  onChange={ this.onChangeUpload} name="foto_pet"></input>
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
        <Mapa/>
    </div>

);}
  };


export default Register;
  

























  
