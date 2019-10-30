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
     
        const data={CorreoCliente: decoded.CorreoCliente }
        fetch('http://localhost:4000/api/lostPet/search', { method : 'POST',body: JSON.stringify(data),headers:{
            'Content-Type': 'application/json'
        } })
        .then(response => response.json())
        .then( data  =>{
            this.setState({package : data})            
        })

        const info=this.state.package;
      
        return (
            <div className="container-fluid">
                <div className="jumbotron" style={{maxWidth:'1000px'}}>
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
                    <th scope="col">Fecha</th>
                    <th scope="col">Opción</th>
                    
                    </tr>
                </thead>
                <tbody>
                {info.map(lost => (
                    
                        <Table
                        key={lost._id}
                        id={lost._id}
                        Nom_Pet={lost.Nom_Pet}
                        Fecha={lost.createdAt}
                      />
                    ))}</tbody>
                    </table>

                </div>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Actualizar</a>
                </p>
                </div>
                
                
            </div>
        )
    }
}
