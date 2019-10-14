import React from 'react';

const Imagen = (props) => {
    return(
        <div className="col-lg-3 col-sm-12 cnt">
            <div className="img">
                <img src={"../img/"+props.imagen.foto_pet} className="fotoMP"></img>        
            </div>
                <h5 className="txt-info">Se Busca</h5>
                <p className="txt-info">{props.imagen.Description}</p>
                <button type="button" className="btn btn-info" >Más detalles</button>
        </div>
    );
}
export default  Imagen;