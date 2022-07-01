import React from 'react'
import { Hero } from '../../Components/Hero/index'
import { Box } from '@chakra-ui/react'
import { MainDetails } from '../../Components/MainDetails/index'

export const HomePage = () => {
  return(
    <Box>
      <Hero/>
      <MainDetails/>
    </Box>
  ) 
}
