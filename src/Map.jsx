import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import config from "./config"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const styling = [
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]


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
    <Marker position={{ lat: 33.5841916, lng: -101.8748618 }} />
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = () => [


  <MyMapComponent key="map" />
];

export default enhance(ReactGoogleMaps);
