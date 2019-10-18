import React from 'react';
import DetallesMP from '../../components/detailsPet';

class DetallesPet extends React.Component {
    state = {
        detalles: JSON.parse(localStorage.getItem('lostPet'))
    }
    render(){
        return(
            <div className="container-fluid">
                <p>{console.log(this.state.detalles.Nom_Pet)}</p>
            </div>
        );
    }
};

export default DetallesPet;