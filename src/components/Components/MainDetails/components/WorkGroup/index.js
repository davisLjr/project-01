import React from 'react'
import { HStack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react'
import presidente from './profile/three.jpg'
import customer from './profile/two.jpg'
import senior from './profile/one.jpg'
import gerente from './profile/four.jpg'
import Zoom from 'react-reveal/Zoom';

export const WorkGroup = () => {
  return(
    <Box>   
      <Zoom left>      
        <HStack sx={styles} spacing={{ base:'15px', lg:'30px' }} >
          <Box className='profile'>
            <Image src={ presidente } alt="presidente" className='image' />
          </Box>
          <Flex flexDirection='column' className='main-description'>
            <Box>
              <Heading sx={stylesName}>
                Dana Lucía
              </Heading>
            </Box>
            <Box>
              <Text sx={stylesJob}>
                Presidente
              </Text>
            </Box>
          </Flex>
        </HStack>
      </Zoom> 

      <Zoom left>
        <HStack sx={styles} spacing={{ base:'15px', lg:'30px' }} >
          <Box className='profile'>
            <Image src={ customer } alt="Customer Service Senior Manager" className='image'/>
          </Box>
          <Flex flexDirection='column' className='main-description'>
            <Box>
              <Heading sx={stylesName}>
                José Perez
              </Heading>
            </Box>
            <Box>
              <Text sx={stylesJob}>
                Customer Service Senior Manager
              </Text>
            </Box>
          </Flex>
        </HStack>
      </Zoom>

      <Zoom left>
        <HStack sx={styles} spacing={{ base:'15px', lg:'30px' }} >
          <Box className='profile'>
            <Image src={ senior } alt="Senior Customer Success Consultant" className='image'/>
          </Box>
          <Flex flexDirection='column' className='main-description'>
            <Box>
              <Heading sx={stylesName}>
                María Isabel
              </Heading>
            </Box>
            <Box>
              <Text sx={stylesJob}>
                Senior Customer Success Consultant
              </Text>
            </Box>
          </Flex>
        </HStack>
      </Zoom>

      <Zoom left>
        <HStack sx={styles} spacing={{ base:'15px', lg:'30px' }} >
          <Box className='profile'>
            <Image src={ gerente } alt="Gerente de Consultoría de Soluciones" className='image'/>
          </Box>
          <Flex flexDirection='column' className='main-description'>
            <Box >
              <Heading sx={stylesName}>
                Matías Daniel
              </Heading>
            </Box>
            <Box>
              <Text sx={stylesJob}>
                Gerente de Consultoría de Soluciones
              </Text>
            </Box>
          </Flex>
        </HStack>
      </Zoom>
    </Box>
  )
}

export default WorkGroup

const styles = {
  flexDirection:{ base:'column', md:'row' },
  marginTop:'40px',
  boxShadow:'rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px',
  bg:'white',
  p:'30px 20px',
  w:{ base:'100%', lg:'70%'},
  borderRadius:'4px',
  transition:'0.3s',
  _hover:{
    transform: { base:'translateX(0px)', lg:'translateX(30px)' },
    transition:'0.3s',
  },

  '.profile' : {
    width:'80px',
    height:'80px',
    borderRadius:'50%',
    '.image':{
      width:'80px',
      height:'80px',
      borderRadius:'50%',
      objectFit:'cover'
    }
  },

  '.main-description' : {
    textAlign:{ base:'center', md:'start' },
    marginLeft:{ base:'0px', md:'30px' },
  }
}

const stylesJob = {
  fontSize:'xs',
  textAlign:{ base:'center', md:'start' }, 
  color:'text.greenText', 
  m:'0px',
  fontFamily:'heading'
}

const stylesName = {
  fontSize:'md',
  color:'text.greenText',
  lineHeight:'30px',
 
}