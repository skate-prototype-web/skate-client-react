import React, { Component } from 'react'
import { Router } from '@reach/router'
import SkateParkList from './SkateParkList'
import SkateParkPage from './SkateParkPage'


class SkateParks extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }
  render () {
    console.log ('hi from SkateParks')
    return (
      <>
        <Router>
          <SkateParkList path="/skateparks"/>
        </Router>
      </>
    )
  }
}

export default SkateParks