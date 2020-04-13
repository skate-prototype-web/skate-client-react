import React, { Component } from 'react'
import axios from 'axios'
import Header from '../Components/organisms/Header'
import SkateSlider from '../Components/molecules/SkateSlider'
import styled from 'styled-components'
import regionNames from '../regionNames'


const ParkName = styled.h1 `
  font-weight: 600;
  color: rgb(119, 33, 46); 
  font-family: 'Dosis', sans-serif;
  font-size: 4vw;
  margin-left: 3vw;  
`

const DetailTitle = styled.h4 `
  font-weight: 600;
  font-family: 'Dosis', sans-serif;
  font-size: 2vw; 
  margin-left: 1vw; 
  margin-top: 1vw; 
  margin-bottom: .25vw; 
  color: rgb(119, 33, 46); 
`

const Details = styled.p`
  font-weight: 300; 
  font-family: 'Dosis', sans-serif; 
  font-size: 2; 
  margin-left: 1.5vw; 
  margin-top: .25vw; 
  margin-bottom: .25vw; 
  color: black; 
`

const WebLink = styled.a`
  display: inline-block;
  font-family: 'Dosis', sans-serif;
  margin-left: 1.25vw; 
  margin-top: 1.5vw; 
  margin-bottom: 1vw; 
  color: black;
  font-weight: 500; 
  font-size: 1.75vw;

  &:hover{
    pointer: cursor; 
    color: rgb(119, 33, 46);
    font-weight: 700; 
  }
`

const MainContainer = styled.div`
  border: solid green;
  width: 100%; 
  height: auto;
  display: grid;
  grid-template-columns: 8fr 4fr;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 1fr; 
  }
`

const ImagesContainer = styled.div`
  display: grid;
  grid-template-rows: 9fr 3fr;
  border: solid red; 
`
const MainImageContainer = styled.div`
  border: solid blue; 
`

const MainParkImage = styled.img`
  border: solid black; 
  width: 70vw;
  height: 45vw;
  object-fit: contain; 
`

const SliderContainer = styled.div`
  width: 70vw;
  height: 25vw; 
  border: solid purple;
`

const DetailsContainer = styled.div`
  border: solid orange; 
`

class SkateParkPage extends Component {
  constructor (props) {
    super (props)
    this.state = {
      id: props.id,
      skateParks: props.skateParksRaw
    }
  }

  componentDidMount(){
    console.log (this.state)
    const { skateParks, id } = this.state
    let featuredPark
    if (skateParks === undefined) {
      axios 
      .get(`http://localhost:9000/skateparks/api/parks/${id}`)
      .then(({data}) => {
        console.log (data)
        this.setState({featuredPark: data, id, mainImage: data.images[0]})
      })
      .catch (error => console.log (`This is the error: ${error}`))
    } else {
      featuredPark = skateParks.find(park => park._id === id)
      this.setState({featuredPark, id, mainImage: featuredPark.images[0]})
    }
  }
  
  render () {
    console.log (this.state, 'state in park page')
    const { featuredPark, id, mainImage } = this.state
    return (
      <>
        <Header/>
          {featuredPark !== undefined && (
            <ParkName>{featuredPark.name}</ParkName>
          )}
        {featuredPark !== undefined && (
          <MainContainer>
            <ImagesContainer>
              <MainImageContainer>
                <MainParkImage src={featuredPark.images[0]}/>
              </MainImageContainer>
              <SkateSlider parkImages={featuredPark.images}/>
              <SliderContainer/>
            </ImagesContainer>
            <DetailsContainer>
              <DetailTitle>Region</DetailTitle>
              <Details>{regionNames[featuredPark.region]}</Details>
              <DetailTitle>Address</DetailTitle>
              <Details>{featuredPark.address.street}</Details>
              <Details>{featuredPark.address.city}, {featuredPark.address.state} {featuredPark.address.zip}</Details>
              <DetailTitle>Phone</DetailTitle>
              <Details>{featuredPark.phone}</Details>
              <WebLink href={featuredPark.website}>website</WebLink>
            </DetailsContainer>
          </MainContainer>
        )}
      </>
    )
  }
}

export default SkateParkPage

