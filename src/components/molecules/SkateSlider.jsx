import React,{ useState} from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
  background: ${props => (props.mainIndex === props.index) ? '#ffd700' : 'white'};
  border: 2px solid ${props => (props.mainIndex === props.index) ? '#ffd700' : 'white'};
  width: 12.5vw;
  border-radius: 11px; 
  margin: auto;
  display: flex; 
  align-items: center; 
  justify-content: center; 
`
const OuterImageContainer = styled.div`
  display: flex;   
  align-items: center;
  justify-content: center;
`

const SliderContainer = styled.div `
  width: 70vw;
`

const RightArrowContainer = styled.div` 
  font-size: 2vw;
  display: flex; 
  align-items: center;
  justify-content: flex-start;   
`

const LeftArrowContainer = styled.div`
  font-size: 2vw;
  justify-content: flex-end; 
  align-items: center; 
  display: flex;
`

const SliderRightArrow = props => {
  const { onClick, displayRight } = props
  return (
    <RightArrowContainer>
      {displayRight === true && (
      <FontAwesomeIcon
        icon={faChevronRight} 
        size="lg" 
        color="rgb(119, 33, 46)"
        onClick={onClick} 
      />
      )}
    </RightArrowContainer>
  )
}

const SliderLeftArrow = props => {
  console.log (props, 'props in left')
  const { onClick, displayLeft } = props
  return (
    <LeftArrowContainer>
      {displayLeft === true && (
        <FontAwesomeIcon
        icon={faChevronLeft} 
        size="lg" 
        color="rgb(119, 33, 46)"
        onClick={onClick} 
        />
      )}
    </LeftArrowContainer>
  )
}

const SkateSlider = props => {
  const { parkImages, changeImage, mainIndex } = props
  console.log (mainIndex, 'mainIndex')
  const [displayRight, setDisplayRight] = useState(true)
  const [displayLeft, setDisplayLeft] = useState(false)

  const setArrowDisplay = index => {
    const getLength = parkImages.length
    setDisplayLeft(index !== 0)
    setDisplayRight(getLength - index > 3)
  }

  const sliderSettings = {
    dots: false, 
    infinite: false, 
    speed: 600,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SliderRightArrow displayRight={displayRight} />,
    prevArrow: <SliderLeftArrow displayLeft={displayLeft} />,
    afterChange: index => setArrowDisplay(index)
  }

  return (
    <SliderContainer>
    <Slider style={{display: "grid", gridTemplateColumns: ".5fr 11fr .5fr"}}
    {...sliderSettings}
    >
      {parkImages.map((image, index) => (
      <OuterImageContainer>
        <InnerImageContainer mainIndex={mainIndex} index={index}>
          <ParkImage 
            src={image}
            onClick={() => changeImage(index)}
            key={index}
            mainIndex={mainIndex}
            index={index}
          />  
        </InnerImageContainer>
      </OuterImageContainer>
      ))}
    </Slider>
    </SliderContainer>
  )
}

export default SkateSlider