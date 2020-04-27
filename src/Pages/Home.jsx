import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import Header from '../Components/organisms/Header'
import CentralImageDisplay from '../Components/molecules/CentralImageDisplay'
import Footer from '../Components/organisms/Footer'
import AboutHomePage from '../Components/molecules/AboutHomePage'
import ParksHomePage from '../Components/molecules/ParksHomePage'

const HomeContainer = styled.div`
  min-height: 100%;  
`

const Home = props => {
  const { skateParks } = props
  return (
    <>
      <Header/>
      <HomeContainer>
        <CentralImageDisplay/>
        <AboutHomePage/>
        <ParksHomePage skateParks={skateParks}/>
      </HomeContainer>
      <Footer/>
    </>
  );
}

export default Home
