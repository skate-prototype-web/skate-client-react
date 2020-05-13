import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import Header from '../Components/organisms/Header'
import CentralImageDisplay from '../Components/molecules/CentralImageDisplay'
import Footer from '../Components/organisms/Footer'
import AboutHomePage from '../Components/molecules/AboutHomePage'
import ParksHomePage from '../Components/molecules/ParksHomePage'
import ResponsiveMainContainer from '../Components/atoms/ResponsiveMainContainer'

const Home = props => {
  const { skateParks } = props
  return (
    <>
      <Header/>
      <ResponsiveMainContainer>
        <CentralImageDisplay/>
        <AboutHomePage/>
        <ParksHomePage skateParks={skateParks}/>
      </ResponsiveMainContainer>
      <Footer/>
    </>
  );
}

export default Home
