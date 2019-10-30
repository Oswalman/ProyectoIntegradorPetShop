import React, { Component } from 'react'
import '../../style/mascotasP.css';
import Busqueda from '../../components/Busqueda';
import { Link } from 'react-router-dom';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state={package:[]}
    }
    render() {
        fetch('http://localhost:4000/api/adopt/', { method : 'GET'})
        .then(response => response.json())
        .then( data  =>{
            this.setState({package : data})            
        })
        const logueado=(<div>
            <h4 className="txt-info">¿Necesitas ayuda dando en adopción a tu mascota?</h4>
            <h6 className="txt-info">Permitenos ayudarte ha buscarle hogar</h6>
            <Link type="button" to="searchRegister" className="btn btn-info">Registrar</Link>
        </div>)
        const notLogueado=(
        <div style={{textAlign: "center"}} className="container">
            <h4 className="txt-info">¿Necesitas ayuda dando en adopción a tu mascota?</h4>
            <h6 className="txt-info">Permitenos ayudarte ha buscarle hogar</h6>
            <Link type="button" to="login" className="btn btn-info">Iniciar sesión</Link>
        </div>
        )
        return (
            <div className="container-build">
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
