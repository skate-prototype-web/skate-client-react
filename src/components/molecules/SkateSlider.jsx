import React from 'react'
import styled from  'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ParkImage = styled.img`
  height: 15vw;
  width: 15vw;
  object-fit: contain; 
`

const ParkImageContainer = styled.div`
  border: solid blue; 
`

const TestDiv = styled.div`

`

const TestHeading = styled.h3`
  background: #5f9ea0;
  color: #fff;
  font-size: 36px;
  line-height: 100px;
  margin: 10px;
  padding: 2%;
  position: relative;
  text-align: center;
`

const TestContainer = styled.div `
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 400px;
`

const SkateSlider = props => {
  const sliderSettings = {
    dots: false, 
    infinite: false, 
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true
  }
  let slider
  const { parkImages } = props
  return (
    <TestContainer>
      <Slider 
      ref={c => {
        slider = c
      }}
      {...sliderSettings}
      >
        {parkImages.map(image => (
          <ParkImageContainer>
            <ParkImage src={image}/>
          </ParkImageContainer>
        ))}
      </Slider>
    </TestContainer>
  )
}

export default SkateSlider