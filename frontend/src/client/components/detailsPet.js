import React from 'react';
import DetallesPet from '../views/detailsMP';

var images = require.context('../img', true);
const DetallesMP = (props) => {
    return(
            <div className="container-build" style={{padding: "20px"}}>
                <div className="container">
                    <img src={images('./'+props.send.foto_pet)} className="fotoMP"></img>        
                </div>
                <div className="container" style={{padding: "10px", textAlign:"center", width:"40%"}}>
                    <p className="txt-info">{props.send.Description}</p>
                </div>
                <div className="container" style={{top:"20px", textAlign:"center",width:"40%"}}>
                    <p className="txt-info">Si lo has visto o sabes algo de {props.send.Nom_Pet} te puedes comunicar con {props.send.CorreoCliente} o en {props.send.Direccion} </p>
                </div>
                <div className="row"></div>
            </div>
    )
}
export default DetallesMP;
