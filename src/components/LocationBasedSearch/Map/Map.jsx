import React from 'react';
import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';
import { geolocated } from 'react-geolocated';

const Map = () => {
  const [coordinates, setCurrentLocation] = useState({});
  useEffect(() => {
    getLocation();
  }, []);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ latitude, longitude });
    });
  };
  // const coordinates = {lat: 0, lng: 0};
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAS0fabteoQUtd14T1BoeTinzVAU6tndKk' }}
        defaultCenter={{
          lat: coordinates.latitude,
          lng: coordinates.longitude,
        }}
        center={{
          lat: coordinates.latitude,
          lng: coordinates.longitude,
        }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
