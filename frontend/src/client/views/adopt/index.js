import React, { Component } from 'react'
import '../../style/mascotasP.css';
import Busqueda from '../../components/Busqueda';

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
        return (
            <div className="container-build">
                <div className="row contN" style={{marginLeft:"0px", marginRight:"0px"}}>
                    <div className="col container">
                        <Busqueda
                        package = {this.state.package}/>
                        
                      
                    </div>
                </div>
                
            </div>
        )
    }
}
