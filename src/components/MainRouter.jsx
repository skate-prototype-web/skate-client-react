import React from 'react'
import { Router } from '@reach/router'
import Home from './Home'
import About from './About'
import SkateParkList from './SkateParkList'

const MainRouter = () => {
  return (
    <>
      <Router>
        <SkateParkList path="/skateparks"/>
        <About path="/about"/>
        <Home path="/"/>
      </Router>
    </>
  )
}

export default MainRouter