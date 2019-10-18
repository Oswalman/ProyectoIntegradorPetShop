import React from 'react';
import '../style/style-Search.css'
import '../style/style-Search.css';
import { Link } from 'react-router-dom';


var images = require.context('../img', true);
const Imagen = (props) => {
    localStorage.setItem('lostPet', JSON.stringify(props.imagen));
    return(
        <div className="col-lg-3 col-sm-12 cnt">
            <div className="img">
                <img src={images('./'+props.imagen.foto_pet)} className="fotoMP"></img>        
            </div>
                <h5 className="txt-info">Se Busca</h5>
                <p className="txt-info">{props.imagen.Description}</p>
                <Link type="button" to="/DetailsPet" className="btn btn-info">Más detalles</Link> 
        </div>
    );
}
export default  Imagen;