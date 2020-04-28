import React from 'react'
import styled from 'styled-components'
import ParkSlideShow from './ParkSlideShow'
import { Link } from '@reach/router'

const MainPHPContainer = styled.div`
  display: flex; 
  width: 100vw; 
  height: 45vw; 
  flex-direction: row;
  background: rgba(220, 220, 220, .6) ;
`

const LeftContainer = styled.div`
  width: 40vw; 
`

const RightContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;     
`

const LargeSlideContainer = styled.div`
  width: 100%; 
  height: 35vw;
  display: flex;
  align-itmes: center;
  justify-content: center; 
`

const CopyContainer = styled.div`
  margin-top: 7vw; 
  margin-left: 3vw; 
`

const HomeParkCopy = styled.p`
  font-family: 'Dosis', sans-serif;
  font-size: 2.5vw; 
  font-weight: 400;
  line-height: 1.5; 
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

const BottomLinkContainer = styled.div`
  text-align: center; 
`

const StyledLink = styled(Link)`
  text-decoration: none; 
  color: rgb(119, 33, 46);
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
  font-size: 3vw;
  text-align: center;
  
  &:hover {
    color: rgba(119, 33, 46, .6);
  }
`

const ParksHomePage = props => {
  const {skateParks} = props
  console.log (skateParks, 'skateyskateyparks')
  return (
    <>
      <MainPHPContainer>
        <LeftContainer>
          <CopyContainer>
            <HomeParkCopy>
            We Love Los Angeles and we love skating. We are currently in the process of gathering information on all the best spots in the city to hang out with your friends and skate. We will continue to add new spots and more information. Soon we will give you the ability to review your favorite places.
            </HomeParkCopy>
            <BottomLinkContainer>
              <StyledLink to="/skateparks">Find a park near you . . .</StyledLink>
            </BottomLinkContainer>
          </CopyContainer>
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