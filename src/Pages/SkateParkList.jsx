import React, {Component} from 'react'
import Header from '../Components/organisms/Header'
import MapMain from '../Components/molecules/MapMain'
import styled from 'styled-components'
import AreaParks from '../Components/organisms/parks/AreaParks'
import Footer from '../Components/organisms/Footer'
import ResponsiveMainContainer from '../Components/atoms/ResponsiveMainContainer'

const StyledHomeTitle = styled.h1`
  font-weight: 400;
  color: rgb(119, 33, 46); 
  font-family: 'Dosis', sans-serif;
  margin-left: 3vw;
  text-align: left;  
  font-size: 3vw;
  margin-top: 2vw; 
  margin-bottom: 0;
  
  @media(min-width: 1100px) {
    font-size: 33px; 
    margin-top: 18px; 
  }
`

const StyledParksContainer = styled.div`
  background: rgba(255, 255, 255, .9);  
  display: flex; 
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%; 
  margin: auto;
  justify-content: center;  
  text-align: center;
  max-width: 1100px; 
`

const HeaderDiv = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex; 
  justify-content: left;
  background: rgba(255, 255, 255, .9);   
`

const MapContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SkateParkList = props => {
  const { skateParks, skateParksRaw} = props
  return (
    <>
      <Header/>
      <ResponsiveMainContainer>
        <HeaderDiv>
          <StyledHomeTitle>Los Angeles Area Parks</StyledHomeTitle>
        </HeaderDiv>
        {skateParks && (
          <StyledParksContainer>
            <MapContainer>
              <MapMain skateParks={skateParksRaw} />
            </MapContainer>
            {skateParks.map((region, index) => {
                return (
                  <AreaParks region={region.name} parks={region.parks} key={index}/>
                )
            })}
          </StyledParksContainer>
        )}
      </ResponsiveMainContainer>
      <Footer/>
    </>
  )
}

export default SkateParkList