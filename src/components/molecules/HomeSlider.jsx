import React,{ useState} from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderContainer = styled.div `
  overflow: hidden;
  border: solid black;
  width: 80%;
`

const StyledSlider = styled(Slider)`
  display: flex;
  border: solid green; 
`

const ParkImage = styled.img`
  height: 10vw;
  width: 12vw;
  object-fit: cover;
  margin: auto;
  border-radius: 10px;
  border: solid rgb(119, 33, 46);
  
  &:hover {
    cursor: pointer; 
  }
`

const InnerImageContainer = styled.div `
  border: 2px solid red;
  width: 12.5vw;
  border-radius: 11px; 
  margin: auto;
  display: flex;
  align-items: center; 
  justify-content: center
`

const OuterImageContainer = styled.div`  
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid blue;  
`

const HomeSlider = props => {
  const { skateParks } = props

  const sliderSettings = {
    dots: false, 
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000, 
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: false, 
  }
  
  return (
    <SliderContainer> 
      <StyledSlider
        {...sliderSettings}
      >
        {skateParks.map((park, index) => (
        <OuterImageContainer>
          <InnerImageContainer index={index}>
            <ParkImage 
              src={park.images[0]}
              key={index}
            />  
          </InnerImageContainer>
        </OuterImageContainer>
        ))}
      </StyledSlider>
    </SliderContainer>
  )
}

export default HomeSlider