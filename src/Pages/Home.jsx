import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import Header from '../Components/organisms/Header'
import CentralImageDisplay from '../Components/molecules/CentralImageDisplay'

const Home = props => {

  return (
    <>
      <Header/>
      <CentralImageDisplay/>
    </>
  );
}

export default Home
