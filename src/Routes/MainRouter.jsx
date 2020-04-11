import React, { Component } from 'react'
import { Router } from '@reach/router'
import axios from 'axios'
import Home from '../Pages/Home'
import About from '../Pages/About'
import SkateParkList from '../Pages/SkateParkList'
import SkateParkPage from '../Pages/SkateParkPage'
import SkateParks from './SkateParks'
import regionNames from '../regionNames'

class MainRouter extends Component {
  constructor () {
    super ()
    this.state = {
      loaded: false,
    }
  }

 componentDidMount () {
    axios
    .get('http://localhost:9000/skateparks/api/parks')
    .then(({data}) => {
      let regions = {}
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
    const { skateParksMapped, skateParksRaw } = this.state 
    return (
      <>
        <Router>
          <Home path="/"/>
          <About path="/about"/>
          <SkateParks path="skateparks" skateParks={skateParksMapped} skateParksRaw={skateParksRaw}>
            <SkateParkPage path="/:id" skateParksRaw={skateParksRaw}/>
          </SkateParks>
        </Router>
      </>
    )
  }
}

export default MainRouter