import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import config from "../config"
import styling from "./map-styling.css.js"
import MAP_POINTS from "./map-points"
import SideMenu from "../SideMenu/side-menu"

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${config.API_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: 33.5841916, lng: -101.8748618 }} defaultOptions={{styles: styling}}>
    {props.markers.map(marker => (
      <Marker position={{ lat: marker.coords.lat, lng: marker.coords.lng }} />
    ))}
    <SideMenu/>
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = () => [


  <MyMapComponent key="map" markers={MAP_POINTS}/>
];

export default enhance(ReactGoogleMaps);
