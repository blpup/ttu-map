
import React, {Component} from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import config from "../config"
import styling from "./map-styling.css.js"
import MAP_POINTS from "./map-points"
import SideMenu from "../SideMenu/side-menu"

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL:
//       `https://maps.googleapis.com/maps/api/js?key=${config.API_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`,
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `100vh` }} />,
//     mapElement: <div style={{ height: `100%` }} />
//   })
// )(props => (
//   <GoogleMap defaultZoom={17} defaultCenter={{ lat: 33.5841916, lng: -101.8748618 }} defaultOptions={{styles: styling}}>
//     {props.markers.map((marker, index) => (
//       <Marker position={{ lat: marker.coords.lat, lng: marker.coords.lng }} key={index}/>
//     ))}
//     <SideMenu data={MAP_POINTS}/>
//   </GoogleMap>
// ));
//
// const enhance = _.identity;
//
// const ReactGoogleMaps = () => [
//
//
//   <MyMapComponent key="map" markers={MAP_POINTS}/>
// ];

class ReactGoogleMap extends Component {
  render() {
     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={config.API_MAP_KEY}
      >
      <GoogleMap
        id="circle-example"
        mapContainerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        options={{styles: styling}}
        zoom={17}
        center={{ lat: 33.5841916, lng: -101.8748618 }}
        >
        { MAP_POINTS.map((marker, index) => (
          <Marker position={{ lat: marker.coords.lat, lng: marker.coords.lng }} key={index}/>
        ))}
        <SideMenu data={MAP_POINTS}/>
      </GoogleMap>
      </LoadScript>
     )
  }
}
export default ReactGoogleMap;
