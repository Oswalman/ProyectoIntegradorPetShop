import React, {Component} from 'react';
import '../../style/mascotasP.css';
import '../../style/bootstrap.css';
import foto from "../../img/perdido1.png";
import { Link } from 'react-router-dom';
import Floating_Button from '../../components/floating_button';

import Busqueda from '../../components/Busqueda';

class Search extends Component
{
    
    state = {
        package : []
    }

    render(){
        const logueado=(<div>
            <h4 className="txt-info">¿Has perdido tu mascota?</h4>
            <h6 className="txt-info">Permitenos ayudarte ha encontrarla</h6>
            <Link to="searchRegister" className="btn btn-info">Buscar Mascota</Link>
        </div>)
        const notLogueado=(<Link to="login">Iniciar sesión</Link>)

        fetch('http://localhost:4000/api/lostPet/', { method : 'GET'})
        .then(response => response.json())
        .then( data  =>{
            this.setState({package : data})            
        })
        return(

            <div className="container-fuid">
                <Floating_Button></Floating_Button> 
                <div className="row contN">
                    <div className="col">
                        <Busqueda
                        package = {this.state.package}/>
                        {localStorage.usertoken ? logueado: notLogueado}
                    </div>
                </div>
            </div>
        )
    } 
}
export default Search;