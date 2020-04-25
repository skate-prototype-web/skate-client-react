import React from 'react'
import styled from 'styled-components'

const MainAHPContainer = styled.div`
  width: 100vw; 
  height: 40vw; 
  background: #C0C0C0;
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
const AboutHomePage = props => {
  return (
    <>
      <MainAHPContainer>
        <TitleMargin/>
        <AboutTitle>About Zen SK8</AboutTitle>


      </MainAHPContainer>
    </>
  )
}

export default AboutHomePage