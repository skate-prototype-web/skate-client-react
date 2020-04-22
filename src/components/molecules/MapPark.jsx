import React, {useState, useEffect} from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import useWindowSize from '../atoms/UseWindowSize'
import styled from 'styled-components'
import mapPin from '../../images/Enso-Map-Pin.png'

const MapContainer = styled.div`
  border: solid rgb(119, 33, 46);
  margin-top: 3vw; 
  width: 85vw;
  height: 50vw; 
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
const PopupDetails = styled.span`
  font-family: 'Dosis', sans-serif; 
  font-weight: 200;   
`

const PopupDetailsTitle = styled.p`
  font-family: 'Dosis', sans-serif; 
  font-weight: 400; 
`

const PopupContainer = styled.div`
  width: 300px;  
`

const MapPark = props => {
  const windowSize = useWindowSize()
  const { name, address, geolong, geolat, id } = props
  const pinLong = parseFloat(geolong)
  const pinLat = parseFloat(geolat)
  const view = {latitude: pinLat,
                longitude: pinLong,
                zoom: 15,
                width: '85vw',
                height: '50vw'
              }
              
  const [viewport, setViewport] = useState (view)

  const [selectedPark, setPark] = useState(false)

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

  useEffect(() => {
    const resizeIt = () => {
      setViewport(view)
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
                <PopupDetails>{address.street}, {address.city}</PopupDetails>
              </PopupContainer>
            </Popup>
          ) : null}
      </ReactMapGL>
    </MapContainer>
  )
}

export default MapPark

