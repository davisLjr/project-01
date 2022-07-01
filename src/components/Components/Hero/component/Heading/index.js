import React from 'react'
import { Box, Text, Heading, Badge } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';

export const HeadingHero = () => {
  return(
    <Box 
      w='100%'
      m='0px'
      p='0px'
      overflow='hidden'
    > 
      <Fade top>
        <Badge 
          bg='badge'
          color='white'
          p='5px 12px 4px'
          fontSize='mini'
          borderRadius='3px'
          mb='20px'
          letterSpacing='0.93px'
        >
          WEBINAR
        </Badge>
      </Fade>
      
      <Fade>
        <Heading fontSize={{ base:'lg', md:'xl' }}color='text.greenText'>
          El reto de humanizar el CX financiero en 2021.
        </Heading>
      </Fade>

      <Fade>
        <Heading fontSize={{ base:'lg', md:'xl' }}
          sx={styles}
          fontStyle='italic'
        >
          La experiencia de un Unicornio de Latam
        </Heading>
      </Fade>

      <Fade bottom>
        <Text sx={styles}
          fontSize={{ base:'xs', md:'lg' }}
          textTransform='uppercase'
        >
          Miércoles 16 de diciembre | 17 hs (Horario de Quito)
        </Text>
      </Fade>
    </Box>
  )
}

const styles = {
  maxWidth:'100%',
  margin:'8px 0px',
  color:'text.greenText',
}