import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Table from '../../components/table'
export default class index extends Component {
    constructor(props){
        super(props);
        this.state={package:[]}
    }
    render() {
        const decoded = jwt_decode(localStorage.usertoken)
        fetch('http://localhost:4000/api/lostPet/search', { method : 'POST',body: JSON.stringify(decoded.CorreoCliente)})
        .then(response => response.json())
        .then( data  =>{
            this.setState({package : data})            
        })


        return (
            <div className="container-fluid">
                <div class="jumbotron">
                <h1 class="display-4">Hola, {decoded.NombreCliente}!</h1>
                <p class="lead">Este es un simple gestor de contenidos, de las ventas, adopciones o busquedas que hayas creado.</p>
                <hr class="my-4"/>
                <p>Gracias por unirte a esta gran comunidad.</p>

                <div className="container-fluid">
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Post_Id</th>
                    <th scope="col">Nombre mascota</th>
                    <th scope="col">Eliminar</th>
                    
                    </tr>
                </thead>
                <tbody>
                {this.state.package.map(lost => (
                        <Table
                        key={lost._id}
                        id={lost._id}
                        Nom_Pet={lost.Nom_Pet}
                      />
                    ))}</tbody>
                    </table>

                </div>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
                </div>
                
                
            </div>
        )
    }
}
