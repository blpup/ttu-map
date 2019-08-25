import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import config from './config.js'
const mapStyles = {
  width: '100%',
  height: '100%'
}

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(config)
  }

  render() {
    return ( <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={{ lat: 33.5842591, lng: -101.8804709}}
          /> );
  }

}

export default GoogleApiWrapper({
  apiKey: config.API_MAP_KEY
})(MapContainer);
