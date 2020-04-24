import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import Header from '../Components/organisms/Header'
import CentralImageDisplay from '../Components/molecules/CentralImageDisplay'
import Footer from '../Components/organisms/Footer'

const HomeContainer = styled.div`
  padding-bottom: 10vw;
  min-height: 100%;  
`


const Home = props => {

  return (
    <>
      <Header/>
      <HomeContainer>
        <CentralImageDisplay/>
      </HomeContainer>
      <Footer/>
    </>
  );
}

export default Home
