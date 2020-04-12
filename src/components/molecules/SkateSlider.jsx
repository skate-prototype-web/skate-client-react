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
  )
}

export default SkateSlider