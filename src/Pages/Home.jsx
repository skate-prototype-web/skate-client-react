import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import Header from '../Components/organisms/Header'
import CentralImageDisplay from '../Components/molecules/CentralImageDisplay'
import Footer from '../Components/organisms/Footer'
import AboutHomePage from '../Components/molecules/AboutHomePage'
import ParksHomePage from '../Components/molecules/ParksHomePage'

const HomeContainer = styled.div`
  @media (min-width: 900px) { 
  }
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
