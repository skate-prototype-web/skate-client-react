import React from 'react'
import styled from 'styled-components';
import { Link } from '@reach/router'

const StyledParkContainer = styled.div`
  width: 91%;
  height: auto;
  margin-bottom: 2vw;  
`

const StyledImageContainer = styled.div`
  position: relative;
  border: .10vw solid rgba(119, 33, 46, .8);
  width: 100%;
  height: 24vw;
  border-radius: 1px;
  margin-right: auto; 
  margin-left: auto;
  background-image: url(${props => props.featureImage});
  background-size: cover;
  
  &:hover {
    border: .20vw solid #ffd700;
    cursor: pointer; 
  }
`

const StyledImageOverlay = styled.div` 
  z-index: 1;
  height: 100%;  
  &:hover {
    background: rgba(255, 255, 255, .20) 
  }
`

const StyledNameContainer = styled.div`
  position: absolute;
  bottom: 0; 
  width: 100%;
  background: rgb(119, 33, 46, 0.85);
`

const StyledParkName = styled.h3`
  font-family: 'Dosis', sans-serif; 
  font-weight: 400; 
  color: white; 
  font-size: 2vw; 
  text-align: left;
  z-index: 2;
  margin-top: .25vw;
  margin-bottom: .25vw;
  margin-left: .25vw;
  
  @media(min-width: 1100px) {
    font-size: 22px;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 3px;
  }
`

const SkatePark = props => {
  const {name, featureImage, address, phone, website, id} = props;
  return (
    <StyledParkContainer>
      <Link to={`/skateparks/${id}`}>
        <StyledImageContainer featureImage={featureImage}>
          <StyledImageOverlay>
            <StyledNameContainer>
              <StyledParkName>{name}</StyledParkName>
            </StyledNameContainer>
          </StyledImageOverlay>
        </StyledImageContainer>
      </Link>
    </StyledParkContainer>
  )
}

export default SkatePark