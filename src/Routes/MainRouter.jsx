import React, { Component } from 'react'
import { Router } from '@reach/router'
import axios from 'axios'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Merch from '../Pages/Merch'
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
    .get('http://54.245.129.246:9000/skateparks/api/parks')
    .then(({data}) => {
      let regions = {}
      data.map(park => {
        if (!regions[park.region]) {
          regions[park.region] = {name: regionNames[park.region], parks:[park]}
        } else {
          regions[park.region].parks.push(park)
        }
      })
      let raw = data.filter(park => parseFloat(park.geolat) > 1)
      let regionsInState = []
      for (let key in regions) {
        regionsInState.push(regions[key])
      }
      this.setState({skateParksMapped: regionsInState, skateParksRaw: raw, loaded: true})
    })
    .catch (error => console.log('error', error))
  }


  render () {
    const { skateParksMapped, skateParksRaw } = this.state 
    return (
      <>
        <Router>
          <Home path="/" skateParks={skateParksRaw}/>
          <About path="/about"/>
          <Merch path="/merch"/>
          <SkateParks path="skateparks" skateParks={skateParksMapped} skateParksRaw={skateParksRaw}>
            <SkateParkPage path="/:id" skateParksRaw={skateParksRaw}/>
          </SkateParks>
        </Router>
      </>
    )
  }
}

export default MainRouter