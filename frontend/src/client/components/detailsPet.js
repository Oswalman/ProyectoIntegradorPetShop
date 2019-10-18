import React from 'react';
import DetallesPet from '../views/detailsMP';

var images = require.context('../img', true);
const DetallesMP = (props) => {
    return(
        <React.Fragment>
            <div className="container-build col-12">
                <img src={images('./'+props.send.foto_pet)} className="fotoMP"></img>        
            </div>
            <div className="container">
                <p className="txt-info">{props.send.Description}</p>
            </div>
            <div>
                <p>
                    Si lo has visto o sabes algo de {props.send.Nom_Pet} te puedes comunicar al poner*telefono o perfil*
                </p>
            </div>
        </React.Fragment>
    )
}
export default DetallesMP;
