import React from 'react'
import styled from 'styled-components';
import Header from '../Components/organisms/Header'
import Footer from '../Components/organisms/Footer'
import logo from '../../src/images/enso_cursive.png'

const AboutContainer = styled.div`
  width: 100%; 
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  position: relative;
  background: rgba(192,192,192,.2)
`

const AboutTitle = styled.h1`
  font-family: 'Dosis', sans-serif;
  font-size: 4vw; 
  color: rgb(119,33,46); 
  font-weight: 200; 
  text-align: center;
  @media(min-width: 1100px) {
    font-size: 45px;  
  }  
`

const ZenMotto = styled.h4 `
  font-family: 'Olympic Branding';
  font-size: 8vw;
  color: rgba(119, 33, 46, .75);
  text-align: center;
  margin-top: 1vw;
  margin-bottom: 1vw;
  @media(min-width: 1100px) {
    font-size: 88px;  
  }  
`

const ZenTagLine = styled.h4 `
  font-family: 'Dosis', sans-serif;
  font-size: 2.5vw; 
  color: rgb(119,33,46); 
  font-weight: 400; 
  text-align: center;
  margin-bottom: .5vw; 
  margin-top: .5vw;
  @media(min-width: 1100px) {
    font-size: 27px; 
  }  
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  max-width: 1100px; 
`

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  background: white;  
`

const BlankDiv = styled.div`
  height: 3vw; 
  width: 100%;  
`

const ImageContainer = styled.div`
  height: 50vw;
  background: rgba(119, 33, 46, .8);
  display: flex; 
  justify-content: center;
  @media(min-width: 1100px) {
    height: 550px; 
  }
`

const ImageContainer2 = styled.div`
  height: 50vw;
  background: white;
  display: flex; 
  justify-content: center; 
`
const ImageContainer3 = styled.div`
  display: flex; 
  width: 100%;
  background: grey;  
`
const ZenPicture = styled.img`
  object-fit: contain;
  height: 50vw;
  @media(min-width: 1100px) {
    height: 550px; 
  }
`

const ZenPictureB = styled.img`
  object-fit: contain;
  width: 45vw;  
`

const ZenPictureC = styled.img`
  width: 100vw;
  height: auto; 
`

const AboutZenContainer = styled.div`
  background: rgba(119, 33, 46, .9);  
`

const AboutZenTextB = styled.p`
  font-family: 'Dosis', sans-serif; 
  font-size: 2.6vw; 
  font-weight: 200;
  color: white;
  text-align: right;
  margin-right: 3vw;
  margin-left: 3vw;
  line-height: 1.4;
  @media(min-width: 1100px) {
    font-size: 29px; 
  }
`

const AboutZenTextA = styled.p`
  font-family: 'Dosis', sans-serif; 
  font-size: 2.6vw; 
  font-weight: 200;
  color: white;
  text-align: left;
  margin-right: 3vw;
  margin-left: 3vw;
  line-height: 1.4;
  @media(min-width: 1100px) {
    font-size: 29px; 
  } 
`

const About = props => {
  return (
  <>
    <Header/>
    <AboutContainer>
      <TopContainer>
        <AboutTitle>What is Zen Skate Co?</AboutTitle>
          <ZenMotto>
            Letting the Mind Go . . . Letting the Body Flow
          </ZenMotto>
          <ZenTagLine>
            Zen Skate Co celebrates that moment of equilibrium 
          </ZenTagLine>
          <ZenTagLine>
            when the mind is freed to let the body create art through movement. 
          </ZenTagLine>
        <BlankDiv/>
      </TopContainer>
      <Container>
        <ImageContainer>
          <ZenPicture src={'https://zenskate.s3-us-west-2.amazonaws.com/zen_shirt_01.jpeg'}/>
        </ImageContainer>
        <AboutZenContainer>
          <AboutZenTextA>
            Zen Skate Co began in 2019 when a group of 5th grade friends fell in love with skateboarding. Their love for skateboarding united them. They were not professionals or experts. They hadn’t mastered the basic skateboarding tricks, but they were eager to learn and wanted to have fun. This is the essence of the Zen Skate Co. It isn’t about perfection or being an expert. Skateboarding is about having fun and continually pushing yourself to grow. It is about the willingness to fall, get back up and try again.
          </AboutZenTextA>
        </AboutZenContainer>
      </Container>
      <Container>
        <AboutZenContainer>
          <AboutZenTextB>The Zen Skate Co logo derives its inspiration from the Buddhist Ensō. Ensō is a Japanese word meaning “circular form.” In Buddhism it symbolizes enlightenment. The Ensō represents that moment when the mind is free to allow the body to create. The open Ensō in the Zen logo shows the incompleteness in movement and the beauty of imperfection.</AboutZenTextB>
        </AboutZenContainer>
        <ImageContainer2>
          <ZenPictureB src={logo}/>
        </ImageContainer2>
      </Container>
      <ImageContainer3>
        <ZenPictureC src={'https://zenskate.s3-us-west-2.amazonaws.com/zen_venice_03.jpg'}/>
      </ImageContainer3>
    </AboutContainer>
    <Footer/>
  </>
  )
}

export default About
