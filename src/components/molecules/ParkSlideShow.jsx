  import React, { useState, useEffect } from 'react'
  import styled from 'styled-components'

  const SlidesContainer = styled.div`
    object-fit: cover; 
    display: flex;
    width: 45vw; 
    height: 30vw; 
    background: white; 
    justify-content: center; 
    align-items: center;
    border: solid 1px #D3D3D3;
    @media(min-width: 1100px) {
      width: 500px;
      height: 330px; 
    }     
  `

  const ParkImage = styled.img `
    position: absolute; 
    width: 100%;
    height: 100%;
  `
  const OuterContainer = styled.div`
    display: flex; 
    flex-direction: column;
  `
  const ParkName = styled.h3 `
    text-align: center; 
    font-family: 'Dosis', sans-serif; 
    margin-top: 1vw;
    margin-bottom: 1vw; 
    font-size: 2.5vw; 
    font-weight: 300;
    @media(min-width: 1100px) {
      font-size: 30px;
      margin-top: 12px;
      margin-bottom: 12px;
    } 
  `

  const ParkSlide = styled.div`
    position: absolute;
    width: 42vw;
    height: 27vw;
    display: flex;
    transition: .9s ease;
    opacity: ${props => props.current === props.index ? '1' : '0'};
    transition-duration: ${props => props.current === props.index ? '.9s' : '0'};
    @media(min-width: 1100px) {
      width: 470px;
      height: 300px; 
    } 
  `

  const ParkSlideShow = props => {
    const { skateParks } = props
    const [current, setCurrent] = useState(0)
    const { length } = skateParks
    
    const getNext = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }

    useEffect(() => {
      setTimeout(getNext, 5000)
      return function() {
        clearTimeout(getNext)
      }
    })

    if (!Array.isArray(skateParks) || length <= 0) {
      return null; 
    }
    return (
      <>
      <OuterContainer>
        {skateParks ? 
          <SlidesContainer>
            {skateParks.map((park, index) => (
              <ParkSlide index={index} current={current}>
                <ParkImage src={park.images[0]}/>
              </ParkSlide>
            ))}
          </SlidesContainer>
        : null}
        <ParkName>{skateParks[current].name}</ParkName>
      </OuterContainer>
      </>
    )
  }

  export default ParkSlideShow