import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import React, { Component } from 'react'
const style = {
  width: '100%',
  height: '500px',
  position:'relative',
  display:'display-inline'
}

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      lact:'',
      lng:'',
      lat2:0,
      lng2:0

    }
    this.onMarkerClick= this.onMarkerClick.bind(this);
  }

  onMarkerClick(mapProps, map, clickEvent){
    this.setState({lact:clickEvent.latLng.lat(),
                  lng:clickEvent.latLng.lng()})
 
    this.props.pass(this.state);
  


  }
  componentWillMount(){
    if (!!navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.setState({
          lat2: position.coords.latitude,
          lng2: position.coords.longitude,
        });
      },
      (err) => console.log(err),
      { enableHighAccuracy: true, timeout: 100000, maximumAge: 10000 },
      );
    } else {
      //  // No Support Web
      alert('El navegador no soporta la geolocalización,')
    }
  }
  
    render(){
      const lat2= this.state.lat2;
      const lng2=this.state.lng2;
        return(
        <div className="container-fluid" style={style}>

            <Map google={this.props.google} 
            initialCenter={{
                lat: 7.119448,
                lng: -73.122841
              }}
              style={style}

            zoom={15} onClick={this.onMarkerClick} defaultCenter={{ lat2, lng2 }}>
               <Marker
                name={'Mascota'}
                position={{lat: this.state.lact, lng: this.state.lng}} />
              <Marker />
            </Map>
           
            
            
          </div>)
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAWymL2m-gScRstbfTqKZCBWBmNB_ugHW4')
})(MapContainer)