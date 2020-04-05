import { createGlobalStyle } from 'styled-components'
import { olympicwoff } from './index'  

import osakawoff from './osaka-re-webfont.woff'
import osakawoff2 from './osaka-re-webfont.woff2' 

export default createGlobalStyle `
  @font-face {
    font-family: 'olympic_brandingregular';
    
    src: url(${olympicwoff}) format('woff2'),
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'osaka-sans_serifregular';
    src: local ('osaka-re-webfont.woff2'), local('osaka-re-webfont.woff')
    url(${osakawoff}) format('woff2'),
    url(${osakawoff2}) formmat('woff');
    font-weight: normal;
    font-style: normal;
  }  
`