import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import GlobalFonts from '../../fonts/fonts'
import ensoCursiveRed from '../../images/enso_cursive_darkred_nosub.png'

const StyledHeaderContainer = styled.div`
  display: flex;  
  flex-direction: row;
  padding: 1vw;
  align-items: center;
`

const StyledLogo = styled.img `
  width: auto;
  height: 8vw;  
`

const StyledHeaderTitle = styled.h3`
  font-size: 5vw; 
  margin: 0;
  margin-left: 24%;  
  font-family: 'Osaka-Sans Serif';
  font-style: normal;
  color: rgb(119, 33, 46);  
`

const StyledNavContainer = styled.div`
  top: 0;
  z-index: 50; 
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  align-items: center; 
  height: 5vw;
  background: rgb(119, 33, 46);
  justify-content: flex-end;
  border-top: 1px solid #F8F8FF; 
  border-bottom: 1px solid #F8F8FF;   
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end; 
  margin-right: 1vw;
  align-items: center;   
`

const StyledLink = styled(Link)`
  color: white;
  margin-left: .75vw;
  margin-right: .75vw; 
  font-size: 1.75vw; 
  font-family: 'Dosis', sans-serif;
  font-weight: 400; 
  text-decoration: none;
    
  @media (max-width: 900px) {
    font-size: 2.5vw
  } 
  
  &:hover {
    font-weight: 400;
    color: #ffd700;
  }
`

const Header = () => {
  return (
    <>
      <StyledHeaderContainer>
        <GlobalFonts/>
        <Link to="/">
          <StyledLogo src={ensoCursiveRed} />
        </Link>
        <StyledHeaderTitle>Zen Skate Co.</StyledHeaderTitle>
      </StyledHeaderContainer>
      <StyledNavContainer>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <span>  </span>
          <StyledLink to="/skateparks">Skate Parks</StyledLink>
          <span>  </span>
          <StyledLink to="/about">About</StyledLink>
        </StyledNav>
      </StyledNavContainer>
    </>
  )
}

export default Header;
