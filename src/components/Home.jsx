import React, {Component} from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components'
import ensoPlainWhite from '../images/enso_plain_white.png'
import Header from './Header'

const rotate = keyframes `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledImageContainer = styled.div` 
  display: flex; 
  margin: 0;
  width: 100%; 
  height: auto;  
  align-items: center; 
  justify-content: center;
  background: linear-gradient(80deg, rgba(240,40,60, .7), rgba(255,0,0,0) 70%),
  linear-gradient(70deg, rgba(30,40,70, .5), rgba(0,0,255,0) 60%);
  z-index: 1;  
`

const StyledHomeImage = styled.img`
  object-fit: contain;
  position: relative; 
  width: 100%;
  height: auto;
  z-index: -1;     
`

const StyledEnsoWhite = styled.img `
  z-index: 5; 
  width: 42vw;
  position: absolute;
  animation: ${rotate} 4s linear infinite; 
`

const StyledText = styled.div`
  font-size: 3vw; 
  font-family: 'Gotu', sans-serif;
  color: white;
  text-align: center; 
`
const StyledTextContainerLeft = styled.div `
  z-index: 5;
  position: absolute;
  left: 1vw;
  width: 33%; 
  heigth: auto;
  align-self: start;
  padding-top: 1vw; 
  vertical-align: top;       
`

const StyledTextContainerRight = styled.div `
  z-index: 5;
  position: absolute;
  right: 1vw;
  width: 33%; 
  heigth: auto;
  align-self: flex-end;
  padding-bottom: 1vw;  
  vertical-align: bottom;       
`

class Home extends Component {
  constructor () {
    super ()
    this.state = {
    }
  }

  componentDidMount () {
  }

render() {
    return (
      <>
        <Header/>
        <StyledImageContainer>
          <StyledTextContainerLeft>
            <StyledText>Letting the Mind Go</StyledText>
          </StyledTextContainerLeft>
          <StyledEnsoWhite src={ensoPlainWhite}/>
          <StyledHomeImage src='https://skateparks.s3-us-west-2.amazonaws.com/skate_home_image.jpg'/>
          <StyledTextContainerRight>
            <StyledText>Letting the Body Flow</StyledText>
          </StyledTextContainerRight>
        </StyledImageContainer>
      </>
    );
  }
}

export default Home
