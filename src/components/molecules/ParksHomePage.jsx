import React from 'react'
import styled from 'styled-components'
import ParkSlideShow from './ParkSlideShow'

const MainPHPContainer = styled.div`
  display: flex; 
  width: 100vw; 
  height: 45vw; 
  flex-direction: row;
  background: rgba(220, 220, 220, .6) ;
`

const LeftContainer = styled.div`
  border: solid red;
  width: 40vw; 
`

const RightContainer = styled.div`
  border: solid blue;
  width: 60vw;
  display: flex;
  flex-direction: column;     
`

const LargeSlideContainer = styled.div`
  width: 100%; 
  height: 35vw;
  border: solid brown;
  display: flex;
  align-itmes: center;
  justify-content: center; 
`

const Title = styled.h2`
  color: black; 
  font-family: 'Dosis', sans-serif;
  font-weight: 200; 
  font-size: 3vw;
  margin-right: 2vw;
  margin-top: 3vw;
  text-align: right;
  margin-bottom: 2vw;  
`

const ParksHomePage = props => {
  const {skateParks} = props
  console.log (skateParks, 'skateyskateyparks')
  return (
    <>
      <MainPHPContainer>
        <LeftContainer>
          Green
        </LeftContainer>
        <RightContainer>
          <Title>Los Angeles Skate Parks </Title>
          <LargeSlideContainer>
            {skateParks ? 
              <ParkSlideShow skateParks={skateParks}/>
              : null
            }
          </LargeSlideContainer>
        </RightContainer>
      </MainPHPContainer>
    </>
  )
}

export default ParksHomePage