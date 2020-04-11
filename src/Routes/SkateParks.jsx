import React, { Component } from 'react'
import { Router } from '@reach/router'
import SkateParkList from '../Pages/SkateParkList'
import SkateParkPage from '../Pages/SkateParkPage'

const SkateParks = props => {
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