import React from 'react'
import { Text, VStack } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';

export const Details = () => {
  return(
    <VStack mt='40px' spacing={8}
      sx={{
        '.react-reveal':{
          width:'100%'
        }
      }}
    >
      <Fade left>
        <Text sx={styles}>
          Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.
        </Text>
      </Fade>
      <Fade left>
        <Text sx={styles}>
          Además podremos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus clientes, mientras se convertía en el gran Unicornio de LATAM.
        </Text>
      </Fade>
      <Fade left>
        <Text sx={styles}>
          Escucha de primera mano la voz de nuestros especialistas:
        </Text>
      </Fade>
    </VStack>
  )
}

const styles = {
  maxWidth:'100%',
  width:'100%',
  fontSize:'xs',
  fontWeight: 'normal',
  color:'text.smallTextGreen',
  margin:'0px',
}