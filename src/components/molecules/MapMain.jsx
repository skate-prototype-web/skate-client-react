import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import styled from 'styled-components'
import mapPin from '../../images/Enso-Map-Pin.png'
import regionNames from '../../regionNames'


const MapContainer = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid rgb(119, 33, 46);
  margin-top: 3vw;
  width: 100%;
  max-width: 1095px;  
`

const PopupContainer = styled.div`
  width: 300px;
  @media(max-width: 450px) {
    width: 250px; 
  }  
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
  const viewIt = { 
    latitude: 34.0536909,
    longitude:-118.2427666, 
    zoom: 10,
    width: '99%',
    height: '50vw'
  }

  const [viewport, setViewport] = useState(viewIt)
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

  useEffect(() => {
    const resizeIt = () => {
      setViewport(viewport)
    }
    window.addEventListener('resize', resizeIt)
    return () => {
      window.removeEventListener('resize', resizeIt)
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