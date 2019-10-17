import React from 'react';
import '../style/style-Search.css'


var images = require.context('../img', true);
const Imagen = (props) => {
    return(
        <div className="col-lg-3 col-sm-12 cnt">
            <div className="img">
                <img src={images('./'+props.imagen.foto_pet)} className="fotoMP"></img>        
            </div>
                <h5 className="txt-info">Se Busca</h5>
                <p className="txt-info">{props.imagen.Description}</p>
                <button type="button" className="btn btn-info">Más detalles</button>

                <input type="checkbox" id="cerrar"></input>
                <label for="cerrar" id="btn-cerrar">X</label>
                <div class="modal">
                    <div className="img">
                        <h2>Se Busca</h2>
                        <img src={images('./'+props.imagen.foto_pet)} className="fotoMP"></img>        
                    </div>
                </div>
        </div>
    );
}
export default  Imagen;