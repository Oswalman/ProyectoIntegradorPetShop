import React, { Component } from 'react'

export default class table extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        
    <tr>
      <th scope="row">{this.props.id}</th>
      <td>{this.props.Nom_Pet}</td>
      <td>{this.props.Fecha}</td>
      <td><button type="button" class="btn btn-danger">Eliminar</button></td>
    </tr>

        )
    }
}
