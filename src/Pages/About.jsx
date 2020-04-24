import React from 'react'
import styled from 'styled-components';
import Header from '../Components/organisms/Header'
import Footer from '../Components/organisms/Footer'

const AboutTitle = styled.h1`
  font-family: 'Dosis', sans-serif;
  font-size: 4vw; 
  color: rgb(119,33,46); 
  font-weight: 200; 
  text-align: center;  
`

const ZenTagLine = styled.h4 `
  font-family: 'Dosis', sans-serif;
  font-size: 2.5vw; 
  color: rgb(119,33,46); 
  font-weight: 400; 
  text-align: center; 
`
const About = props => {
  return (
   <>
    <Header/>
    <AboutTitle>What is Zen Skate Co.?</AboutTitle>
    <ZenTagLine>
      Zen Skate Co celebrates the moment of equilibrium when the mind is freed to let the body create art through movement. 
    </ZenTagLine>
    <Footer/>
   </>
  )
}

export default About
