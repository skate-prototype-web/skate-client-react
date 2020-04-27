import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SlidesContainer = styled.div`
  border: solid blue; 
  height: 20vw;
  width: 35vw;
  object-fit: cover; 
`

const ParkImage = styled.img `
  width: 100%;
  height: 100%;
`

const ParkSlideShow = props => {
  const { skateParks } = props
  const [current, setCurrent] = useState(0)
  const { length } = skateParks
  
  const getNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    setTimeout(getNext, 3000)
    return function(){
      clearTimeout(getNext)
    }
  })

  if (!Array.isArray(skateParks) || length <= 0) {
    return null; 
  }
  console.log (skateParks[0].images[0], 'goagadf')
  return (
    <>
    {skateParks ? 
      <SlidesContainer>
        {skateParks.map((park, index) => (
          <ParkImage src={park.images[0]}/>
        ))}
      </SlidesContainer>
    : null}
    </>
  )
}

export default ParkSlideShow