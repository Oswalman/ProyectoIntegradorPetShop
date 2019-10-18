import React from 'react';
import DetallesMP from '../../components/detailsPet';

class DetallesPet extends React.Component {
    state = {
        detalles: localStorage.getItem('lostPet')
    }
    render(){
        return(
            <div className="container-fluid">
                <p>{this.state.detalles}</p>
            </div>
        );
    }
};

export default DetallesPet;