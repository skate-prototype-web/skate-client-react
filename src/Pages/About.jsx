import React from 'react'
import styled from 'styled-components';
import Header from '../Components/organisms/Header'
import Footer from '../Components/organisms/Footer'
import portrait from '../../src/images/a_zen_1.jpeg'
import logo from '../../src/images/enso_cursive.png'

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

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
`

const ImageContainer = styled.div`
  height: 50vw;
  background: rgba(119, 33, 46, .8);
  display: flex; 
  justify-content: center;
`

const ImageContainer2 = styled.div`
  height: 50vw;
  background: white;
  display: flex; 
  justify-content: center;
`

const ZenPicture = styled.img`
  object-fit: contain;
`

const AboutZenContainer = styled.div`
  background: rgba(119, 33, 46, .9);  
`

const AboutZenText = styled.p`
  font-family: 'Dosis', sans-serif; 
  font-size: 2.6vw; 
  font-weight: 200;
  color: white;
  text-align: right;
  margin-right: 3vw;
  margin-left: 3vw;
  line-height: 1.4; 
`

const About = props => {
  return (
    <>
    <Header/>
    <AboutTitle>What is Zen Skate Co.?</AboutTitle>
      <ZenTagLine>
        Zen Skate Co celebrates the moment of equilibrium when the mind is freed to let the body create art through movement. 
      </ZenTagLine>
    <Container>
      <ImageContainer>
        <ZenPicture src={portrait}/>
      </ImageContainer>
      <AboutZenContainer>
        <AboutZenText>
          Zen Skate Co began in 2019 when a group of 5th grade friends fell in love with skateboarding. Their love for skateboarding united them. They were not professionals or experts. They hadn’t mastered the basic skateboarding tricks, but they were eager to learn and wanted to have fun. This is the essence of the Zen Skate Co. It isn’t about perfection or being an expert. Skateboarding is about having fun and continually pushing yourself to grow. It is about the willingness to fall, get back up and try again.
        </AboutZenText>
      </AboutZenContainer>
    </Container>
    <Container>
      <AboutZenContainer>
        <AboutZenText>The Zen Skate Co logo derives its inspiration from the Buddhist Ensō. Ensō is a Japanese word meaning “circular form.” In Buddhism it symbolizes enlightenment. The Ensō represents that moment when the mind is free to allow the body to create. The open Ensō in the Zen logo shows the incompleteness in movement and the beauty of imperfection.</AboutZenText>
      </AboutZenContainer>
      <ImageContainer2>
        <ZenPicture src={logo}/>
      </ImageContainer2>
    </Container>
    <Footer/>
   </>
  )
}

export default About
