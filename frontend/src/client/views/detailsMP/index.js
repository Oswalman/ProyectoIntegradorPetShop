import React from 'react';
import DetallesMP from '../../components/detailsPet';



class DetallesPet extends React.Component {
    state = {
        detalles:JSON.parse(localStorage.getItem('lostPet'))
    }
    
    render(){
        return(            
            <div className="container-build" style={{background:"white", top:"0px"}}>
                <DetallesMP send={this.state.detalles}></DetallesMP>
            </div>
        );
    }
};

export default DetallesPet;