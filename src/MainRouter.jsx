import React, { Component } from 'react'
import { Router } from '@reach/router'
import axios from 'axios'
import Home from './Pages/Home'
import About from './Pages/About'
import SkateParkList from './Pages/SkateParkList'
import SkateParkPage from './Pages/SkateParkPage'
import SkateParks from './Pages/SkateParks'

class MainRouter extends Component {
  constructor () {
    super ()
    this.state = {
      loaded: false,
    }
  }

 componentDidMount () {
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
      this.setState({skateParksMapped: regionsInState, skateParksRaw: data, loaded: true})
    })
    .catch (error => console.log('error', error))
  }


  render () {
    console.log (this.state)
    const { skateParksMapped, skateParksRaw } = this.state 
    return (
      <>
        <Router>
          <Home path="/"/>
          <About path="/about"/>
          <SkateParks path="skateparks" skateParks={skateParksMapped} skateParksRaw={skateParksRaw}>
            <SkateParkPage path="/:id"/>
          </SkateParks>
        </Router>
      </>
    )
  }
}

export default MainRouter