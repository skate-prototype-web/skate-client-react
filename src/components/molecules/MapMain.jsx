import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const MapMain = props => {
  const [viewport, setViewport] = useState( {
    latitude: 34.0536909, 
    longitude: -118.2427666,
    zoom: 10,
    width: '85vw',
    height: '50vw'
  })

  return (
    <>
      <ReactMapGL {...viewport}>
      </ReactMapGL>
    </>
  )

} 

export default MapMain