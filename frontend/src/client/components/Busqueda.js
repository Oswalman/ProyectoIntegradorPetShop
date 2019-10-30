import React, {Component} from 'react';
import Imagen from '../components/RenderIMG'

class Busqueda extends Component{
    constructor(props) {
        super(props);
        this.renderPackage=this.renderPackage.bind(this);
    }

    
    renderPackage = () => {
        
        const packageA = this.props.package;
 
        if(packageA.length === 0) return (
            <React.Fragment>
                <div class="alert alert-danger" role="alert">
                No hay mascotas registradas, se el primero.
                </div>
            </React.Fragment>
        );
        return(
            <React.Fragment>
                <div style={{display: "flex"}}>
                    {packageA.map(imagen => (
                        <Imagen
                        key={imagen._id}
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