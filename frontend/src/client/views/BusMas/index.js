import React from 'reac';
import '../../style/mascotasP.css';
import '../../style/bootstrap.css';
import foto from "../../img/perdido1.png";
import { Link } from 'react-router-dom';


class Search extends React.Component
{
    render(){
        return(
            <div>
                <div className="cont">
                    <div className="col-lg-3 col-sm-12 cnt">
                        <div className="img">
                            <img src={foto} className="fotoMP"></img>        
                        </div>
                        <h5 className="txt-info">Se Busca</h5>
                        <p className="txt-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam dolorum ullam nam, quisquam vero quis?</p>
                        <button type="button" className="btn btn-info" >Más detalles</button>
                    </div>         
                </div>
                <div>
                    <h3 className="txt-info">¿Has perdido tu mascota?</h3>
                    <p className="txt-info">Permitenos ayudarte ha encontrarla</p>
                    <button type="button" className="btn btn-info" >Buscar Mascota</button>
                </div>
            </div>
        )
    } 
}
export default Search;