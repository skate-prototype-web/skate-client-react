import React from 'react'
import AreaParks from '../Components/parks/AreaParks'
import Header from '../Components/organisms/Header'

const SkateParkPage = (props) => {
  const { skateParksRaw, id } = props
  console.log (skateParksRaw, id, 'props in')
  let featuredPark = skateParksRaw.filter(park => park._id === id)
  console.log (featuredPark, 'Featured Park') 
  return (
    <>
      <Header/>
      <h1>{featuredPark.name}</h1>
    </>
  )
}

export default SkateParkPage