import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { Banner } from './components/Banner'
import { Details } from './components/Details' 
import { WorkGroup } from './components/WorkGroup'
import { Invitation } from './components/Invitation'
import { Form } from './components/Form'

export const MainDetails = () => {

  return(
    <Flex 
      p='0px 20px' 
      maxWidth='1400px' 
      margin='auto' 
      flexDirection={{ base:'column', lg:'row' }}
    >
      <Box 
        w={{ base:'100%', lg:'60%' }} 
        mt='80px' 
        p={{ base:'0px 10px' , lg:'0px 80px 0px 10px' }}
      >
        <Banner/>
        <Details/>
        <WorkGroup/>
        <Invitation/>
        <Banner/>
      </Box>
      
      <Box 
        w={{ base:'100%', md:'70%', lg:'40%' }} 
        margin='80px auto'
      >
        <Form />
      </Box>
    </Flex>
  )
} 
