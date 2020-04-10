import React, { Component } from 'react'
import { Router } from '@reach/router'
import SkateParkList from './SkateParkList'
import SkateParkPage from './SkateParkPage'

const SkateParks = props => {
  console.log (props, 'this is new props')
  const { skateParks, skateParksRaw } = props
  return (
    <>
      <Router>
        <SkateParkList path="/" skateParks={skateParks} />
        <SkateParkPage path=":id" skateParksRaw={skateParksRaw}/>
      </Router>
    </>
  )
}

export default SkateParks