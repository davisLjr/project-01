import React from 'react'
import { Grid, GridItem, Image } from '@chakra-ui/react'
import cluster from './assets/Logo/cluster.png'
import asobanca from './assets/Logo/asobanca.png'
import ipbf from './assets/Logo/ipbf.png'
import telecom from './assets/Logo/telecom.png'
import ebanx from './assets/Logo/ebanx.png'
import zendesk from './assets/Logo/zendesk.png'

export const Banner = () => {
  return(
    <>
      <Grid 
        templateColumns={{ base:'repeat(3, 1fr)', lg:'repeat(6, 1fr)' }} 
        gap={6} 
        mb='80px'>

        <GridItem sx={styles}>
          <Image src={ cluster } alt="cluster" />
        </GridItem>
        <GridItem sx={styles}>
          <Image src={ asobanca } alt="asobanca" />
        </GridItem>
        <GridItem sx={styles}>
          <Image src={ ipbf } alt="ipbf" />
        </GridItem>
        <GridItem sx={styles}>
          <Image src={ telecom } alt="telecom" />
        </GridItem>
        <GridItem sx={styles}>
          <Image src={ ebanx } alt="ebanx" />
        </GridItem>
        <GridItem sx={styles}>
          <Image src={ zendesk } alt="zendesk" />
        </GridItem>
      </Grid>
    </>
  )
}

const styles = {
  width:'100%',
  display:'flex',
  alignItems:'center',
  '.gatsby-image-wrapper':{
    margin:'auto'
  },
};