import React,{ useState} from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderContainer = styled.div `
  overflow: hidden;
`

const StyledSlider = styled(Slider)`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
`

const InnerStyledSlider = styled.div`
  display: flex; 
  flex-direction: column;
`

const StyledSliderAlt = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  height: 45vw;  
`

const ArrowContainer = styled.div`
  font-size: 2vw;
  justify-content: center;
  display: flex;
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
  background: ${props => (props.mainIndex === props.index) ? '#ffd700' : 'white'};
  border: 2px solid ${props => (props.mainIndex === props.index) ? '#ffd700' : 'white'};
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
`

const InnerImageContainerAlt = styled.div `
  background: ${props => (props.mainIndex === props.index) ? '#ffd700' : 'white'};
  border: 2px solid ${props => (props.mainIndex === props.index) ? '#ffd700' : 'white'};
  width: 12.5vw;
  border-radius: 11px; 
  margin: auto;
  display: flex;
  align-items: flex-start; 
  justify-content: center
`

const OuterImageContainerAlt = styled.div`  
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1vw; 
  margin-bottom: 1vw;  
`

const SliderDownArrow = props => {
  const { onClick, displayDown } = props
  return (
    <ArrowContainer>
      {displayDown === true && (
      <FontAwesomeIcon
        icon={faChevronDown} 
        size="lg" 
        color="rgb(119, 33, 46)"
        onClick={onClick} 
      />
      )}
    </ArrowContainer>
  )
}

const SliderUpArrow = props => {
  const { onClick, displayUp } = props
  return (
    <ArrowContainer>
      {displayUp === true && (
        <FontAwesomeIcon
        icon={faChevronUp} 
        size="lg" 
        color="rgb(119, 33, 46)"
        onClick={onClick} 
        />
      )}
    </ArrowContainer>
  )
}

const SkateSlider = props => {
  const { parkImages, changeImage, mainIndex } = props
  const displayArrows = (parkImages.length > 3) ? true : false
  const [displayDown, setDisplayDown] = useState(displayArrows)
  const [displayUp, setDisplayUp] = useState(false)

  const setArrowDisplay = index => {
    const getLength = parkImages.length
    setDisplayUp(index !== 0)
    setDisplayDown(getLength - index > 3)
  }

  const sliderSettings = {
    dots: false, 
    infinite: false, 
    speed: 600,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SliderDownArrow displayDown={displayDown} />,
    prevArrow: <SliderUpArrow displayUp={displayUp} />,
    vertical: true, 
    afterChange: index => setArrowDisplay(index)
  }
  
  return (
    <SliderContainer>
    {displayArrows ? 
      (<StyledSlider
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
      </StyledSlider>)
    : 
      (<StyledSliderAlt>
        <SliderUpArrow/>
        <InnerStyledSlider>
          {parkImages.map((image, index) =>
          <OuterImageContainerAlt>
            <InnerImageContainerAlt mainIndex={mainIndex} index={index}>
              <ParkImage 
                src={image}
                onClick={() => changeImage(index)}
                key={index}
                mainIndex={mainIndex}
                index={index}
              />  
            </InnerImageContainerAlt>
          </OuterImageContainerAlt>
          )}
        </InnerStyledSlider>
        <SliderDownArrow/>
      </StyledSliderAlt>)}
    </SliderContainer>
  )
}

export default SkateSlider