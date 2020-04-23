import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import Header from '../Components/organisms/Header'
import CentralImageDisplay from '../Components/molecules/CentralImageDisplay'
import Footer from '../Components/organisms/Footer'

const Home = props => {

  return (
    <>
      <Header/>
      <CentralImageDisplay/>
      <Footer/>
    </>
  );
}

export default Home
