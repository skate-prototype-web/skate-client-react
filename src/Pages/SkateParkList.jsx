import React, {Component} from 'react'
import Header from '../Components/organisms/Header'
import MapMain from '../Components/molecules/MapMain'
import styled from 'styled-components'
import AreaParks from '../Components/organisms/parks/AreaParks'


const StyledHomeTitle = styled.h1`
  font-weight: 400;
  color: rgb(119, 33, 46); 
  font-family: 'Dosis', sans-serif;
  margin-left: 3vw; 
  font-size: 3vw;
  margin-top: 2vw; 
  margin-bottom: 0;   
`

const StyledParksContainer = styled.div`
  background: rgba(255, 255, 255, .9);  
  display: flex; 
  flex-wrap: wrap;
  flex-direction: column;
  width: 85%; 
  margin: auto;
  justify-content: center; 
  text-align: center; 
`

const SkateParkList = props => {
  const { skateParks, skateParksRaw} = props
  return (
    <>
      <Header/>
      <StyledHomeTitle>Los Angeles Area Parks</StyledHomeTitle>
      {skateParks && (
        <StyledParksContainer>
          <MapMain skateParks={skateParksRaw} />
          {skateParks.map((region, index) => {
              return (
                <AreaParks region={region.name} parks={region.parks} key={index}/>
              )
          })}
        </StyledParksContainer>
      )}
    </>
  )
}

export default SkateParkList