import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import React, { Component } from 'react'
const style = {
  width: '100%',
  height: '500px',
  position:'relative'
}

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      lact:'',
      lng:''

    }
    this.onMarkerClick= this.onMarkerClick.bind(this);
  }

  onMarkerClick(mapProps, map, clickEvent){
    this.setState({lact:clickEvent.latLng.lat(),
                  lng:clickEvent.latLng.lng()})
 
    this.props.pass(this.state);
  


  }
  
    render(){
        return(
        <div className="container-fluid" style={style}>

            <Map google={this.props.google} 
            initialCenter={{
                lat: 7.119448,
                lng: -73.122841
              }}
              style={style}

            zoom={15} onClick={this.onMarkerClick}>
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