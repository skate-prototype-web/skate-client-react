import React, {Component} from 'react'
import axios from 'axios'
import Header from '../Components/organisms/Header'
import styled from 'styled-components'
import AreaParks from '../Components/parks/AreaParks'

const StyledHomeTitle = styled.h1`
  font-weight: 400;
  color: rgb(119, 33, 46); 
  font-family: 'Dosis', sans-serif;
  margin-left: 3vw; 
  font-size: 3vw;
  margin-top: 2vw; 
  margin-bottom: 0;   
`

const StyledParksContainer = styled.div`
  background: rgba(255, 255, 255, .9);  
  display: flex; 
  flex-wrap: wrap;
  flex-direction: column;
  width: 85%; 
  margin: auto;
  justify-content: center; 
  text-align: center; 
`

class SkateParkList extends Component {
  constructor () {
    super ()
    this.state = {
    }
  }

  componentDidMount () {
    console.log ('hello from inside component did mount skateparklist')
    axios
    .get('http://localhost:9000/skateparks/api/getparks')
    .then(({data}) => {
      let regions = {}
      const regionNames = {eastLA: 'East Los Angeles', metro: 'Metro Area', valley: 'The Valley', southLA: 'South Los Angeles', westLA: 'West Los Angeles', southBay: 'South Bay', undefined: 'Unassigned'}
      data.map(park => {
        if (!regions[park.region]) {
          regions[park.region] = {name: regionNames[park.region], parks:[park]}
        } else {
          regions[park.region].parks.push(park)
        }
      })
      let regionsInState = []
      for (let key in regions) {
        regionsInState.push(regions[key])
      }
      this.setState({skateParks: regionsInState})
    })
    .catch (error => console.log('error', error))
  }

render() {
  const { skateParks} = this.state
    console.log(this.state, 'this state')
    return (
      <>
        <Header/>
        <StyledHomeTitle>Los Angeles Area Parks</StyledHomeTitle>
        {skateParks !== undefined && (
          <StyledParksContainer>
            {skateParks.map((region, index) => {
                return (
                  <AreaParks region={region.name} parks={region.parks} key={index}/>
                )
            })}
          </StyledParksContainer>
        )}
      </>
    );
  }
}

export default SkateParkList