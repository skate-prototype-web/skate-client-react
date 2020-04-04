import React from 'react'
import styled from 'styled-components';

const StyledImageContainer = styled.div`
  border: solid white;
  width: 20vw;
  height: 12vw;
  border-radius: 5px;
  margin-right: auto; 
  margin-left: auto;
  margin-bottom: 2.5vw;
  background-image: url(${props => props.featureImage});
  background-size: cover; 
`

const StyledParkContainer = styled.div`
  border-radius: 3px;
  background: rgba(179,0,0,.9);
  width: 90%;
  height: auto;
  margin-bottom: 2vw;
  z-index: 1;
  border: .25vw solid #ffd700;     
`

const StyledParkName = styled.h3`
  font-family: 'Dosis', sans-serif; 
  font-weight: 200; 
  color: white; 
  font-size: 1.5vw; 
  text-align: left;
  margin-left: 1vw; 
`

const SkatePark = props => {
  const {name, featureImage, address, phone, website} = props;
  return (
    <StyledParkContainer>
      <StyledParkName>{name}</StyledParkName>
      <StyledImageContainer featureImage={featureImage}/>
    </StyledParkContainer>
  )
}

export default SkatePark