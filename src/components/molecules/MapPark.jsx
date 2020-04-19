import React, {useState, useEffect} from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import styled from 'styled-components'
import mapPin from '../../images/Enso-Map-Pin.png'

const MapContainer = styled.div`
  border: solid rgb(119, 33, 46);
  margin-top: 3vw; 
`

const SkateImage = styled.img `
  height: 2.5vw; 
  width: auto;
  
  &:hover{
    cursor: pointer;
    height: 3.25vw;  
  }
`

const PopupName = styled.h3`
  font-family: 'Dosis', sans-serif;
  font-weight: 200;  
`

const PopupContainer = styled.div`
  width: 300px;  
`

const MapPark = props => {
  const { name, address, geolong, geolat, id } = props
  const pinLong = parseFloat(geolong)
  const pinLat = parseFloat(geolat)
  const [viewport, setViewport] = useState ({
    latitude: pinLat,
    longitude: pinLong,
    zoom: 15,
    width: '85vw',
    height: '50vw'
  })
  const [selectedPark, setPark] = useState(null)
  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setPark(false)
      }
    }
    window.addEventListener('keydown', listener)
    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])

  console.log (pinLong, pinLat, parseFloat(geolong), parseFloat(geolat), 'coordinates')
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
        <Marker
          key={id}
          longitude={pinLong}
          latitude={pinLat}
          >
            <SkateImage 
            src={mapPin}
            onClick={e=> {
              e.preventDefault()
              setPark(true)
            }}/>
          </Marker>

          {selectedPark ? (
            <Popup
            latitude={pinLat}
            longitude={pinLong}
            onClose={() => {
              setPark(false)
            }}
            >
              <PopupContainer>
                <PopupName>{name}</PopupName>
              </PopupContainer>
            </Popup>
          ) : null}
      </ReactMapGL>
    </MapContainer>
  )
}

export default MapPark

