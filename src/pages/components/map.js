import React from 'react'
import { Map, GoogleApiWrapper ,Marker  } from 'google-maps-react'

class MapContainer extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            lat:this.props.lat,
            lng:this.props.lng
        }
    }
    
    
    
    render(){
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
        return(
            
            <Map
            google={this.props.google}
            zoom={7}
            style={mapStyles}
            initialCenter={{ lat: this.state.lat, lng: this.state.lng}}
            >
                <Marker position={{ lat: this.state.lat, lng: this.state.lng}} />
            </Map>           
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBKgEHc8-ETzTbZy75FfOxC0dyFXoiovoM'
})(MapContainer);