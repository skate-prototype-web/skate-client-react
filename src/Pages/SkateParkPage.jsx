import React, { Component } from 'react'
import axios from 'axios'
import ResponsiveMainContainer from '../Components/atoms/ResponsiveMainContainer'
import Header from '../Components/organisms/Header'
import Footer from '../Components/organisms/Footer'
import SkateSlider from '../Components/molecules/SkateSlider'
import styled from 'styled-components'
import regionNames from '../regionNames'
import MapPark from '../Components/molecules/MapPark'

const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: 9fr 3fr;
  margin-top: .5vw;
  width: 100%; 
  background: rgba(255, 255, 255, .9);
  max-width: 1100px;
  @media(min-width: 1100px) {
    margin-top:7px;
  } 
`

const NameContainer = styled.div`
  display: flex; 
  flex-direction: column;
`

const ParkName = styled.h1 `
  font-weight: 600;
  color: rgb(119, 33, 46); 
  font-family: 'Dosis', sans-serif;
  font-size: 3.75vw;
  text-align: left;
  margin-left: 3vw; 
  margin-bottom: 1vw;
  @media(min-width: 1100px) {
    font-size: 40px;
    margin-left: 30px;
    margin-bottom: 10px; 
  }
`

const Region = styled.h2 `
  font-weight: 300; 
  color: rgb(119, 33, 46);
  font-family: 'Dosis', sans-serif; 
  font-size: 3vw;
  padding: 0;
  text-align: left;
  margin-top: 1vw; 
  margin-left: 3vw;
  @media(min-width: 1100px) {
    font-size: 30px;
    margin-left: 30px;
    margin-top: 10px
  } 
`

const DetailTitle = styled.h4 `
  font-weight: 400;
  font-family: 'Dosis', sans-serif;
  font-size: 1.85vw; 
  margin-left: 1vw; 
  margin-top: 1vw; 
  margin-bottom: .25vw; 
  color: #ffd700;
  
  @media(min-width: 1100px) {
    font-size: 20px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 3px;
  }
`

const Details = styled.p`
  font-weight: 300; 
  font-family: 'Dosis', sans-serif; 
  font-size: 1.65vw; 
  margin-left: 1.5vw; 
  margin-top: .25vw; 
  margin-bottom: .25vw; 
  color: white;

  @media(min-width: 1100px) {
    font-size: 18px;
    margin-left: 15px;
    margin-top: 3px;
    margin-bottom: 3px;
  }
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
    color: #ffd700;
    font-weight: 700; 
  }

  @media(min-width: 1100px) {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 10px;
    margin-left: 13px;
  }
`

const ImagesContainer = styled.div`
  width: 100%; 
  height: auto;
  display: grid;
  max-width: 1100px;
  grid-template-columns: 9fr 3fr;
  justify-content: center; 
`

const MainImageContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 

`

const MainParkImage = styled.img` 
  width: 100%;
  height: 45vw;
  object-fit: fill  ;
  border: solid #A9A9A9;
  border-radius: 1%;
  @media(min-width: 1100px) {
    height: 475px;
  }
`

const OuterSliderContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex; 
`

const DetailsContainer = styled.div`
  background: rgba(119, 33, 46, .7);
  display: flex; 
  flex-direction: column;
  border: solid 2px #ffd700;    
`

const MapContainer = styled.div`
  display: flex;
  justify-content: center; 
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
      .get(`http://54.245.129.246:9000/skateparks/api/parks/${id}`)
      .then(({data}) => {
        this.setState({featuredPark: data,
                      id,
                      name: data.name,
                      mainImage: data.images[0],
                      images: data.images,
                      address: data.address, 
                      reviews: data.reviews, 
                      region: data.region, 
                      phone: data.phone, 
                      rating: data.rating, 
                      latitude: data.latitude, 
                      longitude: data.longitude,
                      geolat: data.geolat,
                      geolong: data.geolong,
                      website: data.website,
                      mainIndex: 0,
                    })
      })
      .catch (error => console.log (`Error in get request in ParkPage ${error}`))
    } else {
      featuredPark = skateParks.find(park => park._id === id)
      this.setState({featuredPark,
                      id,
                      name: featuredPark.name, 
                      mainImage: featuredPark.images[0],
                      images: featuredPark.images,
                      address: featuredPark.address,
                      reviews: featuredPark.reviews,
                      region: featuredPark.region,
                      phone: featuredPark.phone,
                      rating: featuredPark.rating,
                      latitude: featuredPark.latitude, 
                      longitude: featuredPark.longitude,
                      geolat: featuredPark.geolat,
                      geolong: featuredPark.geolong,
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
    const { name, featuredPark, id, images, mainImage, address, phone, region, website, mainIndex, geolat, geolong } = this.state
    return (
      <>
        <Header/>
          <ResponsiveMainContainer>
            {featuredPark !== undefined && (
              <InformationContainer>
                <NameContainer>
                  <ParkName>{featuredPark.name}</ParkName>
                  <Region>{regionNames[region]} region</Region>
                </NameContainer>
                <DetailsContainer>
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
              </InformationContainer>
            )}
          {featuredPark !== undefined && (
            <ImagesContainer>
              <MainImageContainer>
                <MainParkImage src={mainImage}/>
              </MainImageContainer>
              <OuterSliderContainer>
                <SkateSlider parkImages={images} changeImage={this.changeImage} mainIndex={mainIndex}/>
              </OuterSliderContainer>
            </ImagesContainer>
          )}
          {featuredPark !== undefined && (
            <MapContainer>
              <MapPark id={id} name={name} address={address} geolat={geolat} geolong={geolong}/>
            </MapContainer>
          )}
          </ResponsiveMainContainer>
        <Footer/>
      </>
    )
  }
}

export default SkateParkPage

