import React from 'react'
import styled from 'styled-components'
import logo from '../../images/enso_cursive_darkred.png'
import { Link } from '@reach/router'

const MainAHPContainer = styled.div`
  width: 100%; 
  height: 45vw;
  max-width: 1100px;
  background: #F8F8FF;
  display: flex;
  flex-direction: row;
  border: solid blue;
  @media(min-width: 1100px) {
    height: 500px;  
  }

`

const ImageContainer = styled.div`

`

const AboutHomeImageContainer = styled.div`
  border: 1.5px solid #DCDCDC; 
  width: 50vw; 
  height: 35vw;
  margin-left: 3vw;
  display: flex; 
  align-items: center;
  justify-content: center;
  @media(min-width: 1100px) {
    width: 520px; 
    height; 450px; 
  } 
`

const AboutImage = styled.img`
  width: 96%;
  height: 94%;
  padding: 1vw;
  object-fit: cover;
`

const AboutTitle = styled.h2`
  color: rgb(119, 33, 46);; 
  font-family: 'Dosis', sans-serif;
  font-weight: 200; 
  font-size: 3vw;
  margin-left: 2vw;
  margin-top: 2vw; 
  margin-bottom: 2vw;  
  text-align: left; 
`

const AboutHomeTextContainer = styled.div`
  width: 23vw;  
`
const AboutHomeText = styled.p`
  font-family: 'Dosis', sans-serif; 
  font-weight: 200;
  font-size: 2.25vw; 
  color: rgb(119, 33, 46);
  margin-left: 2vw; 
  margin-right: 1vw;
  margin-top: 1vw; 
`

const AboutTextMainContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;  
`

const TopTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 7vw; 
`

const BottomLinkContainer = styled.div`
  text-align: center; 
`


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;    
`

const ZenLogo = styled.img`
  width: 15vw; 
  height: 15vw;  
`

const StyledLink = styled(Link)`
  text-decoration: none; 
  color: rgb(119, 33, 46);
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
  font-size: 3vw;
  text  -align: center;
  
  &:hover {
    color: rgba(119, 33, 46, .6);
  }
`

const AboutHomePage = props => {
  return (
    <>
      <MainAHPContainer>
        <ImageContainer>
          <AboutTitle>About Zen SK8</AboutTitle>
          <AboutHomeImageContainer>
            <AboutImage src={'https://zenskate.s3-us-west-2.amazonaws.com/zen_venice_04.jpg'}/>
          </AboutHomeImageContainer>
        </ImageContainer>
        <AboutTextMainContainer>
          <TopTextContainer>
            <AboutHomeTextContainer>  
              <AboutHomeText>Zen Skate Co embraces the beauty of imperfection. We are not experts or pros, but we know growth is a process. Everytime we fall, we get back up and try again.</AboutHomeText>
            </AboutHomeTextContainer>
            <LogoContainer>
              <ZenLogo src={logo}/>
            </LogoContainer>
          </TopTextContainer>
          <BottomLinkContainer>
            <StyledLink to="/about">Read more about our story . . .</StyledLink>
          </BottomLinkContainer>
        </AboutTextMainContainer>
      </MainAHPContainer>
    </>
  )
}

export default AboutHomePage