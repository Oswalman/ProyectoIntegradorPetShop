import React, {Component} from 'react';
import Imagen from '../components/RenderIMG'

class Busqueda extends Component{

    
    renderPackage = () => {
        const packageA = this.props.package;
        if(packageA.length === 0) return (
            <React.Fragment>
                <p>NO HAY MASCOTAS EN BUSQUEDA</p>
            </React.Fragment>
        );
        return(
            <React.Fragment>
                <div style={{display: "flex"}}>
                    {packageA.map(imagen => (
                        <Imagen
                        key={Imagen.id}
                        imagen={imagen}/>
                    ))}
                </div> 
            </React.Fragment>
        );
    }

    render(){
        return(                    
            <React.Fragment>
                {this.renderPackage()}
            </React.Fragment>
        );
    }
}
export default Busqueda;