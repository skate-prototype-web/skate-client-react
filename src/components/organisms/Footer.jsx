import React from 'react'
import styled from 'styled-components'

const ZenFooter = styled.footer`
  background: rgb(119, 33, 46);
  height: 15vw;
  margin-top: 3vw;   
`

const FooterZen = styled.p `
  color: white;
  font-family: 'Dosis', sans-serif;
  font-size: 1.85vw;
  margin-left: 3vw;
  padding-top: 2vw;   
`

const FooterBuild = styled.p`
  color: white;
  font-family: 'Dosis', sans-serif; 
  font-size: 1.85vw; 
  margin-left: 3vw; 
`

const Footer = props => {
  return (
    <ZenFooter>
      <FooterZen>
        &#169; 2020 Zen Skate Co. 
      </FooterZen>
      <FooterBuild>
        Engineered and built from the ground up by Scott Nassau on a MERN Stack
      </FooterBuild>
    </ZenFooter>
  )
}

export default Footer