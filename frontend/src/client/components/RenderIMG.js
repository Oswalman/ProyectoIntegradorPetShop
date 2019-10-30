import React from 'react';
import '../style/style-Search.css'
import '../style/style-Search.css';
import { Link } from 'react-router-dom';


var images = require.context('../img', true);


export default class Imagen extends React.Component {
    constructor(props) {
        super(props);
        this.almacenar=this.almacenar.bind(this)
        
    }
    almacenar(){
        localStorage.setItem('lostPet', JSON.stringify(this.props.imagen));

    }
    render() {
        return (
            <div className="col-lg-3 col-sm-12 cnt">
            <div className="img">
                <img src={images('./'+this.props.imagen.foto_pet)} className="fotoMP"></img>        
            </div>
                <h5 className="txt-info">Se Busca</h5>
                <p className="txt-info">{this.props.imagen.Description}</p>
                <Link type="button" onClick={this.almacenar} to="/DetailsPet" className="btn btn-info">Más detalles</Link> 
        </div>
        )
    }
}

