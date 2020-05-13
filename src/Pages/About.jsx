import React from 'react'
import styled from 'styled-components';
import Header from '../Components/organisms/Header'
import Footer from '../Components/organisms/Footer'
import logo from '../../src/images/enso_cursive.png'
import ResponsiveMainContainer from '../Components/atoms/ResponsiveMainContainer' 

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
  background: ${props => props.background};
  display: flex; 
  justify-content: center;
  align-items: center; 
  @media(min-width: 1100px) {
    height: 550px; 
  }
`

const ImageContainer3 = styled.div`
  display: flex; 
  width: 100%;
  background: grey;
  max-width: 1100px;
  image-fit: contain;   
`

const ZenPicture = styled.img`
  object-fit: contain;
  height: ${props => props.height};
  @media(min-width: 1100px) {
    height: ${props => props.maxHeight}; 
  }
`

const ZenPictureC = styled.img`
  width: 100%;
  height: auto; 
`

const AboutZenContainer = styled.div`
  background: rgba(119, 33, 46, .9);  
`

const AboutZenText = styled.p`
  font-family: 'Dosis', sans-serif; 
  font-size: 2.6vw; 
  font-weight: 200;
  color: white;
  text-align: ${props => props.align};
  margin-right: 3vw;
  margin-left: 3vw;
  line-height: 1.4;
  @media(min-width: 1100px) {
    font-size: 29px;
    margin-left: 30px;
    margin-right: 30px;  
  }
`

const About = props => {
  return (
  <>
    <Header/>
    <ResponsiveMainContainer>
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
        <ImageContainer background={'rgba(119, 33, 46, .8)'}>
          <ZenPicture  height={'50vw'} maxHeight={'550px'} src={'https://zenskate.s3-us-west-2.amazonaws.com/zen_shirt_01.jpeg'}/>
        </ImageContainer>
        <AboutZenContainer>
          <AboutZenText align={'left'}>
            Zen Skate Co began in 2019 when a group of 5th grade friends fell in love with skateboarding. Their love for skateboarding united them. They were not professionals or experts. They hadn’t mastered the basic skateboarding tricks, but they were eager to learn and wanted to have fun. This is the essence of the Zen Skate Co. It isn’t about perfection or being an expert. Skateboarding is about having fun and continually pushing yourself to grow. It is about the willingness to fall, get back up and try again.
          </AboutZenText>
        </AboutZenContainer>
      </Container>
      <Container>
        <AboutZenContainer>
          <AboutZenText align={'right'}>
            The Zen Skate Co logo derives its inspiration from the Buddhist Ensō. Ensō is a Japanese word meaning “circular form.” In Buddhism it symbolizes enlightenment. The Ensō represents that moment when the mind is free to allow the body to create. The open Ensō in the Zen logo shows the incompleteness in movement and the beauty of imperfection.
          </AboutZenText>
        </AboutZenContainer>
        <ImageContainer background={'white'}>
          <ZenPicture height={'45vw'} maxHeight={'510px'} src={logo}/>
        </ImageContainer>
      </Container>
      <ImageContainer3>
        <ZenPictureC src={'https://zenskate.s3-us-west-2.amazonaws.com/zen_venice_03.jpg'}/>
      </ImageContainer3>
    </ResponsiveMainContainer>
    <Footer/>
  </>
  )
}

export default About
