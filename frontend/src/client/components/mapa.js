import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import React, { Component } from 'react'
const style = {
  width: '100%',
  height: '500px',
  position:'relative',
 
}

export class MapaContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        lat: 0,
      lng: 0,
        package:[]

    }
    
  }
  componentWillMount(){
    if (!!navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => console.log(err),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
      );
    } else {
      //  // No Support Web
      alert('El navegador no soporta la geolocalización,')
    }
  }

  
  
    render(){
        fetch('http://localhost:4000/api/lostPet/', { method : 'GET'})
        .then(response => response.json())
        .then( data  =>{
        
            this.setState({package : data})            
        })
       
        const packageA = this.state.package
        
        const { lat, lng } = this.state;
        return(
        <div className="container-fluid" style={style}>

            <Map google={this.props.google} 
            initialCenter={{
                lat: 7.119448,
                lng: -73.122841
              }}
              style={style}

            zoom={15}  defaultCenter={{ lat, lng }}>
                {packageA.map(puntos => (
            <Marker
            key={puntos._id}
            title={puntos.Nom_Pet}
          
            position={{lat: puntos.Lat, lng: puntos.Lng}} />
        ))}
               
            </Map>
           
            
            
          </div>)
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAWymL2m-gScRstbfTqKZCBWBmNB_ugHW4')
})(MapaContainer)