import React from 'react'
import styled from 'styled-components'

const MainPHPContainer = styled.div`
  width: 100vw; 
  height: 35vw; 
  background: rgba(220, 220, 220, .7) ;
`

const TitleMargin = styled.div`
  height: 1vw; 
  width: 100vw; 
`

const AboutTitle = styled.h2`
  color: black; 
  font-family: 'Dosis', sans-serif;
  font-weight: 200; 
  font-size: 3vw;
  margin-left: 2vw;
  text-align: left; 
`

const ParksHomePage = props => {
  return (
    <>
      <MainPHPContainer>
        <TitleMargin/>
        <AboutTitle>About Zen SK8</AboutTitle>
      </MainPHPContainer>
    </>
  )
}

export default ParksHomePage