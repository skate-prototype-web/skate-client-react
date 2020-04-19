import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import styled from 'styled-components'
import mapPin from '../../images/Enso-Map-Pin.png'
import regionNames from '../../regionNames'


const MapContainer = styled.div`
  border: solid rgb(119, 33, 46);
  margin-top: 3vw; 
`

const PopupContainer = styled.div`
  width: 300px;  
`

const PopupImage = styled.img `
  width: 95%; 
  height: auto; 
  border: solid grey; 
`

const PopupName = styled.h3`
  font-family: 'Dosis', sans-serif;
  font-weight: 200;  
`

const PopupDetails = styled.h4``

const SkateImage = styled.img `
  height: 2.5vw; 
  width: auto;
  
  &:hover{
    cursor: pointer;
    height: 3.25vw;  
  } 
`

const MapMain = props => {
  const { skateParks } = props
  const [viewport, setViewport] = useState( {
    latitude: 34.0536909, 
    longitude: -118.2427666,
    zoom: 10,
    width: '85vw',
    height: '50vw'
  })
  const [selectedPark, setPark] = useState(null)
  useEffect(() => {
    const listener = (e) => {
      if(e.key === "Escape") {
        setPark(null)
      }
    }
    window.addEventListener("keydown", listener)
    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])
  return (
    <MapContainer>
      <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken={process.env.MAP_API}
      mapStyle="mapbox://styles/snassau/ck93a8k5q0fkm1iqlo1s2wsmo"
      onViewportChange={view => {
        setViewport(view)
      }}
      > 
        {skateParks.map(park => (
          <Marker
            key={park._id}
            longitude={parseFloat(park.geolong)}
            latitude={parseFloat(park.geolat)}
            >
            <SkateImage 
            src={mapPin}
            onClick={e=> {
              e.preventDefault()
              setPark(park)
            }}/>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
          latitude={parseFloat(selectedPark.geolat)}
          longitude={parseFloat(selectedPark.geolong)}
          onClose={() => {
            setPark(null)
          }}
          >
            <PopupContainer>
              <PopupName>{selectedPark.name}</PopupName>
              <PopupImage src={selectedPark.images[0]}/>
            </PopupContainer>
          </Popup>
        ) : null}
      </ReactMapGL>
    </MapContainer>
  )
} 

export default MapMain