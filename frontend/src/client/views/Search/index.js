import React from 'react';
import '../../style/mascotasP.css';
import '../../style/bootstrap.css';
import foto from "../../img/perdido1.png";
import { Link } from 'react-router-dom';
import Floating_Button from '../../components/floating_button';

class Search extends React.Component
{
    render(){
        return(
            <div className="container-fuid">
                <Floating_Button></Floating_Button> 
            <div className="row contN">
                   
                <div className="col">
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
                    <hr></hr>
                    <div>
                        <h4 className="txt-info">¿Has perdido tu mascota?</h4>
                        <h6 className="txt-info">Permitenos ayudarte ha encontrarla</h6>
                        <Link to="/searchRegister" className="btn btn-info">Buscar Mascota</Link>
                    </div>
                </div>
                
            </div>
            </div>
        )
    } 
}
export default Search;