import React from 'react'
import { Router } from '@reach/router'
import Home from './Pages/Home'
import About from './Pages/About'
import SkateParkList from './Pages/SkateParkList'

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