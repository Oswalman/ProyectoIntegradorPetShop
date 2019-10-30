import React, {Component} from 'react';
import '../../style/mascotasP.css';
import '../../style/bootstrap.css';

import Mapa from '../../components/mapa';
import { Link } from 'react-router-dom';
import Floating_Button from '../../components/floating_button';

import Busqueda from '../../components/Busqueda';

class Search extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            package : []
        }
        this.pass=this.pass.bind(this);
    
    
    }
    
   
    pass(_state){
      
        this.setState({lat:_state.lact, lng:_state.lng})
    }

    render(){
        
        const logueado=(<div>
            <h4 className="txt-info">¿Has perdido tu mascota?</h4>
            <h6 className="txt-info">Permitenos ayudarte ha encontrarla</h6>
            <Link type="button" to="searchRegister" className="btn btn-info">Buscar Mascota</Link>
        </div>)
        const notLogueado=(
        <div style={{textAlign: "center"}} className="container">
            <h4 className="txt-info">¿Has perdido tu mascota?</h4>
            <h6 className="txt-info">Permitenos ayudarte ha encontrarla</h6>
            <Link type="button" to="login" className="btn btn-info">Iniciar sesión</Link>
        </div>
        )

        fetch('http://localhost:4000/api/lostPet/', { method : 'GET'})
        .then(response => response.json())
        .then( data  =>{
            this.setState({package : data})            
        })
       
        return(

            <div className="container-build">
                <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target=".bd-example-modal-xl">Mapa</button>
                <div className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <Mapa/>
                        </div>
                    </div>
               </div>
                <div className="row contN" style={{marginLeft:"0px", marginRight:"0px"}}>
                    <div className="col container">
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