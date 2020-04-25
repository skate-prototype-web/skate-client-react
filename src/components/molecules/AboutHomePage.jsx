import React from 'react'
import styled from 'styled-components'

const MainAHPContainer = styled.div`
  width: 100vw; 
  height: 35vw; 
  background: #F8F8FF;
`

const AboutHomeImageContainer = styled.div`
  border: 1.5px solid #DCDCDC; 
  width: 40vw; 
  height: 25vw;
  margin-left: 3vw;
  display: flex; 
  align-items: center;
  justify-content: center; 
`

const AboutImage = styled.img`
  width: 96%;
  height: 94%;
  padding: 1vw;  
`

const TitleMargin = styled.div`
  height: 1vw; 
  width: 100vw; 
`

const AboutTitle = styled.h2`
  color: rgb(119, 33, 46);; 
  font-family: 'Dosis', sans-serif;
  font-weight: 200; 
  font-size: 3vw;
  margin-left: 2vw;
  margin-bottom: .5vw;  
  text-align: left; 
`
const AboutHomePage = props => {
  return (
    <>
      <MainAHPContainer>
        <TitleMargin/>
        <AboutTitle>About Zen SK8</AboutTitle>
        <AboutHomeImageContainer>
          <AboutImage src={'https://zenskate.s3-us-west-2.amazonaws.com/zen_venice_04.jpg'}/>
        </AboutHomeImageContainer>
      </MainAHPContainer>
    </>
  )
}

export default AboutHomePage