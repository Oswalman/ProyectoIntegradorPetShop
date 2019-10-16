import {GoogleApiWrapper, Map} from 'google-maps-react';
import React, { Component } from 'react'
const style = {
  width: '100%',
  height: '500px',
  position:'relative'
}

export class MapContainer extends React.Component {
  
    render(){
        return(
        <div className="container-fluid" style={style}>

            <Map google={this.props.google} 
            initialCenter={{
                lat: 7.119448,
                lng: -73.122841
              }}
              style={style}
            zoom={15}/></div>)
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAWymL2m-gScRstbfTqKZCBWBmNB_ugHW4')
})(MapContainer)