import React from 'react'
import { Box, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'
import { HeadingHero } from './component/Heading'

const float = keyframes`
  0% { transform: translate(0px, 0px); }
  50% { transform: translate(0px, 40px); }
  60% { transform: translate(0px, 40px); }
  100% { transform: translate(0px, 0px); }
`

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
  ? undefined
  : `${float} infinite 4s linear`

  return(
    <Box 
      boxSizing='border-box'
      p={{ base:'60px 20px', md:'40px', lg:'80px 40px' }}
      w='100%'
      bg='heroBackground'
      textAlign={{ base:'start', md:'center' }}
      alignItems='center'
      display='flex'
      position='relative' 
      overflow='hidden' 
    >
      <Box
        position='absolute'
        width='200px'
        height='200px'
        borderRadius='50%'
        top='-130px'
        right={{ base:'-100px', lg:'5%' }}
        bg='heroBackgroundLight'
        display='block'
        animation={animation}
      >
      </Box>
      <Box
        position='absolute'
        width='200px'
        height={{ base:'100px', md:'150px', lg:'250px' }}
        borderRadius='50% 50% 0 0'
        bottom='0px'
        left={{ base:'-100px', lg:'5%' }}
        bg='heroBackgroundLight'
        display='block'
        animation={animation}
      >
      </Box>
      <Box zIndex='999' w='100%'>
        <HeadingHero/>
      </Box>
    </Box>
  )
}

