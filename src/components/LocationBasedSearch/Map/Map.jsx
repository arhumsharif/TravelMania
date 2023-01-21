import React from 'react';
import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';
import { geolocated } from 'react-geolocated';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAS0fabteoQUtd14T1BoeTinzVAU6tndKk' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
