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
  color: #ffd700; 
`

const Details = styled.p`
  font-weight: 300; 
  font-family: 'Dosis', sans-serif; 
  font-size: 2vw; 
  margin-left: 1.5vw; 
  margin-top: .25vw; 
  margin-bottom: .25vw; 
  color: white; 
`

const WebLink = styled.a`
  display: inline-block;
  font-family: 'Dosis', sans-serif;
  margin-left: 1.25vw; 
  margin-top: 1.5vw; 
  margin-bottom: 1vw; 
  color: white;
  font-weight: 500; 
  font-size: 1.75vw;

  &:hover{
    cursor: pointer; 
    color: rgb(119, 33, 46);
    font-weight: 700; 
  }
`

const MainContainer = styled.div`
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
  grid-template-rows: 7fr 5 fr;
  justify-content: center; 
`

const MainImageContainer = styled.div`

`

const MainParkImage = styled.img` 
  width: 70vw;
  height: 45vw;
  object-fit: contain; 
`

const OuterSliderContainer = styled.div`
  width: 100%;
  height: 15vw; 
  display: flex; 
  justify-content: center;
  align-items: center;  
`

const DetailsContainer = styled.div`
  background: rgba(119, 33, 46, .7);
  display: flex; 
  flex-direction: column;
  
  @media (max-width: 900px) {
    flex-direction: row;  
  }
  
`

class SkateParkPage extends Component {
  constructor (props) {
    super (props)
    this.state = {
      id: props.id,
      skateParks: props.skateParksRaw
    }
  }

  componentDidMount = () => {
    const { skateParks, id } = this.state
    let featuredPark
    if (skateParks === undefined) {
      axios 
      .get(`http://localhost:9000/skateparks/api/parks/${id}`)
      .then(({data}) => {
        this.setState({featuredPark: data,
                      id,
                      mainImage: data.images[0],
                      images: data.images,
                      address: data.address, 
                      reviews: data.reviews, 
                      region: data.region, 
                      phone: data.phone, 
                      rating: data.rating, 
                      latitude: data.latitude, 
                      longitude: data.longitude,
                      website: data.website,
                      mainIndex: 0,
                    })
      })
      .catch (error => console.log (`This is the error: ${error}`))
    } else {
      featuredPark = skateParks.find(park => park._id === id)
      this.setState({featuredPark,
                      id, 
                      mainImage: featuredPark.images[0],
                      images: featuredPark.images,
                      address: featuredPark.address,
                      reviews: featuredPark.reviews,
                      region: featuredPark.region,
                      phone: featuredPark.phone,
                      rating: featuredPark.rating,
                      latitude: featuredPark.latitude, 
                      longitude: featuredPark.longitude,
                      website: featuredPark.website,
                      mainIndex: 0,
                    })
    }
  }

  changeImage = (index) => {
    const { images } = this.state
    this.setState({mainImage: images[index], mainIndex: index})
  }
  
  render () {
    console.log (this.state, 'state in park page')
    const { featuredPark, id, images, mainImage, address, phone, region, website, mainIndex } = this.state
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
                <MainParkImage src={mainImage}/>
              </MainImageContainer>
              <OuterSliderContainer>
                <SkateSlider parkImages={images} changeImage={this.changeImage} mainIndex={mainIndex}/>
              </OuterSliderContainer>
            </ImagesContainer>
            <DetailsContainer>
              <div>
                <DetailTitle>Region</DetailTitle>
                <Details>{regionNames[region]}</Details>
              </div>
              <div>
                <DetailTitle>Address</DetailTitle>
                <Details>{address.street}</Details>
                <Details>{address.city}, {address.state} {address.zip}</Details>
              </div>
              <div>
                <DetailTitle>Phone</DetailTitle>
                <Details>{phone}</Details>
              </div>
              <div>
                <WebLink href={website}>website</WebLink>
              </div>
            </DetailsContainer>
          </MainContainer>
        )}
      </>
    )
  }
}

export default SkateParkPage

