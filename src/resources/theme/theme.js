// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react'
import { inputStyles as Input  } from './components/inputStyles'
import { buttonStyles as Button  } from './components/buttonStyles'

  const colors = {
    primary: 'rebeccapurple',
    secondary:'#c41818',
    heroBackground:'#fdd6a8',
    heroBackgroundLight:'#fde1c1',
    badge:'#C05100',
    backgroundForm:'#F8F9F9',
    bgFooter:'#F8F9F9',
    grayDefault:'#68737D',

    text: {
      default: '#161616',
      grayText: '#525252',
      lightText: '#ffffff4d',
      greenText: '#06363d',
      smallTextGreen: '#405457',
      titleForm:'#02363D'
    },

    borders:{
      grayDefault:'#68737D',
      greenDefault:'#02363D'
    },

    buttons:{
      default:'#02363D',
      disabledColor:'#9e9e9e4d',
      disabledbg:'#e7e9eb',
      hoverBg:'#02363de6',
    },
  }

  const styles = {
    global: {
      // styles for the `body`
      body: {
        bg: '#ffffff',
        color: '#161616',
        boxSizing:'border-box',
        scrollBehavior: 'smooth',
      },
      
    },
  }

const fontSizes = {
  "mini":"13px",
  "0xs":"14px",
  xs: "16px",
  sm: "19px",
  md: "20px",
  lg: "21px",
  xl: "40px",
}

const fonts ={
  body:'ProximaNova, arial',
  heading:'SharpSans, arial',
  a:'Shsn, arial'
}

export const appTheme = {
  colors,
  styles,
  fontSizes,
  fonts,
  components: {
    Input,
    Button,
  }
}

export const theme = extendTheme(appTheme)