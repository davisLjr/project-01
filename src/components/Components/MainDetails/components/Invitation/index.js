import React from 'react'
import { Text, VStack } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';

export const Invitation = () => {
  return(
    <VStack m='40px 0px 80px' spacing={8}
      sx={{
        '.react-reveal':{
          width:'100%'
        }
      }}
    >
      <Fade left>
        <Text sx={styles}>
          mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.
        </Text>
      </Fade>
      <Fade left>
        <Text sx={styles}>
          ¡Te esperamos!
        </Text>
      </Fade>
    </VStack>
  )
}

const styles = {
  maxWidth:'100%',
  width:'100%',
  fontSize:'xs',
  color:'text.smallTextGreen',
  margin:'0px',
}