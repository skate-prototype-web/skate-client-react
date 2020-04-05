import React from 'react'
import styled from 'styled-components';

const StyledParkContainer = styled.div`
  width: 91%;
  height: auto;
  margin-bottom: 2vw;
  z-index: 1;  
`

const StyledImageContainer = styled.div`
  position: relative;
  border: .10vw solid rgba(179,0,0,.7);
  width: 100%;
  height: 17vw;
  border-radius: 1px;
  margin-right: auto; 
  margin-left: auto;
  background-image: url(${props => props.featureImage});
  background-size: cover; 
`

const StyledNameContainer = styled.div`
  position: absolute;
  bottom: 0; 
  width: 100%;
  background: rgba(179,0,0,.9);
`

const StyledParkName = styled.h3`
  font-family: 'Dosis', sans-serif; 
  font-weight: 200; 
  color: #ffd700; 
  font-size: 1.75vw; 
  text-align: left;
  z-index: 2;
  margin-top: .25vw;
  margin-bottom: .25vw;
  margin-left: .25vw;  
`

const SkatePark = props => {
  const {name, featureImage, address, phone, website} = props;
  return (
    <StyledParkContainer>
      <StyledImageContainer featureImage={featureImage}>
        <StyledNameContainer>
          <StyledParkName>{name}</StyledParkName>
        </StyledNameContainer>
      </StyledImageContainer>
    </StyledParkContainer>
  )
}

export default SkatePark